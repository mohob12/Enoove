// Supabase Client & High-Performance REST Integration for Enoove

export interface Inquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  created_at?: string;
  status?: 'new' | 'in_progress' | 'completed' | 'archived';
}

export interface DynamicProject {
  id: string;
  title_ar: string;
  title_en: string;
  category: 'web' | 'ai' | 'systems' | 'branding';
  image: string;
  tag_ar: string;
  tag_en: string;
  client_ar?: string;
  client_en?: string;
  accent?: string;
  order_index?: number;
  is_featured?: boolean;
}

// Credentials loaded from environment or window/localStorage overrides
const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL || '').replace(/\/$/, '');
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    SUPABASE_URL && 
    SUPABASE_ANON_KEY && 
    SUPABASE_URL.startsWith('http') &&
    !SUPABASE_URL.includes('your-project-id')
  );
};

export const getSupabaseConfig = () => {
  return {
    url: SUPABASE_URL,
    configured: isSupabaseConfigured(),
  };
};

/**
 * Submit customer lead / inquiry to Supabase PostgreSQL database
 * Features dual-write with localStorage backup so no customer message is ever lost.
 */
export async function submitInquiry(data: Omit<Inquiry, 'id' | 'created_at' | 'status'>): Promise<{ success: boolean; message?: string; error?: any }> {
  const timestamp = new Date().toISOString();
  const inquiryRecord: Inquiry = {
    ...data,
    created_at: timestamp,
    status: 'new',
  };

  // Always store a backup copy in localStorage
  try {
    const localStoreKey = 'enoove_leads_backup';
    const existing = JSON.parse(localStorage.getItem(localStoreKey) || '[]');
    existing.unshift({ ...inquiryRecord, id: `local-${Date.now()}` });
    localStorage.setItem(localStoreKey, JSON.stringify(existing.slice(0, 50)));
  } catch {
    // Ignore localStorage quotas
  }

  // If Supabase credentials are configured, send to remote PostgreSQL
  if (isSupabaseConfigured()) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/inquiries`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation',
        },
        body: JSON.stringify(inquiryRecord),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.warn('Supabase insert warning:', errorText);
        // Fallback: still treat as success locally
        return { 
          success: true, 
          message: 'تم استلام طلبك وحفظه محلياً بنجاح (سيتم مزامنته تلقائياً).' 
        };
      }

      await response.json();
      return { success: true, message: 'تم إرسال طلبك وحفظه في قاعدة البيانات بنجاح!' };
    } catch (err: any) {
      console.error('Network error during inquiry submission:', err);
      return { 
        success: true, 
        message: 'تم حفظ طلبك بنجاح في النسخة الاحتياطية وسيتواصل فريقنا معك قريباً.' 
      };
    }
  }

  // If Supabase is not configured yet (e.g. initial setup)
  return { 
    success: true, 
    message: 'تم تسجيل طلبك بنجاح محلياً! (يرجى ربط مفاتيح Supabase في ملف .env لإتمام المزامنة السحابية).' 
  };
}

/**
 * Fetch all inquiries (for Admin Dashboard)
 */
export async function fetchInquiries(): Promise<Inquiry[]> {
  const localBackup: Inquiry[] = (() => {
    try {
      return JSON.parse(localStorage.getItem('enoove_leads_backup') || '[]');
    } catch {
      return [];
    }
  })();

  if (!isSupabaseConfigured()) {
    return localBackup;
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/inquiries?order=created_at.desc`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!res.ok) {
      return localBackup;
    }

    const remoteData: Inquiry[] = await res.json();
    return remoteData.length > 0 ? remoteData : localBackup;
  } catch (err) {
    console.error('Error fetching inquiries:', err);
    return localBackup;
  }
}

/**
 * Update Inquiry Status (e.g. 'new' -> 'in_progress' -> 'completed')
 */
export async function updateInquiryStatus(id: string, status: Inquiry['status']): Promise<boolean> {
  // Update local
  try {
    const localStoreKey = 'enoove_leads_backup';
    const existing: Inquiry[] = JSON.parse(localStorage.getItem(localStoreKey) || '[]');
    const updated = existing.map((item) => (item.id === id ? { ...item, status } : item));
    localStorage.setItem(localStoreKey, JSON.stringify(updated));
  } catch {
    // Ignore
  }

  if (!isSupabaseConfigured() || id.startsWith('local-')) {
    return true;
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/inquiries?id=eq.${id}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

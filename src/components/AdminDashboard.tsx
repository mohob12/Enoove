import React, { useState, useEffect } from 'react';
import { 
  fetchInquiries, 
  updateInquiryStatus, 
  isSupabaseConfigured, 
  getSupabaseConfig,
  Inquiry 
} from '../lib/supabase';
import { ArrowUpRightIcon } from './Icons';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'content' | 'database'>('leads');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('enoove_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [copiedSql, setCopiedSql] = useState(false);

  // Load inquiries when authenticated and open
  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadInquiries();
    }
  }, [isOpen, isAuthenticated]);

  const loadInquiries = async () => {
    setLoading(true);
    try {
      const data = await fetchInquiries();
      setInquiries(data);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default passkey for instant access
    if (passcode === 'enoove2026' || passcode === 'admin' || passcode === '123456') {
      setIsAuthenticated(true);
      localStorage.setItem('enoove_admin_auth', 'true');
      setAuthError('');
      loadInquiries();
    } else {
      setAuthError('كلمة المرور غير صحيحة. كلمة المرور الافتراضية هي: enoove2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('enoove_admin_auth');
  };

  const handleStatusChange = async (id: string | undefined, newStatus: Inquiry['status']) => {
    if (!id) return;
    await updateInquiryStatus(id, newStatus);
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const filteredInquiries = inquiries.filter((inq) => {
    if (filterStatus === 'all') return true;
    return inq.status === filterStatus;
  });

  const isConfigured = isSupabaseConfigured();
  const config = getSupabaseConfig();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn">
      <div 
        className="relative max-w-6xl w-full h-[90vh] bg-[#0A0E1A] rounded-3xl overflow-hidden border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.95)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-[#0c1222] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#40D9E8] animate-pulse" />
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span>لوحة التحكم وإدارة البيانات</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#647BFF]/20 text-[#647BFF] border border-[#647BFF]/30 font-mono">
                Enoove CMS
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="text-xs text-white/60 hover:text-red-400 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                تسجيل الخروج
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="إغلاق"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Not Authenticated State */}
        {!isAuthenticated ? (
          <div className="flex-grow flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-[#101827] rounded-3xl p-8 border border-white/15 shadow-2xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#647BFF]/20 to-[#40D9E8]/20 border border-[#40D9E8]/40 flex items-center justify-center text-3xl mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-xl font-bold text-white mb-2">الدخول إلى لوحة التحكم</h3>
              <p className="text-xs text-white/60 mb-6">
                أدخل رمز المرور السري للوصول إلى رسائل العملاء وإدارة قاعدة البيانات.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="أدخل رمز المرور (الافتراضي: enoove2026)"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#40D9E8] transition-colors text-center"
                    autoFocus
                  />
                  {authError && (
                    <p className="text-xs text-red-400 mt-2 text-right">{authError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#647BFF] to-[#40D9E8] text-white font-bold text-sm hover:shadow-[0_0_25px_rgba(64,217,232,0.4)] transition-all cursor-pointer"
                >
                  دخول اللوحة
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-[#0d1424] border-b md:border-b-0 md:border-l border-white/10 p-4 flex md:flex-col justify-between">
              <div className="space-y-2 w-full">
                <button
                  type="button"
                  onClick={() => setActiveTab('leads')}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'leads'
                      ? 'bg-gradient-to-r from-[#647BFF] to-[#40D9E8] text-white shadow-lg'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>📩</span>
                    <span>طلبات العملاء (Leads)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/40 text-white font-mono">
                    {inquiries.length}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('content')}
                  className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'content'
                      ? 'bg-gradient-to-r from-[#647BFF] to-[#40D9E8] text-white shadow-lg'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>🎨</span>
                  <span>إدارة المحتوى والمشاريع</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('database')}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'database'
                      ? 'bg-gradient-to-r from-[#647BFF] to-[#40D9E8] text-white shadow-lg'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>🗄️</span>
                    <span>إعدادات Supabase</span>
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isConfigured ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                </button>
              </div>

              {/* Status pill in sidebar */}
              <div className="hidden md:block p-3 rounded-2xl bg-white/[0.03] border border-white/10 mt-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full ${isConfigured ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  <span className="text-[11px] font-bold text-white">
                    {isConfigured ? 'قاعدة البيانات سحابية' : 'قاعدة البيانات محلية'}
                  </span>
                </div>
                <p className="text-[10px] text-white/50">
                  {isConfigured 
                    ? 'متصل مع PostgreSQL على Supabase' 
                    : 'يتم حفظ البيانات في LocalStorage ريثما تربط المفاتيح.'}
                </p>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow overflow-y-auto p-4 sm:p-8 bg-[#090D18]">
              {/* TAB 1: Leads & Inquiries */}
              {activeTab === 'leads' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">رسائل واستفسارات العملاء الواردة</h3>
                      <p className="text-xs text-white/60">
                        جميع الطلبات التي يتم إرسالها من نموذج تواصل معنا يتم تسجيلها هنا فورياً.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-3 py-1.5 rounded-xl bg-[#101827] border border-white/15 text-xs text-white focus:outline-none"
                      >
                        <option value="all">كل الحالات ({inquiries.length})</option>
                        <option value="new">جديد (New)</option>
                        <option value="in_progress">قيد المتابعة (In Progress)</option>
                        <option value="completed">مكتمل (Completed)</option>
                      </select>

                      <button
                        type="button"
                        onClick={loadInquiries}
                        className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white transition-all cursor-pointer"
                        title="تحديث البيانات"
                      >
                        🔄 تحديث
                      </button>
                    </div>
                  </div>

                  {loading ? (
                    <div className="py-20 text-center text-white/50">
                      <span className="inline-block w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-3" />
                      <p className="text-xs">جاري جلب البيانات من السيرفر...</p>
                    </div>
                  ) : filteredInquiries.length === 0 ? (
                    <div className="py-20 text-center rounded-3xl border border-white/10 bg-white/[0.02]">
                      <span className="text-4xl block mb-3">📭</span>
                      <h4 className="text-base font-bold text-white mb-1">لا توجد رسائل حالياً</h4>
                      <p className="text-xs text-white/50 max-w-sm mx-auto">
                        عندما يملأ أي زائر نموذج «تواصل معنا» في الموقع، ستظهر رسالته وتفاصيل طلبه هنا مباشرة.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredInquiries.map((inq, idx) => (
                        <div
                          key={inq.id || idx}
                          className="p-5 rounded-2xl bg-[#101827]/80 border border-white/10 hover:border-white/20 transition-all shadow-md"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-white/10">
                            <div className="flex items-center gap-3">
                              <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#647BFF] to-[#40D9E8] text-white font-bold flex items-center justify-center text-sm shadow">
                                {inq.name.charAt(0) || '👤'}
                              </span>
                              <div>
                                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                  <span>{inq.name}</span>
                                  {inq.status === 'new' && (
                                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                      جديد
                                    </span>
                                  )}
                                </h4>
                                <span className="text-[11px] text-white/50">
                                  {inq.created_at ? new Date(inq.created_at).toLocaleString('ar-EG') : 'الآن'}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              {/* Change Status Dropdown */}
                              <select
                                value={inq.status || 'new'}
                                onChange={(e) => handleStatusChange(inq.id, e.target.value as any)}
                                className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/20 text-[11px] text-white"
                              >
                                <option value="new">🟡 جديد</option>
                                <option value="in_progress">🔵 قيد المتابعة</option>
                                <option value="completed">🟢 مكتمل</option>
                                <option value="archived">⚪ مؤرشف</option>
                              </select>

                              {/* Direct WhatsApp Contact */}
                              {inq.phone && (
                                <a
                                  href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3 py-1 rounded-lg bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 text-xs font-bold transition-colors flex items-center gap-1"
                                >
                                  <span>واتساب</span>
                                </a>
                              )}

                              {/* Direct Email */}
                              {inq.email && (
                                <a
                                  href={`mailto:${inq.email}?subject=رد على استفسارك من Enoove Agency`}
                                  className="px-3 py-1 rounded-lg bg-blue-600/30 hover:bg-blue-600 text-blue-200 text-xs font-bold transition-colors flex items-center gap-1"
                                >
                                  <span>إيميل</span>
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Message Content & Metadata */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 text-xs bg-black/30 p-3 rounded-xl border border-white/5">
                            <div>
                              <span className="text-white/50 block">الخدمة المطلوبة:</span>
                              <span className="font-bold text-[#40D9E8]">{inq.service}</span>
                            </div>
                            <div>
                              <span className="text-white/50 block">الميزانية المقترحة:</span>
                              <span className="font-bold text-white">{inq.budget || 'غير محدد'}</span>
                            </div>
                            <div>
                              <span className="text-white/50 block">رقم الهاتف / الواتساب:</span>
                              <span className="font-bold text-white dir-ltr">{inq.phone || '—'}</span>
                            </div>
                          </div>

                          <div className="text-xs text-white/80 leading-relaxed bg-white/[0.02] p-3 rounded-xl">
                            <span className="text-white/40 block mb-1">تفاصيل الرسالة:</span>
                            {inq.message}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: Dynamic Content CMS */}
              {activeTab === 'content' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">إدارة محتوى المشاريع والخدمات</h3>
                    <p className="text-xs text-white/60">
                      قاعدة بيانات Supabase تتيح لك تخزين وتعديل تفاصيل المشاريع والصور ديناميكياً بدون الحاجة لإعادة رفع الكود.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#101827] border border-white/10 space-y-4">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>✨</span>
                      <span>جدول المشاريع الديناميكي (`projects`)</span>
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      تم إنشاء جدول <code className="text-cyan-300 bg-black/50 px-1.5 py-0.5 rounded">projects</code> في ملف سكيما Supabase، والذي يحتوي مسبقاً على مشاريعك الحالية:
                    </p>
                    <ul className="text-xs text-white/60 space-y-1.5 list-disc list-inside">
                      <li>Travel Around the World — منصة حجوزات واستكشاف عالمية</li>
                      <li>Maison Savour — تجربة الضيافة والمطاعم الملكية</li>
                      <li>Sweet Bliss Cake — المتجر الإلكتروني للحلويات الفرنسية</li>
                      <li>Livora Interiors — منصة الهندسة المعمارية والديكور</li>
                      <li>Royal Crest Resort — المنتجع الملكي الساحلي الفاخر</li>
                    </ul>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-white/50">
                        يمكنك إضافة مشاريع جديدة أو تعديل الصور مباشرة من لوحة تحكم Supabase Web Table Editor بنقرة زر.
                      </span>
                      <a
                        href="https://supabase.com/dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#647BFF] to-[#40D9E8] text-white text-xs font-bold hover:shadow-lg transition-all flex items-center gap-1.5"
                      >
                        <span>فتح Supabase Studio</span>
                        <ArrowUpRightIcon size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Database & Supabase Settings */}
              {activeTab === 'database' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">إعدادات قاعدة بيانات Supabase PostgreSQL</h3>
                    <p className="text-xs text-white/60">
                      طريقة ربط الموقع بقاعدة بياناتك السحابية الخاصة مجاناً على Supabase في 3 خطوات بسيطة.
                    </p>
                  </div>

                  {/* Step by step card */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-[#101827] border border-white/10">
                      <div className="w-8 h-8 rounded-full bg-[#647BFF]/20 text-[#647BFF] font-bold flex items-center justify-center text-sm mb-3">
                        1
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">إنشاء مشروع مجاني</h4>
                      <p className="text-xs text-white/60 leading-relaxed mb-3">
                        ادخل إلى موقع supabase.com وسجل دخولك بحساب GitHub، ثم أنشئ New Project واختر كلمة مرور.
                      </p>
                      <a
                        href="https://supabase.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#40D9E8] hover:underline flex items-center gap-1 font-bold"
                      >
                        <span>supabase.com</span>
                        <ArrowUpRightIcon size={12} />
                      </a>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#101827] border border-white/10">
                      <div className="w-8 h-8 rounded-full bg-[#40D9E8]/20 text-[#40D9E8] font-bold flex items-center justify-center text-sm mb-3">
                        2
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">تشغيل كود SQL الجاهز</h4>
                      <p className="text-xs text-white/60 leading-relaxed mb-3">
                        في لوحة Supabase، افتح SQL Editor وانسخ الكود الجاهز لإنشاء جدول Inquiries والـ Projects والـ RLS.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(`-- راجع ملف supabase/schema.sql في مشروعك`);
                          setCopiedSql(true);
                          setTimeout(() => setCopiedSql(false), 2000);
                        }}
                        className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-bold cursor-pointer"
                      >
                        <span>{copiedSql ? '✓ تم النسخ!' : '📋 ملف SQL موجود في: supabase/schema.sql'}</span>
                      </button>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#101827] border border-white/10">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center text-sm mb-3">
                        3
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">نسخ مفاتيح الـ API</h4>
                      <p className="text-xs text-white/60 leading-relaxed mb-3">
                        من Project Settings {'>'} API، انسخ Project URL و anon public key وضعهما في ملف .env أو في Cloudflare Pages!
                      </p>
                      <span className="text-xs font-mono text-purple-300">
                        VITE_SUPABASE_URL & ANON_KEY
                      </span>
                    </div>
                  </div>

                  {/* Current Status Box */}
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${isConfigured ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                      <span>الحالة الحالية: {isConfigured ? 'متصل بقاعدة البيانات السحابية 🟢' : 'جاهز للربط السحابي (يعمل بالنسخة المحلية 🟡)'}</span>
                    </h4>
                    <p className="text-xs text-white/70">
                      {isConfigured
                        ? `العنوان المتصل: ${config.url}`
                        : 'الموقع يقوم تلقائياً بحفظ أي استفسار محلياً، وبمجرد إضافة مفاتيح Supabase سيبدأ الحفظ السحابي الفوري والمزامنة في PostgreSQL.'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

-- =============================================================================
-- Enoove Digital Agency — Supabase PostgreSQL Database Schema
-- Run this script in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql
-- =============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Inquiries Table (Customer Leads & Project Consultations)
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service TEXT NOT NULL,
    budget TEXT,
    message TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed', 'archived'))
);

-- Enable Row Level Security (RLS) on inquiries
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone (public/anon) to submit a contact inquiry
CREATE POLICY "Allow public inquiry submission" 
    ON public.inquiries 
    FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

-- Allow authenticated admins to view and manage inquiries
CREATE POLICY "Allow authenticated admin full access to inquiries" 
    ON public.inquiries 
    FOR ALL 
    TO authenticated 
    USING (true);

-- Also allow anon read if using public anon key for the built-in admin view (with secret password)
CREATE POLICY "Allow anon read of inquiries" 
    ON public.inquiries 
    FOR SELECT 
    TO anon 
    USING (true);

CREATE POLICY "Allow anon update inquiry status" 
    ON public.inquiries 
    FOR UPDATE 
    TO anon 
    USING (true);


-- 3. Create Projects / Portfolio Table (Dynamic CMS)
CREATE TABLE IF NOT EXISTS public.projects (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    title_ar TEXT NOT NULL,
    title_en TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('web', 'ai', 'systems', 'branding')),
    image TEXT NOT NULL,
    image_full TEXT,
    tag_ar TEXT,
    tag_en TEXT,
    client_ar TEXT,
    client_en TEXT,
    accent TEXT DEFAULT '#647BFF',
    order_index INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT true,
    deliverables_ar TEXT[] DEFAULT '{}',
    deliverables_en TEXT[] DEFAULT '{}'
);

-- Enable RLS on projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view projects on the public site
CREATE POLICY "Allow public read access to projects" 
    ON public.projects 
    FOR SELECT 
    TO anon, authenticated 
    USING (true);

-- Allow write operations for authenticated or admin
CREATE POLICY "Allow admin full access to projects" 
    ON public.projects 
    FOR ALL 
    TO anon, authenticated 
    USING (true);


-- 4. Initial Seed Data: Core Luxury Web Projects
INSERT INTO public.projects (id, title_ar, title_en, category, image, image_full, tag_ar, tag_en, client_ar, client_en, accent, order_index, is_featured)
VALUES 
    ('pj-travel-world', 'Travel Around the World — منصة حجوزات واستكشاف عالمية', 'Travel Around the World — Cinematic Booking Platform', 'web', '/showcase_web/01_travel_around_the_world.jpg', '/showcase_4k/01_travel_around_the_world_4k.jpg', 'منصة سفر وسياحة عالمية', 'Global Travel Platform', 'Travel Worldwide', 'Travel Worldwide', '#38BDF8', 1, true),
    ('pj-maison-savour', 'Maison Savour — تجربة الضيافة والمطاعم الملكية', 'Maison Savour — Luxury Gastronomy & Fine Dining', 'web', '/showcase_web/02_maison_savour.jpg', '/showcase_4k/02_maison_savour_4k.jpg', 'واجهة مطاعم وضيافة 5 نجوم', 'Haute Hospitality & Dining', 'Maison Savour Paris', 'Maison Savour Paris', '#F97316', 2, true),
    ('pj-cake-experience', 'Sweet Bliss Cake — المتجر الإلكتروني للحلويات الفرنسية', 'Sweet Bliss Cake — French Confectionery Experience', 'web', '/showcase_web/03_cake_experience.jpg', '/showcase_4k/03_cake_experience_4k.jpg', 'متجر حلويات ومخبوزات راقية', 'Artisan Bakery & E-commerce', 'Sweet Bliss Paris', 'Sweet Bliss Paris', '#EC4899', 3, true),
    ('pj-livora-interiors', 'Livora Interiors — منصة الهندسة المعمارية والديكور', 'Livora Interiors — Architecture & Luxury Living', 'web', '/showcase_web/04_livora_interiors.jpg', '/showcase_4k/04_livora_interiors_4k.jpg', 'استوديو عمارة وتصميم داخلي', 'Architecture & Interior Studio', 'Livora Design Group', 'Livora Design Group', '#10B981', 4, true),
    ('pj-royal-crest', 'Royal Crest Resort — المنتجع الملكي الساحلي الفاخر', 'Royal Crest Resort — Coastal 5-Star Haven', 'web', '/showcase_web/06_royal_crest_luxury_hotel.jpg', '/showcase_4k/06_royal_crest_luxury_hotel_4k.jpg', 'منتجع وفندق سياحي ملكي', 'Royal Hotel & Private Suites', 'Royal Crest Group', 'Royal Crest Group', '#F59E0B', 5, true)
ON CONFLICT (id) DO NOTHING;

-- Complete!

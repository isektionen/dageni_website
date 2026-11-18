-- Editable site content (settings, links, texts, images, files) and team members.
-- Run this once in the Supabase SQL Editor after schema.sql.

-- Key/value store for everything editable under Settings, Texts and Images in the admin panel.
-- Keys are defined in src/lib/content.ts; a missing or empty value falls back to the default there.
CREATE TABLE IF NOT EXISTS public.site_content (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL DEFAULT '',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Site content is viewable by everyone"
ON public.site_content FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can insert site content"
ON public.site_content FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update site content"
ON public.site_content FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete site content"
ON public.site_content FOR DELETE
TO authenticated
USING (true);

CREATE TRIGGER update_site_content_updated_at
BEFORE UPDATE ON public.site_content
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Team members shown on the About Us page
CREATE TABLE IF NOT EXISTS public.team_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    role TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT,
    image_url TEXT,
    highlighted BOOLEAN DEFAULT false,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Team members are viewable by everyone"
ON public.team_members FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can insert team members"
ON public.team_members FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update team members"
ON public.team_members FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete team members"
ON public.team_members FOR DELETE
TO authenticated
USING (true);

CREATE TRIGGER update_team_members_updated_at
BEFORE UPDATE ON public.team_members
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Current committee (photos are served from /public/team)
INSERT INTO public.team_members (role, name, email, image_url, highlighted, sort_order) VALUES
    ('Project Manager', 'Robin Akela', 'projektledare@dageni.se', '/team/Project_manager.jpg', true, 1),
    ('Deputy Project Manager', 'Edwin Taeby', 'vice@dageni.se', '/team/Deputy_project_manager.jpg', true, 2),
    ('Head of Banquet', 'Per Ihse', 'bankett@dageni.se', '/team/Head_of_banquet.jpg', false, 3),
    ('Head of Business Relations', 'Filip Pring & Nasib Abbassoy', 'naringsliv@dageni.se', '/team/Head_of_buisness_relations.jpg', false, 4),
    ('Head of Marketing', 'Siri Kämpe', 'marknadsforing@dageni.se', '/team/Head_of_marketing.jpg', false, 5),
    ('Head of Communication and HR', 'Steve Henin', 'hr@iare.nu', '/team/Head_of_communication_and_HR.jpg', false, 6),
    ('Head of Events', 'Vilhelm Janson & Alice Wänblad', 'event@dageni.se', '/team/Head_of_events.jpg', false, 7),
    ('Head of Logistics', 'Elsa Berg & David Carlsson', 'logistik@dageni.se', '/team/Head_of_logistics.jpg', false, 8),
    ('Head of Lounge', 'Linnea Neiderud', 'lounge@dageni.se', '/team/Head_of_Lounge.jpg', false, 9),
    ('Head of Branding', 'Eddie Xia', 'branding@dageni.se', '/team/Head_of_branding.jpg', false, 10);

-- Storage bucket for uploaded site images, team photos and PDFs
INSERT INTO storage.buckets (id, name, public)
VALUES ('site-assets', 'site-assets', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public Access for site assets"
ON storage.objects FOR SELECT
USING (bucket_id = 'site-assets');

CREATE POLICY "Authenticated users can upload site assets"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'site-assets');

CREATE POLICY "Authenticated users can update site assets"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'site-assets');

CREATE POLICY "Authenticated users can delete site assets"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'site-assets');

-- Points oversized uploads (8 MB team PNGs etc.) at compressed copies in /public.
-- Run once in the Supabase SQL Editor AFTER this commit is deployed, otherwise the images 404.

UPDATE public.team_members SET image_url = '/team/rebecca-gessler.webp' WHERE id = 'de0c9f13-4c78-40e1-9260-3aebb111d99d';
UPDATE public.team_members SET image_url = '/team/miranda-chen.webp' WHERE id = '9c39d006-17b3-44b2-94be-bb1a76667733';
UPDATE public.team_members SET image_url = '/team/oskar-maunsbach-wingren-leo-robert.webp' WHERE id = 'e3ac381b-f9d3-4177-a013-720dd267ad3d';
UPDATE public.team_members SET image_url = '/team/astrid-bergvall-feirie-yi.webp' WHERE id = '7c996458-0a51-40cc-89c4-5971d5d6b32b';
UPDATE public.team_members SET image_url = '/team/lovisa-samell.webp' WHERE id = '86939c75-a8f0-467d-8638-710d5885851a';
UPDATE public.team_members SET image_url = '/team/janina-molin.webp' WHERE id = '572bdc3e-c756-45f7-9f23-d29bcc6bc5a2';
UPDATE public.team_members SET image_url = '/team/felix-engstrand.webp' WHERE id = '64416660-8ff2-431d-8cc6-5bf4f5a2de57';
UPDATE public.team_members SET image_url = '/team/edvin-zebuhr.webp' WHERE id = 'adeed066-638d-4caa-8db7-23c009651615';
UPDATE public.team_members SET image_url = '/team/wilhelmina-nilsson-erik-lundquist.webp' WHERE id = 'a260948b-1be5-477e-a0b0-a3c4206c6464';
UPDATE public.team_members SET image_url = '/team/nikolaj-jakshj.webp' WHERE id = '806f1d13-df31-4e16-99bd-ff4ab781f922';
UPDATE public.team_members SET image_url = '/team/ida-bergman.webp' WHERE id = 'f2dbb571-00e9-4fef-a17b-c6eca2d21706';
UPDATE public.site_content SET value = '/content/about.webp' WHERE key = 'img_card_about';
UPDATE public.site_content SET value = '/content/about.webp' WHERE key = 'img_about_hero';
UPDATE public.companies SET logo_url = '/logos/hyd-drinks.webp' WHERE id = '47ae5759-cee6-4b9a-89bf-d5022423af28';
UPDATE public.companies SET logo_url = '/logos/coca-cola.webp' WHERE id = '15a526ba-8f39-4654-80a4-4728977a26f8';
UPDATE public.companies SET logo_url = '/logos/implement.webp' WHERE id = '536388d7-5a20-4758-889f-eb4e0a023a10';
UPDATE public.companies SET logo_url = '/logos/ericsson.webp' WHERE id = '52a9c9aa-0397-4acd-b745-3c9267c2a7aa';
UPDATE public.companies SET logo_url = '/logos/navigio-our-main-partner.webp' WHERE id = '733bb45c-c0f9-4a7e-b7cc-0290cf5b2f5c';
UPDATE public.companies SET logo_url = '/logos/alvarez-marsal.webp' WHERE id = '9c55062b-994d-4a3c-8e26-03216fa96f48';

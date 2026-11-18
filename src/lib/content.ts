import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import homeHeroImg from '@/assets/dagenipic1_optimized.jpg';
import companiesImg from '@/assets/dagenipic2_optimized.jpg';
import exhibitorsImg from '@/assets/dagenipic3_optimized.jpg';
import logoImg from '@/assets/dageni_profile_pic.jpg';
import aboutUsImg from '@/assets/cover_all.jpg';

export type ContentGroup = 'settings' | 'texts' | 'images';
export type FieldType = 'text' | 'textarea' | 'lines' | 'url' | 'email' | 'datetime' | 'boolean' | 'image' | 'file';

export type ContentField = {
  key: string;
  label: string;
  group: ContentGroup;
  type: FieldType;
  default: string;
  section: string;
  help?: string;
};

// Every editable value on the site. Texts may use {date} and {year}, which are
// filled in from the event start setting.
export const CONTENT_FIELDS = [
  // Settings: event
  { key: 'event_start', label: 'Event start (date and time)', group: 'settings', section: 'Event', type: 'datetime', default: '2027-02-12T10:00', help: 'Drives the countdown and every {date}/{year} on the site.' },
  { key: 'event_end_time', label: 'Event end time', group: 'settings', section: 'Event', type: 'text', default: '15:00' },
  { key: 'committee_year', label: 'Committee year (About Us)', group: 'settings', section: 'Event', type: 'text', default: '2026/2027' },
  { key: 'location_name', label: 'Venue', group: 'settings', section: 'Location', type: 'text', default: 'Nymble' },
  { key: 'location_address', label: 'Address', group: 'settings', section: 'Location', type: 'text', default: 'Drottning Kristinas väg 15-19' },
  { key: 'location_city', label: 'City', group: 'settings', section: 'Location', type: 'text', default: 'Stockholm' },
  { key: 'maps_url', label: 'Google Maps link', group: 'settings', section: 'Location', type: 'url', default: 'https://www.google.com/maps/place/Nymble+-+Tekniska+H%C3%B6gskolans+K%C3%A5rhus/@59.3472957,18.0681431,17z/data=!3m2!4b1!5s0x465f9d6a8600d17b:0x3fc61d17004266c0!4m6!3m5!1s0x465f9d6a8e520c07:0x57fd5073e2923781!8m2!3d59.347293!4d18.070718!16s%2Fg%2F11dyjk6_q?entry=ttu' },
  // Settings: links
  { key: 'facebook_url', label: 'Facebook', group: 'settings', section: 'Social media', type: 'url', default: 'https://www.facebook.com/events/581999524562667/' },
  { key: 'instagram_url', label: 'Instagram', group: 'settings', section: 'Social media', type: 'url', default: 'https://www.instagram.com/dagenikth/' },
  { key: 'linkedin_url', label: 'LinkedIn', group: 'settings', section: 'Social media', type: 'url', default: 'https://www.linkedin.com/company/dagen-i/?originalSubdomain=se' },
  { key: 'email_business', label: 'Business inquiries email', group: 'settings', section: 'Contact', type: 'email', default: 'naringsliv@dageni.se' },
  { key: 'email_project', label: 'Project management email', group: 'settings', section: 'Contact', type: 'email', default: 'projektledare@dageni.se' },
  { key: 'partnership_form_url', label: 'Partnership application form', group: 'settings', section: 'Forms', type: 'url', default: 'https://docs.google.com/forms/d/e/1FAIpQLSe9GKiRO2ZDBZz6A4gzzDZj8t6NppxQ4qAtMwMaTyBoFzo-Sg/viewform' },
  { key: 'contact_meetings_open', label: 'Contact meetings application open', group: 'settings', section: 'Forms', type: 'boolean', default: 'true' },
  { key: 'contact_meetings_url', label: 'Contact meetings form', group: 'settings', section: 'Forms', type: 'url', default: 'https://docs.google.com/forms/d/19LlssiCEgW7kSGM-QpvHpOIIImEPBhamU0wICQ_tJb8/viewform' },
  { key: 'host_application_open', label: 'Host application open', group: 'settings', section: 'Forms', type: 'boolean', default: 'false' },
  { key: 'host_application_url', label: 'Host application form', group: 'settings', section: 'Forms', type: 'url', default: '' },

  // Texts: home
  { key: 'home_about_what', label: 'About Dagen I – What', group: 'texts', section: 'Home', type: 'textarea', default: "Dagen I is the annual career fair for Industrial Engineering and Management students, taking place on {date}. Since 2011, it has been a key event where students from the Master of Science in Engineering and Master's programs connect with potential employers. Dagen I provides opportunities to engage with industry and form relationships that can lead to future career prospects. It's a chance to gain exclusive insights into companies and prepare for life after graduation." },
  { key: 'home_about_why', label: 'About Dagen I – Why', group: 'texts', section: 'Home', type: 'lines', help: 'One point per line. Text before the first ":" is shown in bold.', default: 'Lunch Lectures: Hear from top companies and gain insights into their work and industry trends.\nBanquet: Network in a formal yet relaxed setting with company representatives and fellow students.\nConnect with Employers: Explore career paths and meet your future employers.\nRelationship Building: Get to know professionals and better understand job market dynamics.\nContact Meetings: During the fair, join conversations with company representatives. Discuss future jobs or ask about working life.' },
  { key: 'home_card_students', label: 'Card – For Students', group: 'texts', section: 'Home', type: 'textarea', default: 'Are you an I-student and want to know more about the fair or how you can contribute to Dagen I? Discover exciting career opportunities, network with industry professionals, and take the first step towards your dream career.' },
  { key: 'home_card_companies', label: 'Card – For Companies', group: 'texts', section: 'Home', type: 'textarea', default: "Is your company interested in exhibiting or sponsoring Dagen I? Discover the benefits of connecting with talented students, showcasing your company culture, and finding your next great hire at Sweden's premier student career fair." },
  { key: 'home_card_exhibitors', label: 'Card – Our Exhibitors', group: 'texts', section: 'Home', type: 'textarea', default: 'Read more about the exhibitors of Dagen I {year}. Meet leading companies from various industries, learn about their missions, and explore potential career paths with organizations that are shaping the future.' },
  { key: 'home_card_about', label: 'Card – About Us', group: 'texts', section: 'Home', type: 'textarea', default: 'Meet the passionate team behind Dagen I and learn about our mission to connect talented engineering students with innovative companies across Sweden.' },
  // Texts: for students
  { key: 'students_hero_subtitle', label: 'Hero subtitle', group: 'texts', section: 'For Students', type: 'text', default: 'Your gateway to exciting career opportunities' },
  { key: 'students_events_empty', label: 'Events – shown when there are none', group: 'texts', section: 'For Students', type: 'textarea', default: 'Events leading up to Dagen I {year} will be announced soon. Stay tuned for exciting networking opportunities, information sessions, and preparation meetings.' },
  { key: 'students_sponsors_empty', label: 'Sponsors – shown when there are none', group: 'texts', section: 'For Students', type: 'textarea', default: 'Our sponsors for Dagen I {year} will be announced soon. Stay tuned to see the amazing companies supporting our event and the next generation of engineers.' },
  { key: 'students_sustainability_empty', label: 'Sustainability partners – shown when there are none', group: 'texts', section: 'For Students', type: 'textarea', default: 'Our sustainability partners for Dagen I {year} will be announced soon. Stay tuned to see the amazing organizations supporting our commitment to sustainability.' },
  { key: 'students_contact_meetings', label: 'Contact meetings', group: 'texts', section: 'For Students', type: 'textarea', default: 'During the fair day you will be offered contact meetings. These are simply conversations for about 20 minutes where you have the opportunity to talk to company representatives in calm. They can either be more focused on future jobs or more of a chance to ask someone in working life what to think about during their studies, what a normal working day looks like, what it thinks is important when looking for a job and more. You decide for yourself, but they are in any case eager to meet, regardless of grade!' },
  { key: 'students_host_what', label: 'Become a host – What is a company host?', group: 'texts', section: 'For Students', type: 'textarea', default: "As a host you will be responsible for the communication with a company before and during the fair. You will represent the chapter as the main contact person from our side and act as the company's helping hand when needed. The purpose is to make the communication and process smoother, for both parts." },
  { key: 'students_host_why', label: "Become a host – What's in it for you?", group: 'texts', section: 'For Students', type: 'textarea', default: 'This is your chance to network and gain valuable contact, and more importantly, guarantee a spot at the closing banquet. There will also be a kickoff for all company hosts.' },
  // Texts: for companies
  { key: 'companies_hero_subtitle', label: 'Hero subtitle', group: 'texts', section: 'For Companies', type: 'text', default: "Connect with Sweden's brightest engineering talent" },
  { key: 'companies_standard_intro', label: 'Standard package – intro', group: 'texts', section: 'For Companies', type: 'textarea', default: 'Meet Industrial engineering & management students across all years and showcase what makes your company stand out.' },
  { key: 'companies_standard_items', label: 'Standard package – included', group: 'texts', section: 'For Companies', type: 'lines', help: 'One item per line.', default: 'A 2x2m Booth\nOne on-site business host\nOpportunity to book one-to-one student meetings\nTwo Banquet tickets\nAccess to the business lounge\nFour breakfast/lunch vouchers\nPlacement on the photo wall\nMarketing on the Dagen I website and inside the company catalogue\nElectricity and Wi-Fi during the fair' },
  { key: 'companies_premium_intro', label: 'Premium package – intro', group: 'texts', section: 'For Companies', type: 'textarea', default: "With the Premium package, your company will get the chance to gain extra exposure and to increase students' awareness of what your company does and offers." },
  { key: 'companies_premium_items', label: 'Premium package – extras', group: 'texts', section: 'For Companies', type: 'lines', help: 'One item per line.', default: 'Event of your choice*\nA 2x3m Booth\nTwo business hosts\n125% enhanced logo size on the photo wall\nPremium-spot, by preference or priority allocation' },
  { key: 'companies_premium_footnote', label: 'Premium package – footnote', group: 'texts', section: 'For Companies', type: 'text', default: '* Location of your choice, subject to availability and approval' },
  { key: 'companies_partner_intro', label: 'Become a Partner – intro', group: 'texts', section: 'For Companies', type: 'textarea', default: "Partner with Dagen I as either an exhibitor or sponsor to connect with Sweden's brightest engineering talent. Whether you want to showcase your company at our exhibition booths or support our mission through sponsorship, we offer flexible partnership packages tailored to your organization's goals and budget." },
  { key: 'companies_stat_students', label: 'Stat – Students Reached', group: 'texts', section: 'For Companies', type: 'text', default: '1000+' },
  { key: 'companies_stat_partners', label: 'Stat – Company Partners', group: 'texts', section: 'For Companies', type: 'text', default: '50+' },
  { key: 'companies_stat_years', label: 'Stat – Years of Impact', group: 'texts', section: 'For Companies', type: 'text', default: '15+' },
  { key: 'companies_get_in_touch', label: 'Get In Touch', group: 'texts', section: 'For Companies', type: 'textarea', default: "Interested in participating in Dagen I {year}? We'd love to hear from you!" },
  // Texts: other pages
  { key: 'exhibitors_hero_subtitle', label: 'Our Exhibitors – hero subtitle', group: 'texts', section: 'Other pages', type: 'text', default: 'Meet the companies joining Dagen I {year}' },
  { key: 'exhibitors_empty', label: 'Our Exhibitors – shown when there are none', group: 'texts', section: 'Other pages', type: 'textarea', default: 'Our exhibitors for Dagen I {year} will be announced soon. Stay tuned to see the amazing companies that will be showcasing their opportunities and connecting with talented students.' },
  { key: 'about_hero_subtitle', label: 'About Us – hero subtitle', group: 'texts', section: 'Other pages', type: 'text', default: 'Meet the passionate team behind Dagen I' },
  { key: 'about_mission', label: 'About Us – Our Mission', group: 'texts', section: 'Other pages', type: 'textarea', default: 'Dagen I is dedicated to bridging the gap between talented engineering students and innovative companies. Our mission is to create meaningful connections that shape the future of technology and engineering in Sweden.' },
  { key: 'footer_description', label: 'Footer description', group: 'texts', section: 'Other pages', type: 'textarea', default: "Dagen I is where students meet their dream employers. Dagen I is also the place where your company has the opportunity to reach out and personally meet top students from Sweden's most popular Master of Science in Engineering program." },

  // Images and files
  { key: 'img_logo', label: 'Dagen I logo (home page)', group: 'images', section: 'Home', type: 'image', default: logoImg },
  { key: 'img_home_hero', label: 'Home background', group: 'images', section: 'Home', type: 'image', default: homeHeroImg },
  { key: 'img_card_students', label: 'Card – For Students', group: 'images', section: 'Home', type: 'image', default: homeHeroImg },
  { key: 'img_card_companies', label: 'Card – For Companies', group: 'images', section: 'Home', type: 'image', default: companiesImg },
  { key: 'img_card_exhibitors', label: 'Card – Our Exhibitors', group: 'images', section: 'Home', type: 'image', default: exhibitorsImg },
  { key: 'img_card_about', label: 'Card – About Us', group: 'images', section: 'Home', type: 'image', default: aboutUsImg },
  { key: 'img_students_hero', label: 'For Students – hero', group: 'images', section: 'Page headers', type: 'image', default: homeHeroImg },
  { key: 'img_companies_hero', label: 'For Companies – hero', group: 'images', section: 'Page headers', type: 'image', default: companiesImg },
  { key: 'img_exhibitors_hero', label: 'Our Exhibitors – hero', group: 'images', section: 'Page headers', type: 'image', default: exhibitorsImg },
  { key: 'img_about_hero', label: 'About Us – hero', group: 'images', section: 'Page headers', type: 'image', default: aboutUsImg },
  { key: 'file_company_catalog', label: 'Company catalog (PDF)', group: 'images', section: 'Files', type: 'file', default: '/company_catalog.pdf' },
  { key: 'file_map', label: 'Dagen I map (PDF)', group: 'images', section: 'Files', type: 'file', default: '/dageni_map.pdf' },
] as const satisfies readonly ContentField[];

export type ContentKey = (typeof CONTENT_FIELDS)[number]['key'];

export type SiteContent = Record<ContentKey, string> & {
  eventDate: Date;
  dateLabel: string;
  year: string;
  timeLabel: string;
};

export type TeamMember = {
  id: string;
  role: string;
  name: string;
  email: string | null;
  image_url: string | null;
  highlighted: boolean;
  sort_order: number;
};

// Shown if the team_members table can't be read (e.g. before content.sql has been run)
export const DEFAULT_TEAM: TeamMember[] = [
  ['Project Manager', 'Robin Akela', 'projektledare@dageni.se', 'Project_manager', true],
  ['Deputy Project Manager', 'Edwin Taeby', 'vice@dageni.se', 'Deputy_project_manager', true],
  ['Head of Banquet', 'Per Ihse', 'bankett@dageni.se', 'Head_of_banquet', false],
  ['Head of Business Relations', 'Filip Pring & Nasib Abbassoy', 'naringsliv@dageni.se', 'Head_of_buisness_relations', false],
  ['Head of Marketing', 'Siri Kämpe', 'marknadsforing@dageni.se', 'Head_of_marketing', false],
  ['Head of Communication and HR', 'Steve Henin', 'hr@iare.nu', 'Head_of_communication_and_HR', false],
  ['Head of Events', 'Vilhelm Janson & Alice Wänblad', 'event@dageni.se', 'Head_of_events', false],
  ['Head of Logistics', 'Elsa Berg & David Carlsson', 'logistik@dageni.se', 'Head_of_logistics', false],
  ['Head of Lounge', 'Linnea Neiderud', 'lounge@dageni.se', 'Head_of_Lounge', false],
  ['Head of Branding', 'Eddie Xia', 'branding@dageni.se', 'Head_of_branding', false],
].map(([role, name, email, photo, highlighted], i) => ({
  id: `default-${i}`,
  role: role as string,
  name: name as string,
  email: email as string,
  image_url: `/team/${photo}.jpg`,
  highlighted: highlighted as boolean,
  sort_order: i + 1,
}));

export const SITE_CONTENT_QUERY_KEY = ['site_content'];
export const TEAM_QUERY_KEY = ['team_members'];

export const fetchSiteContentRows = async (): Promise<Record<string, string>> => {
  const { data, error } = await supabase.from('site_content').select('key, value');
  if (error) throw error;
  return Object.fromEntries((data || []).map((row) => [row.key, row.value]));
};

const fetchTeam = async (): Promise<TeamMember[]> => {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) throw error;
  return data || [];
};

export const buildSiteContent = (rows: Record<string, string> = {}): SiteContent => {
  const values = Object.fromEntries(
    CONTENT_FIELDS.map((f) => [f.key, rows[f.key]?.trim() ? rows[f.key] : f.default])
  ) as Record<ContentKey, string>;

  let eventDate = new Date(values.event_start);
  if (isNaN(eventDate.getTime())) eventDate = new Date(CONTENT_FIELDS[0].default);

  const dateLabel = eventDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const year = String(eventDate.getFullYear());
  const startTime = eventDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  for (const key of Object.keys(values) as ContentKey[]) {
    values[key] = values[key].split('{date}').join(dateLabel).split('{year}').join(year);
  }

  return {
    ...values,
    eventDate,
    dateLabel,
    year,
    timeLabel: values.event_end_time ? `${startTime} - ${values.event_end_time}` : startTime,
  };
};

// Falls back to the defaults above while loading or if Supabase can't be reached
export const useSiteContent = (): SiteContent => {
  const { data } = useQuery({
    queryKey: SITE_CONTENT_QUERY_KEY,
    queryFn: fetchSiteContentRows,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
  return useMemo(() => buildSiteContent(data), [data]);
};

export const useTeamMembers = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: TEAM_QUERY_KEY,
    queryFn: fetchTeam,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
  return { team: isError ? DEFAULT_TEAM : data ?? [], loading: isLoading };
};

export const lines = (text: string) => text.split('\n').map((l) => l.trim()).filter(Boolean);

export const isOn = (value: string) => value.trim().toLowerCase() === 'true';

export const uploadSiteAsset = async (file: File, folder: string): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const filePath = `${folder}/${Math.random().toString(36).substring(2)}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from('site-assets')
    .upload(filePath, file, { upsert: true });

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from('site-assets')
    .getPublicUrl(filePath);

  return publicUrl;
};

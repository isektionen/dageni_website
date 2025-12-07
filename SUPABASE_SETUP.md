# Supabase Admin Setup Guide

This guide will help you set up Supabase for managing companies/sponsors through the admin interface.

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in:
   - **Project name**: `dageni-website` (or your choice)
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to Sweden (Europe West recommended)
   - **Pricing Plan**: Select **Free** tier
4. Click "Create new project" (takes ~2 minutes)

## Step 2: Get API Credentials

1. Once project is ready, go to **Settings** → **API**
2. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

## Step 3: Configure Environment Variables

### Local Development

1. Create a `.env` file in project root:
```bash
cp .env.example .env
```

2. Edit `.env` and paste your credentials:
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Vercel Deployment

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add both variables:
   - `VITE_SUPABASE_URL` = your project URL
   - `VITE_SUPABASE_ANON_KEY` = your anon key
3. Set for: **Production**, **Preview**, and **Development**
4. Click **Save**

## Step 4: Run Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New query**
3. Copy entire contents of `supabase/schema.sql`
4. Paste into SQL Editor
5. Click **Run** (bottom right)
6. Verify success: Go to **Table Editor** → should see `companies` table

## Step 5: Create Admin User

1. In Supabase dashboard, go to **Authentication** → **Users**
2. Click **Add user** → **Create new user**
3. Fill in:
   - **Email**: `admin@dageni.se` (or your admin email)
   - **Password**: Create a strong password
   - **Auto Confirm User**: ✅ Enable this
4. Click **Create user**

## Step 6: Test Admin Access

1. Start dev server: `npm run dev`
2. Go to `http://localhost:8080/admin/login`
3. Login with your admin email/password
4. You should see the admin dashboard
5. Try adding a test company with a logo

## Step 7: Verify Storage Bucket

1. Go to **Storage** in Supabase dashboard
2. You should see `company-logos` bucket (created by schema)
3. Click it → you should see any uploaded logos
4. Test: Click a logo → Copy URL → paste in browser (should load publicly)

## Common Issues

### "Missing Supabase environment variables"
- Make sure `.env` file exists in project root
- Restart dev server after creating `.env`
- Check variable names match exactly: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

### Login fails / "Invalid credentials"
- Verify user was created in Authentication → Users
- Make sure "Auto Confirm User" was enabled
- Try resetting password in Supabase dashboard

### Logo upload fails
- Check Storage → Policies are enabled (should be created by schema)
- Verify you're logged in as admin
- Check browser console for specific error

### Images not loading on public pages
- Make sure `company-logos` bucket is public (check Storage settings)
- Verify RLS policies exist on `storage.objects` table
- Check logo URLs are complete (should start with https://)

## Production Checklist

Before deploying to production:

- [ ] Environment variables added to Vercel
- [ ] Admin user created in Supabase
- [ ] Schema.sql executed successfully
- [ ] Test login at `/admin/login` on preview deployment
- [ ] Add at least one company to test fetching
- [ ] Verify images load on Our Exhibitors page
- [ ] (Optional) Enable email confirmations in Auth settings
- [ ] (Optional) Add custom domain to Supabase project

## Security Notes

- **Never commit `.env` file** (already in `.gitignore`)
- The anon key is safe to expose publicly (RLS protects data)
- Only authenticated users can add/edit companies
- Anyone can view companies (public read access)
- Store sensitive keys in Vercel environment variables

## Need Help?

- Supabase Docs: https://supabase.com/docs
- Supabase Discord: https://discord.supabase.com
- Check browser console for errors
- Check Supabase logs in dashboard

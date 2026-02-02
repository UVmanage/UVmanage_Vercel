# Security Setup Guide

## IMPORTANT: Required Setup Steps

Your form is now using a secure server-side API. Follow these steps to complete the security implementation:

---

## Step 1: Update `.env.local` with Service Role Key

Add your **Supabase Service Role Key** to `.env.local`:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://gybjptwxhlhcejaanhzv.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_mIfLJu5UsFlmGdHkr6Xwrg_29zPhD5K
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**How to get the Service Role Key:**
1. Go to [Supabase Dashboard](https://supabase.com)
2. Select your project
3. Settings → API → Copy the "Service Role Key" (marked as secret)
4. Paste it in `.env.local` as `SUPABASE_SERVICE_ROLE_KEY`

**⚠️ IMPORTANT:**
- Never commit `.env.local` to Git (already in `.gitignore`)
- The Service Role Key is ONLY used server-side and never exposed to users
- Never use `NEXT_PUBLIC_` prefix for the service key

---

## Step 2: Enable Row-Level Security (RLS) in Supabase

Go to your Supabase Dashboard and run this SQL on the "Form Input" table:

### Enable RLS on the table:
```sql
ALTER TABLE "Form Input" ENABLE ROW LEVEL SECURITY;
```

### Create a policy that ONLY allows the service role to insert:
```sql
CREATE POLICY "Allow service role to insert"
ON "Form Input"
FOR INSERT
TO service_role
WITH CHECK (true);
```

### Block anonymous public access (optional but recommended):
```sql
CREATE POLICY "Block public read"
ON "Form Input"
FOR SELECT
TO anon
USING (false);
```

---

## Step 3: Verify Setup

After updating `.env.local` and enabling RLS:

1. Run the dev server:
```bash
pnpm dev
```

2. Test the form:
   - Fill out the form and submit
   - Check your Supabase dashboard → "Form Input" table
   - New entries should appear

3. Verify security:
   - Open browser DevTools (F12)
   - Go to Network tab
   - Submit the form
   - The request should go to `/api/submit-form` (not Supabase directly)
   - The Supabase credentials should NOT be in the request

---

## What Changed (Security Improvements)

### ✅ Before (Vulnerable):
- Form data sent directly to Supabase from browser
- Anon key exposed in client-side code
- No input validation or rate limiting
- Users could query/modify all database records

### ✅ After (Secure):
- Form data sent to `/api/submit-form` endpoint
- Server validates all input
- Rate limiting: 5 requests per IP per minute
- Service role key used server-side (hidden from users)
- RLS policies prevent unauthorized database access
- Users can only insert, cannot read/modify other entries

---

## Additional Security Features

The API endpoint includes:

1. **Input Validation**: 
   - Email format checking
   - Length limits on all fields
   - Array size limits

2. **Rate Limiting**: 
   - 5 requests per minute per IP
   - Prevents spam and abuse

3. **Error Handling**: 
   - Generic error messages (don't leak database info)
   - Proper HTTP status codes

4. **Data Sanitization**: 
   - Trims whitespace
   - Lowercases emails for consistency

---

## Notes

- The `lib/supabaseClient.ts` is now only used for non-sensitive client operations (if any)
- Consider removing it later if not needed elsewhere
- For production, implement Redis-based rate limiting instead of in-memory
- Monitor Supabase logs for unusual activity

---

## Support

If the form fails to submit after setup, check:
1. `.env.local` has `SUPABASE_SERVICE_ROLE_KEY` set
2. RLS is enabled on the "Form Input" table
3. Service role policy is created
4. Server is restarted (NextJS picks up env changes on restart)

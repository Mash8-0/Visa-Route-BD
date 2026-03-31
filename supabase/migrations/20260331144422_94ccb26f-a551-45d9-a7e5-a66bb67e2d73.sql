
-- 1. Fix contact_submissions: replace overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Validated contact form submissions only"
ON public.contact_submissions
FOR INSERT
TO public
WITH CHECK (
  length(name) > 0 AND length(name) <= 200
  AND length(email) > 0 AND length(email) <= 255
  AND (message IS NULL OR length(message) <= 5000)
  AND (phone IS NULL OR length(phone) <= 30)
);

-- 2. Allow admins to read contact submissions
DROP POLICY IF EXISTS "No public read access to contact submissions" ON public.contact_submissions;
CREATE POLICY "Admins can read contact submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (public.is_admin());

-- 3. Fix user_roles: allow users to read their own role
CREATE POLICY "Users can view own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

ALTER TABLE public.programs ADD COLUMN coming_soon boolean NOT NULL DEFAULT false;

UPDATE public.programs 
SET name = 'Diploma in Criminal and Policy Investigation'
WHERE university_id = 'icms' AND name = 'Diploma in Criminal Investigation';

DELETE FROM public.programs 
WHERE university_id = 'icms' AND name = 'Diploma in Enforcement Management';

UPDATE public.programs 
SET coming_soon = true 
WHERE university_id = 'icms' AND name = 'Diploma in Occupational Safety & Health';

INSERT INTO public.programs (university_id, name, duration, level, faculty, study_mode, intakes, coming_soon) VALUES
('icms', 'Diploma in Fashion Design', '2 Years 6 Months', 'Diploma', 'School of Creative Arts', 'Full Time', ARRAY['January', 'May', 'September'], false),
('icms', 'Diploma in Management', '2 Years 6 Months', 'Diploma', 'School of Business', 'Full Time', ARRAY['January', 'May', 'September'], false),
('icms', 'Diploma in Hotel Management (WBL)', '2 Years 6 Months', 'Diploma', 'School of Hospitality', 'Full Time', ARRAY['January', 'May', 'September'], true),
('icms', 'Bachelor of Business Management', '3 Years', 'Bachelor', 'School of Business', 'Full Time', ARRAY['January', 'March', 'August'], false),
('icms', 'Bachelor of Computer Science', '3 Years', 'Bachelor', 'School of Computing & IT', 'Full Time', ARRAY['January', 'May', 'September'], true),
('icms', 'Bachelor of Business Administration', '3 Years', 'Bachelor', 'School of Business', 'Full Time', ARRAY['January', 'May', 'September'], true),
('icms', 'MBA', '1.5 Years', 'Master', 'School of Postgraduate Studies', 'Full-time / Part-time', ARRAY['January', 'April', 'July', 'September', 'November'], true),
('icms', 'IEP (English Course)', '6 Months', 'Certificate', 'Language Centre', 'Full Time', ARRAY['January', 'March', 'May', 'July', 'September', 'November'], false);
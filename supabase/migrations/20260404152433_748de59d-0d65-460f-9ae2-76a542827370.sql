
-- Update total_fees for existing APU on-campus Master programs
UPDATE public.programs SET total_fees = 50150 WHERE university_id = 'apu' AND level = 'Master' AND name IN (
  'Master of Technology Management',
  'MSc in Information Technology Management',
  'Master of Science in Digital Transformation',
  'MSc in Software Engineering',
  'Master of Project Management',
  'Master of Business Administration',
  'Master of Business Administration - Digital Leadership',
  'Master of Business Administration - Business Analytics',
  'Master of Business Administration - Artificial Intelligence (MBAi)',
  'Master of Business Administration - Oil and Gas Management',
  'Master of Business Administration - Supply Chain Management',
  'Master of Business Administration - Hospitality and Tourism',
  'Master of Science in International Business Communications',
  'Master of Science in Digital Marketing',
  'Master of Finance',
  'Master of Finance with a specialism in FinTech',
  'Master of Accounting',
  'Master of Accounting in Forensic Analysis',
  'Master of Arts in Design Innovation Management',
  'Master of Science in Actuarial Science'
);

UPDATE public.programs SET total_fees = 52150 WHERE university_id = 'apu' AND level = 'Master' AND name IN (
  'Master of Science in Artificial Intelligence',
  'Master of Science in Cyber Security'
);

UPDATE public.programs SET total_fees = 56150 WHERE university_id = 'apu' AND level = 'Master' AND name = 'MSc in Data Science and Business Analytics';

UPDATE public.programs SET total_fees = 45350 WHERE university_id = 'apu' AND level = 'Master' AND name = 'Master of Education in Learning Design and Technology';

-- Insert APU ODL Master programmes
INSERT INTO public.programs (university_id, name, level, faculty, duration, study_mode, intakes, total_fees, emgs_fee, registration_fee) VALUES
  ('apu', 'Master of Business Administration (ODL)', 'Master', 'School of Business', '2 years 6 months', 'Open & Distance Learning (ODL)', ARRAY['03 April 2026','12 June 2026','21 August 2026'], 33580, NULL, NULL),
  ('apu', 'Master of Business Administration - Digital Leadership (ODL)', 'Master', 'School of Business', '2 years 6 months', 'Open & Distance Learning (ODL)', ARRAY['03 April 2026','12 June 2026','21 August 2026'], 33580, NULL, NULL),
  ('apu', 'Master of Business Administration - Business Analytics (ODL)', 'Master', 'School of Business', '2 years 6 months', 'Open & Distance Learning (ODL)', ARRAY['03 April 2026','12 June 2026','21 August 2026'], 33580, NULL, NULL),
  ('apu', 'Master of Business Administration - Artificial Intelligence (MBAi) (ODL)', 'Master', 'School of Business', '2 years 6 months', 'Open & Distance Learning (ODL)', ARRAY['03 April 2026','12 June 2026','21 August 2026'], 33580, NULL, NULL),
  ('apu', 'Master of Business Administration - Oil and Gas Management (ODL)', 'Master', 'School of Business', '2 years 6 months', 'Open & Distance Learning (ODL)', ARRAY['03 April 2026','12 June 2026','21 August 2026'], 33580, NULL, NULL),
  ('apu', 'Master of Business Administration - Supply Chain Management (ODL)', 'Master', 'School of Business', '2 years 6 months', 'Open & Distance Learning (ODL)', ARRAY['03 April 2026','12 June 2026','21 August 2026'], 33580, NULL, NULL),
  ('apu', 'Master of Business Administration - Hospitality and Tourism (ODL)', 'Master', 'School of Business', '2 years 6 months', 'Open & Distance Learning (ODL)', ARRAY['03 April 2026','12 June 2026','21 August 2026'], 33580, NULL, NULL),
  ('apu', 'Master of Science in Artificial Intelligence (ODL)', 'Master', 'School of Computing', '2 years 6 months', 'Open & Distance Learning (ODL)', ARRAY['03 April 2026','12 June 2026','21 August 2026'], 37080, NULL, NULL),
  ('apu', 'Master of Science in Cyber Security (ODL)', 'Master', 'School of Computing', '2 years 6 months', 'Open & Distance Learning (ODL)', ARRAY['03 April 2026','12 June 2026','21 August 2026'], 37080, NULL, NULL),
  ('apu', 'MSc in Data Science and Business Analytics (ODL)', 'Master', 'School of Computing', '2 years 6 months', 'Open & Distance Learning (ODL)', ARRAY['03 April 2026','12 June 2026','21 August 2026'], 39380, NULL, NULL),
  ('apu', 'Master of Education in Learning Design and Technology (ODL)', 'Master', 'School of Education', '2 years 6 months', 'Open & Distance Learning (ODL)', ARRAY['03 April 2026','12 June 2026','21 August 2026'], 30380, NULL, NULL);

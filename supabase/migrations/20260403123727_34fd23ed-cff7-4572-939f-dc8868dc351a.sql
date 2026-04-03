
-- Standard 3-year Bachelor programs (total: RM 120,400)
UPDATE public.programs SET 
  study_mode = 'Full Time',
  intakes = ARRAY['09 July 2026', '28 September 2026', '24 November 2026'],
  emgs_fee = 3400,
  registration_fee = 5000,
  total_fees = 120400
WHERE university_id = 'apu' AND level = 'Bachelor' AND id IN (
  'ca65fd09-586d-4e0d-ac83-dd7e3013035d', -- Information Technology
  '07008dfe-ecc0-4166-8703-38d0d1069a79', -- Computer Science
  '12769d81-2c25-43ce-9666-cf1024abb4db', -- Software Engineering
  '8e750f5b-0cf8-4d00-9e4a-e06b4792e4ef', -- Data Science
  '72bb20da-4b3d-468d-a05d-de57ca837a9b', -- Artificial Intelligence
  '9ab2abef-a7a9-4b7f-97e2-b8fd3f073861', -- Cyber Security
  '13b4c2d9-6edd-44a3-a943-5e1b16ee52b8', -- Digital Forensics
  '6b7c5fb5-5138-4510-ac1e-44fa23bf9b38', -- Business Management
  'd94cf1ec-61a8-44bf-8c7f-3c8f72893034', -- Digital Marketing
  '5c6c295f-33ea-447d-a9bb-3a45ae284261', -- Human Resource Management
  '57144a6c-71ad-41ae-901b-1f12530be834', -- Accounting & Finance
  '05487224-cb91-4675-9bbe-cd8d3cf5c1ae', -- ACCTECH
  '440e5096-6e48-4cdc-a41b-5713e34df31f', -- Forensic Accounting
  'a8668bb4-7897-48bf-8554-526fe19b2ff3', -- Actuarial Studies
  '36aee9e9-922f-4434-a77e-3f97ce4dff54', -- Banking & Finance
  '2a7be107-4cbf-48e8-afe5-c12bfd37198e', -- FinTech
  '5310b260-f802-4d19-aab7-77229fc3b394', -- Investment Analytics
  'ad282399-aa3c-4ed9-bb35-f08c2b8c8248', -- International Relations
  '00ef9bf5-d042-4e48-93ce-f4b03947adab', -- Psychology
  '2e220c56-409c-4441-b7d9-d2f3464a2b19', -- Industrial Design
  'a3b09035-8bcf-496f-83ff-343879fd4790', -- Visual Effects
  '70d3a169-060e-44f8-82af-b0f06500b1d8', -- Animation
  'afc5d8ef-e2a5-479c-80ca-b2276a7f65f5', -- Digital Advertising
  'cb5df58b-0008-40db-af89-3d44fc616d0c', -- Media & Communication
  '0fb93f66-01e3-41a4-b9aa-7e5656ec9b64', -- Interactive Media and Immersive Technology
  'f84f5ae8-85ac-461e-a794-dfda7ac16afa', -- VR/AR
  '55844c47-cf41-4c7f-9d0c-21ce18e36d03'  -- Computer Games Development
);

-- Architecture (total: RM 122,300)
UPDATE public.programs SET 
  study_mode = 'Full Time',
  intakes = ARRAY['09 July 2026', '28 September 2026', '24 November 2026'],
  emgs_fee = 3400,
  registration_fee = 5000,
  total_fees = 122300
WHERE university_id = 'apu' AND id = '0823e1e5-ca5e-4a77-9e93-84f76e6cc3dd';

-- Hospitality and Tourism (total: RM 124,600)
UPDATE public.programs SET 
  study_mode = 'Full Time',
  intakes = ARRAY['09 July 2026', '28 September 2026', '24 November 2026'],
  emgs_fee = 3400,
  registration_fee = 5000,
  total_fees = 124600
WHERE university_id = 'apu' AND id = '63d0a0ac-488c-46b5-826f-217b000a6bd4';

-- Engineering 4-year programs (total: RM 149,600)
UPDATE public.programs SET 
  study_mode = 'Full Time',
  duration = '4 years',
  intakes = ARRAY['09 July 2026', '28 September 2026', '24 November 2026'],
  emgs_fee = 3400,
  registration_fee = 5000,
  total_fees = 149600
WHERE university_id = 'apu' AND id IN (
  '65aa5828-fb40-4d32-8fbb-397fedda2e17', -- Mechatronic Engineering
  '16354bf0-6987-41b8-883c-07141aa28b07', -- Mechanical Engineering
  'ed2b5095-6a06-463e-9a26-6d0bd3dab8aa', -- Computer Engineering
  'c6429d97-e160-4125-9a15-3a8b56252a0f', -- Electrical & Electronic Engineering
  '475ee362-0588-4ca2-a3c5-b5a6be304427'  -- Petroleum Engineering
);

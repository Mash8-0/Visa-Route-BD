-- Add new columns to programs table for detailed information
ALTER TABLE public.programs
ADD COLUMN study_mode text,
ADD COLUMN intakes text[],
ADD COLUMN career_opportunities text[],
ADD COLUMN emgs_fee numeric,
ADD COLUMN registration_fee numeric,
ADD COLUMN tuition_fee numeric,
ADD COLUMN total_fees numeric;
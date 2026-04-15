INSERT INTO public.universities (id, name, short_name, location, color, type, description, established, ranking, website, highlights, facilities, logo_url)
VALUES (
  'utp',
  'Universiti Teknologi PETRONAS',
  'UTP',
  'Seri Iskandar, Perak',
  '#006633',
  'Private',
  'Universiti Teknologi PETRONAS (UTP) is a leading private university in Malaysia, established by PETRONAS, the national oil and gas company. Known for its strong engineering and technology programs, UTP consistently ranks among the top universities in Malaysia and Asia.',
  1997,
  'Top 200 in Asia (QS)',
  'https://www.utp.edu.my',
  ARRAY['PETRONAS-funded university', 'Strong engineering and technology focus', 'High employability rate', 'World-class research facilities', 'Industry-linked curriculum'],
  ARRAY['Research Labs', 'Engineering Workshops', 'Library', 'Sports Complex', 'Student Village', 'Innovation Centre'],
  '/universities/utp.png'
);
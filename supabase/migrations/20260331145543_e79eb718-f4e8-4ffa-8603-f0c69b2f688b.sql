
INSERT INTO public.universities (id, name, short_name, location, color, type, description, established, website, facilities, highlights)
VALUES
  ('icms', 'International University College of Management and Sports', 'ICMS', 'Kuala Lumpur, Malaysia', 'from-amber-500 to-yellow-600', 'Private',
   'ICMS (International University College of Management and Sports) is a private university college in Malaysia offering diploma and degree programmes in Sports, Business, IT, Law Enforcement, Education, and Allied Health Sciences. It is the only college in Southeast Asia to offer a signature Diploma in Football Studies developed in cooperation with the University of Bedfordshire, UK.',
   2013, 'https://icms.edu.my',
   ARRAY['Sports Facilities', 'IT Labs', 'Library', 'Student Lounge', 'Auditorium'],
   ARRAY['Only college in Southeast Asia offering Diploma in Football Studies', 'Collaboration with University of Bedfordshire UK', 'Partnership with Alibaba Cloud Academy', '6 faculties covering Sports, Business, IT, Law, Education & Health']),
  ('unikl', 'Universiti Kuala Lumpur', 'UniKL', 'Kuala Lumpur, Malaysia', 'from-blue-700 to-blue-900', 'Private',
   'Universiti Kuala Lumpur (UniKL) is a premier private technical university wholly owned by Majlis Amanah Rakyat (MARA). It offers a wide range of technical and professional programmes across multiple campuses in Malaysia, emphasizing industry-driven education with strong links to multinational companies.',
   2002, 'https://www.unikl.edu.my',
   ARRAY['Engineering Labs', 'IT Facilities', 'Library', 'Sports Complex', 'Student Accommodation'],
   ARRAY['Wholly owned by MARA', 'Multiple campuses across Malaysia', 'Strong industry linkages', 'Focus on technical and professional education'])
ON CONFLICT (id) DO NOTHING;

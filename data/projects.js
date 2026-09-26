const projects = [
  {
    id: 1,
    title: 'Aruba Villa',
    category: 'interior',
    description: 'Pekerjaan interior dan custom furniture untuk Aruba Villa, meliputi pembuatan kitchenset dan lemari.',
    location: 'Aruba Villa, Pakuwon City, Surabaya',
    year: '2026',
    images: [
      'uploads/projects_images/Aruba Villa/Kitchenset.jpeg',
      'uploads/projects_images/Aruba Villa/Lemari.jpeg',
    ],
  },
  {
    id: 2,
    title: 'Laoban',
    category: 'interior',
    description: 'Pekerjaan interior untuk area stan makanan Laoban.',
    location: 'Tunjungan Plaza 3, Surabaya',
    year: '2026',
    images: ['uploads/projects_images/Laoban/Stan_makanan.jpeg'],
  },
  {
    id: 3,
    title: 'Klinik Dokter Gigi drg. Andreas',
    category: 'interior',
    description: 'Pengerjaan interior ruang praktik Klinik Dokter Gigi drg. Andreas.',
    location: 'Ngagel Jaya, Surabaya',
    year: '2026',
    images: [
      'uploads/projects_images/Klinik Dokter Gigi drg. Andreas/1.jpeg',
      'uploads/projects_images/Klinik Dokter Gigi drg. Andreas/2.jpeg',
      'uploads/projects_images/Klinik Dokter Gigi drg. Andreas/3.jpeg',
      'uploads/projects_images/Klinik Dokter Gigi drg. Andreas/4.jpeg',
    ],
  },
  {
    id: 4,
    title: 'Puri - Meruya Barat',
    category: 'interior',
    description: 'Pengerjaan interior hunian di Puri, Meruya Barat.',
    location: 'Puri, Meruya Barat, Jakarta Barat',
    year: '2026',
    images: [
      'uploads/projects_images/Puri - Meruya Barat/1.jpeg',
      'uploads/projects_images/Puri - Meruya Barat/2.jpeg',
      'uploads/projects_images/Puri - Meruya Barat/3.jpeg',
      'uploads/projects_images/Puri - Meruya Barat/4.jpeg',
      'uploads/projects_images/Puri - Meruya Barat/5.jpeg',
      'uploads/projects_images/Puri - Meruya Barat/6.jpeg',
      'uploads/projects_images/Puri - Meruya Barat/7.jpeg',
    ],
  },
  {
    id: 5,
    title: 'Booth Maspion',
    category: 'interior',
    description: 'Pengerjaan interior Booth Maspion.',
    location: '',
    year: '2026',
    images: [
      'uploads/projects_images/Booth Maspion/1.jpeg',
      'uploads/projects_images/Booth Maspion/2.jpeg',
      'uploads/projects_images/Booth Maspion/3.jpeg',
    ],
  },
];

export function getProjects() {
  return projects.map((project) => ({
    ...project,
    cover_image: project.images[0] || null,
  }));
}

export function getProjectById(id) {
  const project = projects.find((item) => item.id === Number(id));
  return project ? { ...project } : null;
}

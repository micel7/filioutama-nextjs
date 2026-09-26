import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { Footer } from '../../page';
import { getProjectById } from '../../../lib/db';

export const dynamic = 'force-dynamic';

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <Link className="back-button" href="/#portofolio" aria-label="Kembali ke portofolio" title="Kembali ke portofolio">
        <span aria-hidden="true">‹</span>
      </Link>
      <main>
        <section className="detail-hero">
          <div className="detail-wrap">
            <span className={`category-badge ${project.category}`}>{project.category === 'sipil' ? 'Pekerjaan Sipil' : 'Pekerjaan Interior'}</span>
            <h1>{project.title}</h1>
            <p>{project.location && `⌖ ${project.location}`} {project.year && `  ·  ◷ ${project.year}`}</p>
          </div>
        </section>
        <section className="gallery-wrap">
          {project.description && <p className="detail-description">{project.description}</p>}
          <div className="gallery-grid">
            {project.images.map((image) => <img key={image.image} src={`/${image.image}`} alt={`${project.title} - dokumentasi proyek`} />)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

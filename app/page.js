import Navbar from '../components/Navbar';
import ProjectPortfolio from '../components/ProjectPortfolio';
import { getProjects } from '../lib/db';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <>
      <Navbar />
      <main>
        <section className="company-intro">
          <div className="intro-wrap">
            <div>
              <p className="eyebrow">INTERIOR · BUILD · RENOVATION</p>
              <h1>Mewujudkan ruang yang fungsional dan berkarakter.</h1>
              <p className="intro-text">Filio Utama bergerak di bidang pekerjaan sipil, interior, dan renovasi. Kami membantu klien menghadirkan ruang yang rapi, nyaman, dan sesuai kebutuhan.</p>
              <a href="#portofolio" className="gold-button">Lihat Portofolio</a>
            </div>
            <div className="services-card">
              <h2>Layanan Kami</h2>
              <Service number="01" title="Pekerjaan Sipil" text="Pembangunan dan pekerjaan konstruksi." />
              <Service number="02" title="Pekerjaan Interior" text="Interior yang disesuaikan dengan ruang dan kebutuhan." />
              <Service number="03" title="Renovasi" text="Pembaruan ruang agar lebih fungsional dan nyaman." />
            </div>
          </div>
        </section>
        <ProjectPortfolio projects={projects} />
      </main>
      <Footer />
    </>
  );
}

function Service({ number, title, text }) {
  return <div className="service"><b>{number}</b><p><strong>{title}</strong><span>{text}</span></p></div>;
}

export function Footer() {
  return <footer>© {new Date().getFullYear()} PT. Filio Utama. Hak Cipta Dilindungi.</footer>;
}

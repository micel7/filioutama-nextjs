import Navbar from '../components/Navbar';
import ProjectPortfolio from '../components/ProjectPortfolio';
import Footer from '../components/Footer';
import { getProjects } from '../data/projects';

export default function HomePage() {
  const projects = getProjects();

  return (
    <>
      <Navbar animated />
      <main>
        <section className="company-intro">
          <div className="intro-wrap">
            <div className="intro-copy">
              <p className="eyebrow">INTERIOR · BUILD · RENOVATION</p>
              <h1>Menciptakan ruang yang nyaman dan fungsional.</h1>
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

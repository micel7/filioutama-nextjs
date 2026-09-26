import Navbar from '../../components/Navbar';
import { Footer } from '../page';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="detail-hero"><div className="detail-wrap"><p className="eyebrow">FILIO UTAMA</p><h1>Hubungi Kami</h1><p>Mari diskusikan rencana proyek bangunan Anda bersama kami.</p></div></section>
        <section className="contact-wrap">
          <h2>Informasi Kontak</h2>
          <div className="contact-list">
            <a className="contact-item" href="https://maps.google.com/?q=Jl.+Bulak+Kalitinjang+Baru+Timur+II+Kav+24+Surabaya" target="_blank" rel="noreferrer"><i className="fa-solid fa-map-location-dot map" /><span><strong>Alamat Kantor</strong>Jl. Bulak Kalitinjang Baru Timur II Kav 24 no 1-2<br />Surabaya, Jawa Timur</span></a>
            <a className="contact-item" href="https://wa.me/6285101212181" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp whatsapp" /><span><strong>Telepon & WhatsApp</strong>+62 851-0121-2181</span></a>
            <a className="contact-item" href="mailto:filioutama@gmail.com"><i className="fa-solid fa-envelope gmail" /><span><strong>Email</strong>filioutama@gmail.com</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

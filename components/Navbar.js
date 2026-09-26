import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-container" aria-label="Navigasi utama">
        <Link href="/" className="brand">
          <img src="/Logo.PNG" width="64" height="64" alt="Logo Filio Utama" />
          <span>FILIO UTAMA</span>
        </Link>
        <div className="nav-links">
          <Link href="/">Beranda</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
      </nav>
    </header>
  );
}

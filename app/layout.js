import './globals.css';

export const metadata = {
  title: 'Filio Utama | Interior, Build & Renovation',
  description: 'Portofolio pekerjaan sipil, interior, dan renovasi oleh Filio Utama.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

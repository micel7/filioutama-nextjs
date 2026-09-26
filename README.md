# Filio Utama — Next.js

Versi React/Next.js dari website portofolio Filio Utama. Data proyek disimpan sebagai data statis agar website dapat dipublikasikan di Vercel tanpa database cloud.

## Menjalankan di laptop

1. Buka terminal pada folder ini.
2. Jalankan `npm run dev`.
3. Buka `http://localhost:3000` di browser.

## Struktur utama

- `app/page.js`: beranda dan tab portofolio
- `app/proyek/[id]/page.js`: halaman detail proyek
- `app/kontak/page.js`: halaman kontak
- `data/projects.js`: data proyek yang ditampilkan pada website
- `public/uploads`: salinan foto dari website PHP lama

## Catatan deploy Vercel

Versi ini siap dideploy tanpa MySQL atau XAMPP. Untuk menambahkan proyek, tambahkan data di `data/projects.js` dan simpan fotonya di `public/uploads`. Jika nanti ingin menambah proyek dari dashboard/admin, gunakan database cloud dan storage gambar seperti Vercel Blob atau Cloudinary.

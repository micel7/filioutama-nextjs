# Filio Utama — Next.js

Versi React/Next.js dari website portofolio Filio Utama. Data proyek masih dibaca dari MySQL lokal XAMPP agar tampilannya sama dengan versi PHP lama.

## Menjalankan di laptop

1. Pastikan Apache dan MySQL di XAMPP sudah menyala.
2. Buka terminal pada folder ini.
3. Jalankan `npm run dev`.
4. Buka `http://localhost:3000` di browser.

## Konfigurasi database

File `.env.local` menyimpan konfigurasi database untuk laptop ini. Nilai awalnya memakai database lama:

```text
DB_HOST=localhost
DB_PORT=3306
DB_NAME=filioutama
DB_USER=root
DB_PASSWORD=
```

Jangan upload `.env.local` ke GitHub. Saat pindah ke Vercel, isi variabel yang sama melalui menu Environment Variables di Vercel menggunakan kredensial database cloud.

## Struktur utama

- `app/page.js`: beranda dan tab portofolio
- `app/proyek/[id]/page.js`: halaman detail proyek
- `app/kontak/page.js`: halaman kontak
- `lib/db.js`: koneksi dan query MySQL
- `public/uploads`: salinan foto dari website PHP lama

## Catatan deploy Vercel

MySQL XAMPP di laptop tidak dapat dipakai pengunjung online. Sebelum deploy, pindahkan database ke MySQL cloud dan pindahkan foto proyek ke storage cloud seperti Vercel Blob atau Cloudinary.

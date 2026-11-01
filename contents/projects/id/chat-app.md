## Konteks dan peran

Chat App adalah proyek belajar individual yang saya bangun untuk portfolio. Saya mengimplementasikan aplikasi sendiri, termasuk schema/function Convex, sinkronisasi Clerk/Svix, permintaan pertemanan, pesan langsung, serta integrasi UI/provider. Aplikasi menggunakan Next.js, React, dan TypeScript.

## Model data dan sinkronisasi identitas

Saya memodelkan pengguna, permintaan, pertemanan, percakapan, keanggotaan, serta pesan di Convex, dengan index untuk pencarian identitas dan relasi. Preview percakapan merujuk pesan terakhir.

Saya mengintegrasikan autentikasi Clerk dengan provider Convex. HTTP action Convex memverifikasi event lifecycle identitas mentah menggunakan signature Svix, lalu membuat atau memperbarui data pengguna milik aplikasi melalui function penyimpanan internal. Alur ini menangani pembuatan dan pembaruan, bukan lifecycle penghapusan lengkap.

## Permintaan pertemanan dan pesan reaktif

Logika permintaan pertemanan menolak permintaan ke diri sendiri, duplikat, pertemanan yang sudah ada, dan status permintaan tidak valid lainnya. Penerimaan memeriksa pihak penerima serta membuat percakapan langsung, pertemanan, dan dua keanggotaan dalam satu mutasi Convex.

Pembacaan dan pengiriman pesan langsung mengidentifikasi pengguna terautentikasi lalu memeriksa keanggotaan percakapan. Query reaktif Convex memperbarui pesan serta data percakapan tanpa polling atau kode WebSocket khusus. UI mencakup kontrol saat pengiriman tertunda, feedback mutasi, serta pengiriman melalui keyboard.

## Hasil dan keterbatasan

Saya menganggap proyek belajar ini selesai, tetapi aplikasi hanya berjalan lokal dan tidak pernah di-deploy. Implementasi menunjukkan transisi relasi, sinkronisasi identitas, serta pesan langsung reaktif; bukan klaim kesiapan produksi.

Checkout yang tersimpan memiliki masalah TypeScript/lint, tidak memiliki pengujian aplikasi otomatis, serta alur grup/status baca yang belum selesai. Riwayat pesan belum memakai pagination dan otorisasi belum menyeluruh pada semua mutasi. Batas tersebut tetap relevan meskipun alur pesan utama telah diimplementasikan.

## Pembelajaran

Proyek ini menghubungkan autentikasi terkelola, event identitas terverifikasi, data berindeks, mutasi server, serta UI reaktif. Proyek ini juga memperlihatkan perbedaan antara implementasi alur utama dan validasi setiap kondisi lifecycle, otorisasi, serta reliabilitas.

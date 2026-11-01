## Konteks dan peran

NKRI adalah prototype internal komunikasi komunitas Indonesia, termasuk konteks lingkungan RT/RW. Saya berkontribusi sebagai Frontend Developer saat magang Januari–Juni 2025 di PT. Mitra Informatika, melanjutkan proyek tim yang sudah ada. Periode pengerjaan tersebut bukan tanggal awal aplikasi.

Kontribusi individual saya meliputi design token, UX OTP/autentikasi dan cookie sementara, pengambilan gambar webcam/cropping/preview, kontak, antarmuka profil grup, serta filter ruang percakapan.

## Pipeline design token

Saya membangun pipeline Style Dictionary dari token JSON ke CSS custom properties dan utility Tailwind semantik, kemudian memigrasikan antarmuka autentikasi serta komunikasi ke styling berbasis token. Alur ini menyediakan jalur berulang dari elemen visual bersama menuju komponen aplikasi.

## Autentikasi dan media browser

Saya mengimplementasikan bagian frontend/server action pada onboarding tanpa kata sandi: login/registrasi terintegrasi API, status verifikasi OTP, penanganan resend/error, cookie HTTP-only sementara, hidrasi sesi NextAuth, dan routing kelengkapan profil. Service OTP backend berada di luar lingkup implementasi saya.

Untuk pesan gambar, saya menghubungkan pengambilan gambar webcam dengan cropping berbasis canvas dan state preview. Saya juga membangun antarmuka pengelolaan kontak, profil grup, serta filter ruang di sekitar tampilan percakapan.

## Batas kolaborasi

Saya berkontribusi pada modul IndexedDB dan upload suara/video/dokumen pada tingkat modul secara umum; bukan klaim kepemilikan tunggal atas setiap subfitur atau mesin upload generik. Indikator status koneksi dan perubahan chat terkait melibatkan diskusi logika serta pair programming.

WebRTC, protokol socket, dan Firebase Cloud Messaging diimplementasikan anggota tim lain. Ketiganya adalah kapabilitas aplikasi, bukan klaim implementasi pribadi saya.

## Status dan pembelajaran

Prototype hanya digunakan untuk riset serta pengujian internal, tanpa klaim produksi atau pengguna eksternal. Pekerjaan ini mempertemukan styling semantik, alur sesi berbasis API, media browser, dan perubahan state kolaboratif. Pembelajaran pentingnya adalah membedakan satu interaksi pengguna yang lengkap dari berbagai layer dengan kepemilikan terpisah yang mendukungnya.

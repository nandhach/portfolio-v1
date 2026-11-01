## Konteks dan peran

FMS adalah tugas akhir individual saya di Politeknik Elektronika Negeri Surabaya (PENS), dengan periode resmi Juni 2025–Juni 2026. Proyek ini mengembangkan frontend manajemen operasional kendaraan listrik menggunakan Progressive Web App dan arsitektur modular monolith. Aplikasi mencakup pemantauan armada, perencanaan rute, pengemudi, kendaraan, jadwal, halte, dan kontrol akses.

Pekerjaan saya mencakup arsitektur frontend, integrasi host, otomasi varian, batas API bersama, penanganan state langsung, caching PWA, tema runtime, pengujian, eksperimen arsitektur, serta pengemasan Docker/Nginx. Studi kasus ini menjelaskan lingkup tersebut, bukan kepemilikan backend yang terhubung.

## Development modular, satu host produksi

Saya memisahkan workspace menjadi host, tujuh package domain, dan package bersama. Development menggunakan Webpack Module Federation agar aplikasi domain aktif dapat berjalan terpisah atau di dalam host. Pada produksi, source domain aktif dialias ke satu build host tanpa ketergantungan runtime `remoteEntry.js`.

Saya juga membangun tooling varian berbasis konfigurasi. Validasi memeriksa dependensi modul dan konfigurasi wajib sebelum generator menyelaraskan navigasi, registry, provider gate, alias produksi, dan aset PWA. Modul nonaktif dikeluarkan dari build serta wiring PWA, bukan sekadar disembunyikan dari antarmuka.

## Integrasi bersama dan state langsung

Saya memusatkan transport REST dan SSE, normalisasi respons, fallback, service, serta facade lintas domain pada layer frontend bersama. Halaman memakai model frontend yang stabil alih-alih mengurai payload backend sendiri.

Untuk state armada langsung, saya mengimplementasikan hidrasi snapshot sebelum streaming, penggabungan pembaruan berbasis identifier, abort/cleanup, reconnect terbatas, dan status koneksi eksplisit. IndexedDB menyimpan data kendaraan terakhir. Service worker host menyediakan shell offline, fallback navigasi, dan caching selektif; bukan CRUD offline penuh atau sinkronisasi latar belakang.

Token tema runtime memakai validasi serta fallback baseline/cache. Docker mengemas host produksi statis untuk disajikan melalui Nginx.

## Hasil dan validasi

Penilaian tugas akhir telah selesai dan dinyatakan lulus. Pengujian integrasi terarah, build, dan smoke check manual tercatat. Saya juga merancang, menjalankan, serta menganalisis eksperimen arsitektur berulang pada tiga varian untuk memeriksa kesiapan proses development, konsolidasi source produksi, pengecualian modul, dan konsistensi aset hasil generator.

Hasil tersebut mendukung perilaku arsitektur yang diuji; bukan keunggulan performa universal, cakupan seluruh route, atau reliabilitas armada produksi.

## Status dan pembelajaran

Aplikasi di-deploy untuk demo akademik internal dan pitching, bukan operasional industri bagi pengguna langsung. Pembelajaran engineering utamanya adalah menjaga konsistensi batas modul, kontrak data bersama, dan artefak build yang dihasilkan pada development maupun produksi.

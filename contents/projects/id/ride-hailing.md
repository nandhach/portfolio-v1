## Konteks dan peran

Saat magang sebagai Frontend Developer di PT. Piramida Teknologi Informasi, Agustus–Desember 2025, saya mengerjakan frontend web administratif aplikasi ride-hailing.

Tim beranggotakan empat orang: dua developer backend/API, satu developer frontend mobile, dan saya sebagai satu-satunya developer frontend web. Saya mengimplementasikan halaman web, perilaku frontend, serta pengambilan data backend. Implementasi backend/API dan mobile menjadi tanggung jawab terpisah.

## Integrasi typed dan alur operasional

Saya membangun model domain/respons TypeScript serta transport Axios bersama dengan injeksi JWT dan pembersihan sesi saat `401`. Service per endpoint memasok alur list/detail TanStack Query dengan status loading, pagination, filter, dan invalidasi cache setelah mutasi. Zustand mengelola state sisi client.

Saya mengimplementasikan tampilan akun dan form pengemudi menggunakan React Hook Form serta Zod, termasuk validasi nomor telepon Indonesia, dokumen identitas, dan data kendaraan. Ini adalah antarmuka frontend yang terimplementasi; tidak seluruhnya merupakan lingkup MVP yang selesai.

## Peta perjalanan dan event real-time

Antarmuka detail perjalanan menampilkan peserta, tarif, lifecycle, dan konteks rute. Leaflet merender lokasi penjemputan/tujuan serta pengemudi; geometri jalan memiliki fallback garis lurus, dan instance peta dibersihkan mengikuti lifecycle komponen.

Saya mengintegrasikan event Socket.IO terautentikasi ke state notifikasi serta pembaruan lokasi pengemudi yang sesuai pada detail perjalanan. Alur REST dan lokasi/notifikasi Socket.IO berjalan end-to-end dengan backend yang dikembangkan terpisah saat pengujian internal lokal.

## Hasil dan status

MVP yang selesai terbatas pada pemantauan riders dan passenger. Aplikasi berjalan lokal untuk pengujian internal dan tidak pernah di-deploy. Hal ini tidak membuktikan reliabilitas produksi atau penyelesaian seluruh fitur administratif dalam repositori.

## Keterbatasan dan pembelajaran

Sebagian seri grafik masih memakai data contoh dan penyajian notifikasi terbatas. Cakupan pengujian runtime otomatis belum terbukti. Pekerjaan ini menekankan batas API typed, status loading/error yang eksplisit, serta pemetaan yang cermat antara data REST, payload event, dan state antarmuka.

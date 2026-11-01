## Konteks dan peran

Spectra adalah platform ujian berbasis komputer sebagai proyek freelance untuk kompetisi akuntansi. Platform menyediakan ujian peserta serta alur administrator untuk soal, monitoring progres, dan nilai.

Saya menjadi satu-satunya frontend developer dalam tim dua orang, bertanggung jawab atas seluruh UI dan logika sisi frontend. Rekan tim mengimplementasikan backend dan logika server, termasuk scoring serta penyimpanan data. Platform digunakan pada Spectra 2025 dan Spectra 2026; keduanya adalah edisi event, bukan asumsi periode mulai/akhir kontrak.

## Pengalaman ujian peserta

Dengan Next.js, React, TypeScript, dan Tailwind CSS, saya membangun antarmuka login/registrasi serta ujian peserta. React Context dan penyimpanan browser mempertahankan state jawaban serta urutan soal yang stabil dalam satu sesi browser. Jawaban yang dipisahkan per pengguna dihidrasi setelah refresh atau login agar peserta dapat melanjutkan pengerjaan.

Saya mengimplementasikan UX hitung mundur serta pengiriman manual/saat batas waktu yang terintegrasi dengan alur pengiriman server. Pengiriman dan scoring di server tetap berada di luar lingkup implementasi saya.

## Antarmuka administrator dan integrasi

Saya membangun antarmuka bank soal, monitoring, nilai, dan kartu nilai, beserta UI bersama admin/peserta serta penyesuaian desain tiap event atas permintaan klien. Antarmuka monitoring menyediakan visibilitas progres dan filter.

Di sisi peserta, saya menangani event Supabase Realtime yang menghubungkan intervensi administrator dengan UX penyelesaian paksa. Integrasi frontend ini tidak berarti kepemilikan mutasi database atau penegakan aturan backend.

## Hasil

Platform yang di-deploy diterima klien dan digunakan pada dua event tahunan untuk sekitar 100 peserta. Platform membantu panitia mengelola soal serta nilai peserta; pengurutan sistem menggantikan pengurutan nilai manual. Pemeliharaan dilakukan saat klien mengalami masalah.

## Batas dan pembelajaran

Pengerjaan dilakukan bersama dengan pembagian frontend/backend yang jelas. Laporan integrasi lokal mendukung alur pengiriman dan intervensi tertentu, bukan reliabilitas produksi menyeluruh atau kepemilikan pribadi atas pelaksanaan pengujian. Proyek ini memperkuat pentingnya koordinasi state browser, interaksi berbatas waktu, dan kontrak backend tanpa memindahkan kewenangan penilaian ke client.

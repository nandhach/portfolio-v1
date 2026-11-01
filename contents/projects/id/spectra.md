# Spectra

> **Platform ujian digital untuk kompetisi akuntansi—menghadirkan pengalaman ujian yang terstruktur sekaligus memudahkan panitia memantau progres dan hasil peserta.**

**Proyek freelance** · **Frontend Developer** · **Spectra 2025 & 2026**

`Next.js` · `React` · `TypeScript` · `Tailwind CSS` · `Supabase Realtime`

---

## 🎯 Tentang Proyek

Spectra adalah platform _computer-based test_ (CBT) yang dikembangkan untuk penyelenggaraan kompetisi akuntansi. Peserta dapat mengikuti ujian melalui web, sementara panitia menggunakan antarmuka administrator untuk mengelola soal, memantau pengerjaan, dan melihat hasil penilaian.

## 👨‍💻 Peran & Kontribusi

Saya menjadi **satu-satunya frontend developer** dalam tim beranggotakan dua orang. Saya bertanggung jawab atas seluruh antarmuka dan logika di sisi frontend, mulai dari pengalaman peserta hingga dashboard administrator. Rekan saya mengembangkan backend, termasuk pemrosesan pengiriman jawaban, penilaian, dan penyimpanan data.

## ⚙️ Implementasi Utama

### 📝 Pengalaman Ujian Peserta

- **Alur peserta:** Membangun antarmuka registrasi, login, dan halaman pengerjaan ujian.
- **Kontinuitas sesi:** Menggunakan React Context dan penyimpanan browser untuk mempertahankan jawaban serta urutan soal yang konsisten. Jawaban dipisahkan berdasarkan pengguna dan dipulihkan setelah _refresh_ atau login pada browser yang sama.
- **Interaksi berbatas waktu:** Mengimplementasikan hitung mundur serta pengalaman pengiriman jawaban secara manual maupun saat waktu habis, terintegrasi dengan alur pengiriman di backend.

### 🗂️ Dashboard Administrator & Realtime

- **Pengelolaan ujian:** Membangun antarmuka bank soal, monitoring progres dengan filter, daftar nilai, dan kartu nilai peserta.
- **UI lintas peran:** Mengembangkan komponen antarmuka bersama untuk peserta dan administrator serta menyesuaikan desain untuk kebutuhan setiap edisi kompetisi.
- **Integrasi realtime:** Menangani event Supabase Realtime pada sisi peserta untuk menampilkan alur penyelesaian ujian yang dipicu oleh intervensi administrator. Penegakan aturan dan perubahan data tetap ditangani backend.

## 📈 Hasil & Dampak

> **2 edisi kompetisi · ±100 peserta secara total**

Platform berhasil di-deploy, diterima oleh klien, dan digunakan pada **Spectra 2025 dan Spectra 2026**. Antarmuka yang dibangun mendukung panitia dalam pengelolaan soal, pemantauan peserta, serta penyajian hasil penilaian. Pengurutan nilai melalui sistem juga menggantikan proses pengurutan manual. Saya turut menangani pemeliharaan frontend ketika klien melaporkan kendala.

## 💡 Pembelajaran Teknis

Proyek ini memperdalam pemahaman saya tentang **sinkronisasi state browser, interaksi ujian berbatas waktu, dan integrasi realtime**. Pengalaman bekerja dalam tim kecil juga menegaskan pentingnya kontrak frontend–backend yang jelas, khususnya ketika keputusan akhir terkait pengiriman dan penilaian harus tetap berada di server.

# NKRI

> **Prototipe platform komunikasi komunitas yang menghubungkan interaksi digital, pengelolaan percakapan, dan pengalaman komunikasi dalam satu aplikasi web untuk lingkungan masyarakat Indonesia.**

**Proyek Magang** · **Frontend Developer** · **Januari–Juni 2025**

`Next.js` · `NextAuth` · `TypeScript` · `Tailwind CSS` · `Style Dictionary` · `IndexedDB` · `Canvas API`

---

## 🎯 Tentang Proyek

**NKRI** merupakan prototipe platform komunikasi digital yang dikembangkan untuk mendukung interaksi antaranggota komunitas di Indonesia, termasuk lingkungan RT/RW. Aplikasi ini menggabungkan percakapan, pengelolaan kontak, komunikasi grup, dan berbagai kemampuan berbagi media dalam satu platform.

Pengembangan dilakukan sebagai bagian dari proyek internal **PT. Mitra Informatika**, dengan fokus pada eksplorasi pengalaman komunikasi berbasis web dan integrasi berbagai teknologi browser.

## 👨‍💻 Peran & Kontribusi

Saya bergabung sebagai **Frontend Developer Intern**, melanjutkan pengembangan proyek yang telah dikerjakan oleh tim sebelumnya.

Kontribusi saya berfokus pada **pengembangan sistem styling berbasis design token, alur autentikasi, interaksi media browser, dan penyempurnaan antarmuka komunikasi**.

Selain mengembangkan fitur secara individual, saya juga berkolaborasi dengan anggota tim melalui diskusi teknis dan _pair programming_ untuk mengintegrasikan beberapa kemampuan aplikasi.

## ⚙️ Implementasi Utama

### 🎨 Design System & Token Architecture

- **Design-token pipeline:** Membangun pipeline Style Dictionary untuk mengubah token desain berbasis JSON menjadi CSS custom properties dan utility Tailwind yang semantik.
- **Konsistensi visual:** Memigrasikan antarmuka autentikasi dan komunikasi agar menggunakan token bersama sebagai dasar styling.
- **Reusable styling foundation:** Menyusun pendekatan styling yang memungkinkan elemen visual digunakan secara konsisten di berbagai komponen tanpa mengulang nilai desain secara manual.

### 🔐 Passwordless Authentication & Session Flow

- **Autentikasi berbasis OTP:** Mengimplementasikan antarmuka login dan registrasi tanpa kata sandi yang terintegrasi dengan API backend.
- **Verification experience:** Membangun state verifikasi OTP, pengiriman ulang kode, serta penanganan kesalahan untuk memberikan feedback yang jelas kepada pengguna.
- **Session management:** Mengintegrasikan server action, cookie HTTP-only sementara, dan hidrasi sesi NextAuth dalam alur autentikasi.
- **Profile completion:** Mengimplementasikan navigasi berdasarkan kelengkapan profil setelah proses autentikasi.

Implementasi saya mencakup frontend dan server action yang mendukung alur tersebut, sementara layanan penerbitan serta verifikasi OTP di backend dikembangkan secara terpisah.

### 📸 Browser Media & Image Interaction

- **Webcam capture:** Mengintegrasikan akses kamera browser untuk mengambil gambar secara langsung dari perangkat pengguna.
- **Canvas-based cropping:** Mengimplementasikan pemotongan gambar menggunakan Canvas API sebelum gambar digunakan dalam percakapan.
- **Image preview:** Mengelola state pratinjau gambar agar pengguna dapat meninjau hasil pengambilan dan pemotongan sebelum melanjutkan interaksi.

### 💬 Communication Interfaces & Collaboration

- **Contact management:** Mengembangkan antarmuka pengelolaan kontak untuk mendukung navigasi dan interaksi pengguna.
- **Group profiles:** Membangun antarmuka profil grup sebagai bagian dari pengalaman komunikasi komunitas.
- **Conversation filtering:** Mengimplementasikan filter ruang percakapan untuk memudahkan pengguna menemukan konteks komunikasi yang relevan.
- **Collaborative development:** Berkontribusi pada modul IndexedDB serta fitur unggah suara, video, dan dokumen bersama anggota tim.
- **Connection awareness:** Terlibat dalam diskusi logika dan _pair programming_ untuk indikator status koneksi serta perubahan terkait antarmuka chat.

Fitur WebRTC, protokol socket, dan Firebase Cloud Messaging dikembangkan oleh anggota tim lainnya sebagai bagian dari kemampuan aplikasi secara keseluruhan.

## 📈 Hasil & Status Pengembangan

> **Prototipe Internal · Eksplorasi Fitur · Pengujian Internal**

Kontribusi pengembangan menghasilkan sejumlah antarmuka dan integrasi frontend yang mendukung eksplorasi platform komunikasi komunitas, termasuk:

- **Styling berbasis token** untuk menjaga konsistensi elemen visual aplikasi.
- **Alur autentikasi terintegrasi API** dengan verifikasi OTP dan pengelolaan sesi.
- **Interaksi kamera dan gambar** melalui pengambilan, pemotongan, serta pratinjau media.
- **Antarmuka komunikasi** untuk kontak, profil grup, dan filter ruang percakapan.

**Status proyek:** NKRI digunakan sebagai prototipe untuk kebutuhan riset dan pengujian internal. Proyek ini belum memiliki klaim penggunaan produksi maupun adopsi oleh pengguna eksternal.

## 💡 Pembelajaran Teknis

Proyek ini memperluas pengalaman saya dalam **membangun fondasi design system, mengintegrasikan autentikasi berbasis API, serta memanfaatkan kemampuan native browser untuk interaksi multimedia**.

Saya juga memperoleh pemahaman lebih mendalam mengenai pengembangan aplikasi komunikasi yang melibatkan berbagai lapisan teknologi dan state yang saling berkaitan.

Berkolaborasi dalam codebase yang sudah berjalan mengajarkan pentingnya **memahami arsitektur eksisting, menjaga konsistensi implementasi, serta mengelola batas tanggung jawab antaranggota tim** dalam membangun pengalaman pengguna yang utuh.

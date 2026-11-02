# Ride-Hailing Admin Dashboard

> **Dashboard administrasi ride-hailing yang mengintegrasikan pengelolaan data, visualisasi perjalanan berbasis peta, dan pemantauan aktivitas secara real-time dalam satu antarmuka web.**

**Proyek Magang** · **Frontend Web Developer** · **Agustus–Desember 2025**

`TypeScript` · `Axios` · `TanStack Query` · `Zustand` · `Leaflet` · `Socket.IO` · `Zod`

---

## 🎯 Tentang Proyek

Ride-Hailing Admin Dashboard merupakan aplikasi web administratif yang dikembangkan selama program magang di **PT. Piramida Teknologi Informasi**. Aplikasi ini dirancang untuk mendukung pemantauan aktivitas layanan ride-hailing, mulai dari pengelolaan data pengguna hingga informasi perjalanan dan lokasi pengemudi.

Pengembangan berfokus pada integrasi data backend dengan antarmuka operasional yang informatif, interaktif, dan mampu merespons pembaruan data secara real-time.

## 👨‍💻 Peran & Kontribusi

Saya berperan sebagai **satu-satunya Frontend Web Developer** dalam tim beranggotakan empat orang, bersama dua Backend/API Developer dan satu Mobile Frontend Developer.

Tanggung jawab saya mencakup pengembangan halaman administrasi, pengelolaan state aplikasi, integrasi REST API, serta implementasi peta interaktif dan komunikasi real-time. Pengembangan backend dan aplikasi mobile ditangani secara terpisah oleh anggota tim lainnya.

## ⚙️ Implementasi Utama

### 🔗 Integrasi API & State Management

- **Type-safe API integration:** Membangun model domain dan respons menggunakan TypeScript untuk menjaga konsistensi struktur data antara frontend dan backend.
- **Autentikasi & sesi:** Mengembangkan konfigurasi Axios terpusat dengan penyertaan JWT pada request serta pembersihan sesi otomatis ketika server mengembalikan status `401`.
- **Server-state management:** Menggunakan TanStack Query untuk pengambilan data, pagination, filtering, pengelolaan loading state, dan invalidasi cache setelah perubahan data.
- **Client-state management:** Mengimplementasikan Zustand untuk mengelola state lokal aplikasi secara terpisah dari data server.

### 📝 Antarmuka Administrasi & Validasi Data

- **Manajemen akun:** Membangun tampilan administratif untuk mengakses dan menampilkan informasi akun pengguna.
- **Formulir pengemudi:** Mengembangkan antarmuka pengisian data pengemudi, dokumen identitas, dan informasi kendaraan.
- **Validasi terstruktur:** Mengintegrasikan React Hook Form dan Zod untuk validasi input, termasuk format nomor telepon Indonesia dan data administratif lainnya.

### 🗺️ Visualisasi Perjalanan & Peta Interaktif

- **Detail perjalanan:** Mengembangkan antarmuka yang menampilkan informasi peserta perjalanan, tarif, status perjalanan, dan konteks rute.
- **Pemetaan lokasi:** Menggunakan Leaflet untuk memvisualisasikan titik penjemputan, tujuan, serta posisi pengemudi pada peta interaktif.
- **Penanganan rute:** Menyediakan fallback garis lurus ketika geometri jalan tidak tersedia, serta memastikan instance peta dibersihkan mengikuti lifecycle komponen.

### ⚡ Komunikasi Real-Time

- **Socket.IO integration:** Mengintegrasikan koneksi Socket.IO terautentikasi untuk menerima event dari backend.
- **Pembaruan lokasi:** Menghubungkan event lokasi pengemudi dengan tampilan detail perjalanan yang relevan.
- **Sinkronisasi notifikasi:** Memetakan event server ke state notifikasi frontend untuk mendukung pembaruan informasi tanpa refresh manual.

## 📈 Hasil & Status Pengembangan

> **MVP Pemantauan Rider & Passenger · Pengujian Internal Lokal**

MVP yang diselesaikan berfokus pada **pemantauan rider dan passenger**. Integrasi REST API serta alur lokasi dan notifikasi melalui Socket.IO berhasil dijalankan secara end-to-end bersama backend dalam pengujian internal lokal.

Sejumlah antarmuka administratif tambahan juga telah diimplementasikan di sisi frontend, meskipun tidak seluruhnya termasuk dalam cakupan MVP yang selesai.

**Status proyek:** Aplikasi berjalan pada lingkungan pengembangan lokal dan belum pernah di-deploy ke production. Beberapa visualisasi grafik masih menggunakan data contoh, penyajian notifikasi masih terbatas, dan cakupan pengujian otomatis belum terverifikasi secara menyeluruh.

## 💡 Pembelajaran Teknis

Proyek ini memperkuat kemampuan saya dalam **merancang integrasi API yang type-safe, mengelola server state dan client state, serta menyinkronkan REST API dengan event real-time**.

Implementasi peta perjalanan juga memberikan pengalaman dalam menangani data geospasial, lifecycle komponen, dan pembaruan lokasi berbasis event.

Bekerja dalam tim dengan pembagian frontend web, mobile, dan backend yang terpisah menekankan pentingnya konsistensi kontrak API, penanganan loading/error state, dan koordinasi integrasi lintas platform.

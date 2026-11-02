# Fleet Management System (FMS)

> **Platform manajemen armada kendaraan listrik berbasis Progressive Web App (PWA) dengan arsitektur modular monolith, dirancang untuk mengintegrasikan pemantauan kendaraan, pengelolaan operasional, dan konfigurasi fitur yang fleksibel dalam satu aplikasi.**

**Tugas Akhir Individu** · **Frontend Developer & Architecture** · **Juni 2025–Juni 2026**

`PWA` · `Webpack Module Federation` · `REST API` · `Server-Sent Events` · `IndexedDB` · `Docker` · `Nginx`

---

## 🎯 Tentang Proyek

**Fleet Management System (FMS)** merupakan proyek tugas akhir individual saya di **Politeknik Elektronika Negeri Surabaya (PENS)** yang mengeksplorasi pengembangan platform manajemen operasional kendaraan listrik berbasis web.

Aplikasi ini dirancang untuk mendukung berbagai kebutuhan pengelolaan armada, meliputi **pemantauan kendaraan, perencanaan rute, manajemen pengemudi dan kendaraan, penjadwalan, pengelolaan halte, serta kontrol akses pengguna**.

Fokus utama proyek tidak hanya terletak pada implementasi fitur, tetapi juga pada perancangan **arsitektur frontend modular** yang memungkinkan pengembangan domain secara independen, konfigurasi fitur berdasarkan kebutuhan, dan integrasi seluruh modul ke dalam satu aplikasi produksi.

## 👨‍💻 Peran & Kontribusi

Sebagai pengembang individual, saya bertanggung jawab atas **perancangan arsitektur dan implementasi frontend FMS**, mulai dari struktur modular, integrasi antar-domain, pengelolaan data real-time, hingga proses build dan deployment.

Cakupan pekerjaan utama saya meliputi:

- **Frontend architecture:** Merancang struktur modular dan integrasi aplikasi melalui host utama.
- **Build automation:** Mengembangkan sistem konfigurasi varian untuk mengatur modul dan menghasilkan konfigurasi build secara otomatis.
- **Data integration:** Membangun lapisan integrasi REST API dan Server-Sent Events (SSE) yang digunakan bersama.
- **PWA & offline capabilities:** Mengimplementasikan caching selektif, penyimpanan data lokal, dan fallback ketika koneksi tidak tersedia.
- **Architecture validation:** Merancang eksperimen dan pengujian untuk memvalidasi perilaku arsitektur pada beberapa konfigurasi aplikasi.

Pengembangan backend yang terhubung dengan aplikasi berada di luar cakupan implementasi individual saya.

## ⚙️ Implementasi Utama

### 🧩 Modular Monolith & Microfrontend Development

> **1 Host Application · 7 Domain Packages · 1 Shared Package**

Saya merancang workspace frontend yang memisahkan aplikasi menjadi **satu host utama, tujuh package domain, dan satu package bersama** untuk menjaga batas tanggung jawab serta mengurangi keterikatan antar-modul.

- **Independent development:** Menggunakan Webpack Module Federation agar domain yang diaktifkan dapat dikembangkan dan dijalankan secara terpisah maupun terintegrasi melalui host.
- **Unified production build:** Mengonsolidasikan source code dari domain aktif ke dalam satu build host pada lingkungan produksi.
- **Runtime independence:** Menghilangkan ketergantungan terhadap pemuatan `remoteEntry.js` saat runtime produksi melalui mekanisme alias source.
- **Shared architecture:** Memusatkan kebutuhan lintas domain pada package bersama agar pola integrasi tetap konsisten.

Pendekatan ini menggabungkan fleksibilitas pengembangan modular dengan distribusi aplikasi produksi yang terkonsolidasi.

### 🛠️ Configuration-Driven Variant Automation

Saya mengembangkan tooling berbasis konfigurasi untuk menghasilkan variasi aplikasi berdasarkan modul dan fitur yang diaktifkan.

- **Module configuration:** Mengatur aktivasi domain melalui konfigurasi, bukan perubahan manual pada banyak bagian aplikasi.
- **Dependency validation:** Memvalidasi dependensi antar-modul dan konfigurasi wajib sebelum proses generasi dijalankan.
- **Automated synchronization:** Menyelaraskan navigasi, module registry, provider gates, alias produksi, dan aset PWA secara otomatis.
- **Build-level exclusion:** Memastikan modul yang dinonaktifkan tidak disertakan dalam wiring build dan PWA, bukan sekadar menyembunyikan menu pada antarmuka.

Dengan pendekatan ini, setiap varian dapat mempertahankan konsistensi konfigurasi dari proses development hingga build produksi.

### 🔗 Shared API Integration & Data Contracts

Untuk mengurangi duplikasi logika integrasi, saya membangun lapisan frontend bersama yang menangani komunikasi antara aplikasi dan layanan backend.

- **Centralized transport:** Memusatkan konfigurasi komunikasi REST API dan SSE.
- **Response normalization:** Mengubah payload backend menjadi model frontend yang konsisten sebelum dikonsumsi oleh komponen.
- **Service abstraction:** Menyusun service dan facade lintas domain untuk mengakses data melalui kontrak yang terstruktur.
- **Fallback handling:** Menyediakan mekanisme fallback pada alur integrasi yang membutuhkan penanganan kondisi tertentu.

Pemisahan ini membantu menjaga komponen UI tetap berfokus pada presentasi dan interaksi tanpa harus menangani struktur respons backend secara langsung.

### 📡 Real-Time Fleet Monitoring & Offline Support

Saya mengimplementasikan pengelolaan data kendaraan yang menggabungkan **initial data snapshot, pembaruan berbasis SSE, dan penyimpanan lokal**.

- **Snapshot hydration:** Memuat kondisi awal kendaraan sebelum memulai streaming pembaruan real-time.
- **Incremental updates:** Menggabungkan pembaruan kendaraan berdasarkan identifier agar state tetap konsisten.
- **Connection lifecycle:** Mengelola abort, cleanup, reconnect terbatas, serta status koneksi yang eksplisit.
- **Local persistence:** Menggunakan IndexedDB untuk menyimpan data kendaraan terakhir yang tersedia.
- **PWA caching:** Mengimplementasikan service worker untuk offline application shell, navigation fallback, dan caching aset secara selektif.

Dukungan offline difokuskan pada akses shell aplikasi dan data kendaraan terakhir, bukan operasi CRUD offline penuh atau background synchronization.

### 🎨 Runtime Theming & Production Packaging

Selain arsitektur dan integrasi data, saya mengimplementasikan konfigurasi tampilan serta pengemasan aplikasi untuk deployment.

- **Runtime theme tokens:** Mendukung konfigurasi tema dengan validasi dan fallback ke nilai baseline atau cache.
- **Consistent presentation:** Memisahkan konfigurasi visual dari implementasi komponen agar tema dapat dikelola secara terpusat.
- **Containerized delivery:** Mengemas hasil build host statis menggunakan Docker dan Nginx untuk penyajian aplikasi.

## 🧪 Pengujian & Validasi Arsitektur

> **3 Varian Arsitektur · Eksperimen Berulang · Validasi Build & Integrasi**

Selain mengembangkan aplikasi, saya **merancang, menjalankan, dan menganalisis eksperimen arsitektur** menggunakan tiga varian konfigurasi.

Evaluasi difokuskan pada beberapa aspek:

- **Development readiness:** Memeriksa kesiapan proses pengembangan berdasarkan modul yang diaktifkan.
- **Production consolidation:** Memvalidasi konsolidasi source domain ke dalam build host produksi.
- **Module exclusion:** Memeriksa pengecualian modul yang dinonaktifkan dari konfigurasi build.
- **Generated-asset consistency:** Memastikan konsistensi aset dan konfigurasi yang dihasilkan oleh tooling.

Validasi juga mencakup pengujian integrasi terarah, pemeriksaan hasil build, dan manual smoke testing.

Hasil pengujian memberikan bukti terhadap perilaku arsitektur pada skenario yang dievaluasi, tanpa mengasumsikan keunggulan performa universal atau cakupan seluruh skenario produksi.

## 📈 Hasil & Status Proyek

> **Tugas Akhir Lulus · Deployment Demo Akademik · Validasi 3 Varian**

Proyek FMS berhasil menyelesaikan proses **penilaian tugas akhir dan dinyatakan lulus**.

Implementasi frontend menghasilkan fondasi aplikasi modular yang mendukung pengembangan domain secara terpisah, integrasi build produksi, pengelolaan data armada real-time, serta konfigurasi fitur berbasis varian.

Aplikasi juga berhasil di-deploy untuk **demonstrasi akademik internal dan pitching**, dengan hasil eksperimen arsitektur yang telah didokumentasikan dan dianalisis.

**Status proyek:** FMS digunakan dalam konteks riset, evaluasi akademik, dan demonstrasi. Aplikasi belum digunakan sebagai sistem operasional armada industri oleh pengguna langsung.

## 💡 Pembelajaran Teknis

FMS menjadi pengalaman mendalam bagi saya dalam **merancang arsitektur frontend yang modular, mengelola kompleksitas integrasi antar-domain, dan membangun tooling untuk mengotomatisasi konfigurasi aplikasi**.

Tantangan penting dalam proyek ini adalah memastikan bahwa batas modul, kontrak data bersama, dan artefak build tetap konsisten meskipun aplikasi dijalankan dalam konfigurasi development dan produksi yang berbeda.

Proyek ini juga memperkuat pemahaman saya mengenai **trade-off arsitektur, pengelolaan state real-time, strategi offline PWA, serta pentingnya validasi berbasis eksperimen** dalam mengambil keputusan teknis.

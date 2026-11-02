# Chat App

> **Aplikasi pesan instan berbasis web yang menggabungkan autentikasi modern, sistem pertemanan, dan percakapan real-time melalui arsitektur backend reaktif.**

**Proyek Personal** · **Full-stack Developer** · **Learning Project**

`Next.js` · `React` · `TypeScript` · `Convex` · `Clerk` · `Svix`

---

## 🎯 Tentang Proyek

**Chat App** merupakan proyek personal yang saya kembangkan untuk mengeksplorasi pengembangan aplikasi komunikasi real-time menggunakan teknologi full-stack modern.

Aplikasi ini memungkinkan pengguna untuk **mengelola pertemanan, mengirim permintaan pertemanan, dan bertukar pesan secara langsung** melalui antarmuka web yang terhubung dengan backend reaktif.

Fokus pengembangan tidak hanya pada pengalaman berkirim pesan, tetapi juga pada **pemodelan relasi data, sinkronisasi identitas pengguna, keamanan akses percakapan, dan pengelolaan perubahan data secara konsisten**.

## 👨‍💻 Peran & Kontribusi

Sebagai **pengembang tunggal**, saya merancang dan mengimplementasikan seluruh alur utama aplikasi, mulai dari struktur database, fungsi backend, autentikasi, hingga integrasi antarmuka pengguna.

Cakupan pengembangan meliputi:

- **Database architecture:** Merancang schema dan relasi data menggunakan Convex.
- **Authentication integration:** Mengintegrasikan Clerk dengan backend Convex serta sinkronisasi identitas melalui webhook.
- **Friendship workflows:** Mengembangkan logika permintaan, penerimaan, dan pembentukan relasi pertemanan.
- **Real-time messaging:** Mengimplementasikan percakapan personal menggunakan query reaktif dan mutasi Convex.
- **Frontend integration:** Menghubungkan state autentikasi, data percakapan, dan interaksi pengguna ke dalam antarmuka aplikasi.

## ⚙️ Implementasi Utama

### 🗃️ Data Modeling & Relationship Management

Saya merancang struktur data menggunakan **Convex** untuk mengelola identitas pengguna dan relasi antarentitas dalam aplikasi komunikasi.

- **Relational data modeling:** Memodelkan pengguna, permintaan pertemanan, relasi pertemanan, percakapan, keanggotaan percakapan, dan pesan.
- **Indexed queries:** Menggunakan index untuk mendukung pencarian identitas dan relasi antar pengguna secara terstruktur.
- **Conversation previews:** Menghubungkan informasi pratinjau percakapan dengan pesan terakhir untuk menampilkan konteks komunikasi terbaru.
- **Server-side mutations:** Mengelola perubahan relasi dan data aplikasi melalui fungsi backend Convex.

Pendekatan ini membantu memisahkan aturan bisnis dari komponen antarmuka dan menjaga konsistensi perubahan data.

### 🔐 Authentication & Identity Synchronization

Saya mengintegrasikan **Clerk sebagai penyedia autentikasi** dengan Convex sebagai backend dan penyimpanan data aplikasi.

- **Authentication providers:** Menghubungkan sesi autentikasi Clerk dengan provider Convex agar aplikasi dapat mengenali pengguna yang sedang masuk.
- **Webhook verification:** Menggunakan HTTP action Convex untuk memverifikasi signature Svix dari event lifecycle identitas.
- **User synchronization:** Membuat atau memperbarui data pengguna internal berdasarkan event identitas yang telah diverifikasi.
- **Controlled persistence:** Menjalankan perubahan data pengguna melalui fungsi penyimpanan internal di backend.

Sinkronisasi mencakup pembuatan dan pembaruan identitas pengguna, sedangkan proses penghapusan akun secara menyeluruh belum menjadi bagian dari implementasi.

### 🤝 Friend Requests & Relationship Workflows

Saya mengembangkan alur pertemanan dengan validasi aturan bisnis di sisi server untuk menjaga integritas hubungan antar pengguna.

- **Request validation:** Menolak permintaan pertemanan ke akun sendiri, permintaan duplikat, hubungan pertemanan yang sudah ada, serta status permintaan yang tidak valid.
- **Authorized acceptance:** Memastikan hanya pengguna penerima yang berhak menerima permintaan pertemanan.
- **Atomic relationship creation:** Membentuk relasi pertemanan, percakapan langsung, dan dua data keanggotaan dalam satu mutasi Convex.
- **Consistent transitions:** Mengelola transisi dari permintaan pertemanan menjadi percakapan yang dapat digunakan kedua pengguna.

Penggabungan perubahan dalam satu mutasi membantu menjaga konsistensi data ketika permintaan pertemanan diterima.

### 💬 Reactive Direct Messaging

> **Reactive Queries · Membership Validation · No Custom Polling**

Saya membangun alur percakapan personal menggunakan kemampuan reaktif Convex agar perubahan pesan dan data percakapan dapat diperbarui secara otomatis pada antarmuka.

- **Reactive data fetching:** Menggunakan query reaktif Convex untuk memperbarui daftar pesan dan informasi percakapan tanpa implementasi polling atau WebSocket khusus.
- **Conversation authorization:** Memvalidasi identitas pengguna terautentikasi dan keanggotaan percakapan sebelum membaca atau mengirim pesan langsung.
- **Message interactions:** Mengembangkan antarmuka pengiriman pesan dengan status pending, feedback hasil mutasi, dan dukungan pengiriman melalui keyboard.
- **Conversation synchronization:** Menghubungkan perubahan data backend dengan tampilan percakapan agar pengguna menerima pembaruan tanpa refresh manual.

Implementasi ini memungkinkan logika komunikasi utama dikelola melalui fungsi backend dan subscription data reaktif yang disediakan Convex.

## 📈 Hasil & Status Pengembangan

> **Alur Pesan Personal Selesai · Backend Reaktif · Pengujian Lokal**

Proyek berhasil mengimplementasikan alur utama komunikasi personal, mencakup **autentikasi pengguna, sinkronisasi identitas, permintaan pertemanan, pembentukan percakapan, dan pertukaran pesan reaktif**.

Integrasi Clerk, Svix, dan Convex memberikan pengalaman praktis dalam menghubungkan identitas eksternal dengan data aplikasi serta membangun interaksi yang merespons perubahan backend.

**Status proyek:** Proyek pembelajaran ini saya anggap selesai untuk cakupan utama yang ditargetkan. Aplikasi hanya dijalankan secara lokal dan belum pernah di-deploy ke production.

### 🔍 Ruang Pengembangan Berikutnya

Beberapa aspek yang masih memerlukan penyempurnaan sebelum aplikasi layak digunakan secara lebih luas:

- **Quality assurance:** Menyelesaikan masalah TypeScript/lint pada checkout terakhir dan menambahkan pengujian aplikasi otomatis.
- **Message scalability:** Mengimplementasikan pagination untuk riwayat percakapan.
- **Authorization hardening:** Memperluas validasi otorisasi pada seluruh mutasi yang relevan.
- **Feature completion:** Menyelesaikan alur percakapan grup, status baca, dan lifecycle penghapusan identitas pengguna.

## 💡 Pembelajaran Teknis

Chat App memperdalam pemahaman saya tentang **integrasi autentikasi terkelola, verifikasi webhook, pemodelan relasi database, serta pengembangan antarmuka berbasis reactive data**.

Salah satu pembelajaran terpenting adalah bagaimana **aturan bisnis dan perubahan data harus dikelola secara konsisten di backend**, terutama ketika satu interaksi pengguna melibatkan beberapa entitas yang saling berhubungan.

Proyek ini juga memperjelas perbedaan antara menyelesaikan alur fitur utama dan memastikan kesiapan aplikasi untuk produksi, termasuk pengujian, otorisasi menyeluruh, dan penanganan berbagai kondisi edge case.

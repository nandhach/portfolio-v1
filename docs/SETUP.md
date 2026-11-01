# Setup dan troubleshooting

Workflow dokumentasi menggunakan npm. Instruksi preview untuk **pemilik yang
memeriksa manual**; agent repo tidak menjalankan server/browser otomatis.

## 1. Prasyarat dan instalasi

- Next.js 14.1 membutuhkan Node.js minimal 18.17. Pilih rilis Node.js yang masih
  didukung untuk lingkungan Anda; minimum framework bukan rekomendasi usia runtime.
- npm tersedia dengan Node.js; `node --version` dan `npm --version` untuk memeriksa.
- Ada `package-lock.json` dan `bun.lockb`. Jangan regenerate keduanya untuk satu
  perubahan. Panduan ini memakai npm; lockfile Bun tetap dipertahankan.
- Tidak ada folder `src/`, CMS, atau database wajib untuk konten utama.

Pada checkout baru, buka terminal di root repo lalu:

```sh
npm ci
```

`npm ci` untuk instalasi dari lockfile, bukan perintah rutin setiap edit copy.
Jangan menginstal paket baru hanya untuk menjalankan verifikasi yang sudah ada.
Tidak ada script test atau hook/Conventional Commit tooling yang perlu diasumsikan
dari README lama.

## 2. Environment

Salin `.env.example` ke `.env.local` melalui editor/file explorer. Tidak perlu
menyalin atau membuka environment pribadi sumber lain. Isi hanya variabel yang
benar-benar Anda gunakan. Contoh aktif hanya:

```dotenv
DOMAIN=http://localhost:3000
NEXT_PUBLIC_BASE_PATH=
```

`DOMAIN` dibaca saat build untuk metadata. Nilai hilang/tidak valid memakai fallback
localhost. `NEXT_PUBLIC_BASE_PATH` kosong untuk root lokal, `/portfolio-v1` untuk
project Pages saat ini. Workflow membaca keduanya dari metadata GitHub Pages.
Mengubah environment memerlukan build baru. Petunjuk publikasi lengkap:
[GitHub Pages](GITHUB_PAGES.md).

### Integrasi arsip yang dipertahankan

Sejak tahap 6, entrypoint berada di `app/_legacy/`, tidak dirutekan/diekspor.
Variabel di bawah hanya referensi source; **tidak diperlukan pada Pages**.

| Area                | Variabel source                                                                                                                                                                                                                                                                               | Catatan                                                  |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| GitHub Dashboard    | `GITHUB_READ_USER_TOKEN_PERSONAL`                                                                                                                                                                                                                                                             | Bukan prasyarat tautan GitHub profil                     |
| WakaTime            | `WAKATIME_API_KEY`                                                                                                                                                                                                                                                                            | API lama dapat mencatat 401 saat build tanpa konfigurasi |
| Codewars            | `CODEWARS_USER_ID`                                                                                                                                                                                                                                                                            | Username statistik lama                                  |
| Monkeytype          | `MONKEYTYPE_API_KEY`                                                                                                                                                                                                                                                                          | Statistik lama                                           |
| Umami               | `UMAMI_API_KEY`, `UMAMI_WEBSITE_ID_MYID`, `UMAMI_WEBSITE_ID_SITE`                                                                                                                                                                                                                             | Integrasi lama; tracking global tidak dirender           |
| Auth Chat           | `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GITHUB_ID`, `GITHUB_SECRET`                                                                                                                                                                                   | Konfigurasi provider nyata diperlukan                    |
| Penanda author Chat | `NEXT_PUBLIC_AUTHOR_EMAIL`                                                                                                                                                                                                                                                                    | Client-visible, bukan email Contact                      |
| Supabase lama       | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`                                                                                                                                                                                                                                   | Projects/Achievements tidak memakai ini                  |
| Email lama          | `NODEMAILER_EMAIL`, `NODEMAILER_PW`                                                                                                                                                                                                                                                           | Contact utama memakai direct links                       |
| Firebase lama       | `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`, `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`, `NEXT_PUBLIC_FIREBASE_APP_ID`, `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`, `NEXT_PUBLIC_FIREBASE_DB_URL` | Client config fitur lama                                 |
| TikTok service      | `TIKTOK_CLIENT_KEY`, `TIKTOK_CLIENT_SECRET`                                                                                                                                                                                                                                                   | Contents/integrasi lama                                  |

Prefix `NEXT_PUBLIC_` berarti nilainya dapat masuk bundle browser. Jangan menaruh
secret server, password, atau service-role key pada variabel berprefix itu.
`.env.local` tidak untuk commit; `.env.example` berisi nama variabel/keterangan,
bukan credential nyata. Placeholder kosong yang dikomentari bukan integrasi siap
pakai. Beberapa endpoint lama masih menyimpan penerima/username template; mengisi
environment saja bukan bukti fitur tersebut sudah dipersonalisasi.

## 3. Preview manual

Setelah dependency tersedia, pemilik dapat menjalankan:

```sh
npm run dev
```

Konfigurasi export hanya aktif pada build produksi; preview development memakai
mode Next.js biasa. Jika error `missing exported function "generateStaticParams()"`
masih tampil setelah pembaruan konfigurasi, hentikan proses lama dengan Ctrl+C,
lalu jalankan ulang `npm run dev`.

Buka `http://localhost:3000/en` dan `/id`. Hentikan terminal dengan Ctrl+C setelah
selesai. Output produksi dibuat dengan `npm run build`, diperiksa memakai
`npm run check:export`, lalu dipublikasikan sebagai file statis. Script `start`
dihapus karena `next start` tidak mendukung export. Penggunaan
port alternatif, contoh `npm run dev -- --port 3001`, juga mengharuskan URL manual
yang sesuai; metadata DOMAIN tidak otomatis mengikuti port baru.

### Preview ringan hasil build

`serve` tersedia sebagai dev dependency. Build sekali untuk URL root lokal:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = ""
$env:DOMAIN = "http://localhost:3000"
npm run build
npm run preview
```

Buka `http://localhost:3000/en/` atau `/id/`. Preview memakai port 3000 pada
loopback; hentikan server development sebelumnya agar port tidak bentrok.
Sesudah perubahan source, build ulang. Jika `out/` sudah merupakan build lokal
terbaru, cukup `npm run preview`. Jangan memakai build berprefix `/portfolio-v1`
untuk command preview root ini. Tidak memakai fallback SPA agar URL tak dikenal
tetap menghasilkan 404.

Command preview di panduan tidak memberikan izin agent untuk menjalankan server.
Instruksi repository melarang validasi browser otomatis dan server lokal agent.

## 4. Pemeriksaan kode

Jalankan di root repo, satu perintah per langkah:

```sh
npm run lint
npx --no-install tsc --noEmit
npm run build
npm run check:export
git diff --check
```

- Lint: aturan ESLint aplikasi.
- TypeScript: kontrak dan penggunaan tipe, tanpa emit source JavaScript.
- Build: compile, lint/tipe Next.js, generate halaman statis, finalisasi bahasa HTML.
  Integrasi arsip tidak dijalankan oleh routing aktif.
- Export check: URL/file output, canonical, locale, halaman masuk/404, tanpa API.
  Gunakan environment yang sama dengan build.
- Diff check: whitespace; bukan pemeriksaan desain/isi personal.
- Tidak ada `npm test`; jangan mengklaim test suite lulus.

Untuk file tertentu:

```sh
npx --no-install prettier --check "contents/projects.ts" "messages/en.json" "messages/id.json"
```

Ganti `--check` dengan `--write` hanya untuk file yang memang ingin diformat.
Untuk Windows dengan aturan CRLF lokal, `git -c core.safecrlf=false diff --check`
dapat dipakai per command tanpa mengubah Git config. Tidak perlu memformat seluruh
repo ketika edit hanya satu file.

## 5. Pemeriksaan manual oleh pemilik

Daftar ini adalah pekerjaan yang dilakukan saat preview, bukan hasil otomatis.

1. **Halaman utama:** Home/About/Achievements/Projects/Contact tampil en/id.
2. **Navigasi:** desktop dan menu mobile, active state, link kembali, locale tetap.
3. **Theme:** light/dark, ikon, teks, border, background logo.
4. **Layout:** lebar 320/375, 768, 1024, 1280px; tidak ada horizontal overflow.
5. **About:** tiga karier, logo, tanggal/durasi, show/hide, keyboard dan motion.
6. **Pendidikan:** PENS, 2022–2026, GPA/IPK, logo, tautan.
7. **Proyek:** lima kartu, urutan/unggulan, cover, dua bahasa detail, stack/link
   opsional, slug tak dikenal menghasilkan not found.
8. **Achievements:** enam kartu, tiap tag filter termasuk research yang berada di
   beberapa entri, search, reset, hasil kosong, type+tag gabungan.
9. **Modal:** buka Enter/Space/klik, close/Escape/backdrop, fokus kembali, Tab
   tidak masuk halaman belakang, scroll body terkunci lalu pulih, mobile metadata.
10. **Aset:** scan utuh, URL nama berisi `#`/spasi, fallback gambar tidak tersedia.
11. **Kontak:** mailto, GitHub, LinkedIn menuju profil yang benar.
12. **Metadata:** domain/canonical per locale/path sesudah production origin diisi.

Contoh URL: `/id/achievements?category=research`,
`/en/achievements?type=certification&category=language`,
`/en/projects/slug-yang-tidak-ada`. Filter slug contoh terakhir memang dimaksudkan
untuk memeriksa not found, bukan proyek yang harus ditambahkan.

## 6. Troubleshooting terarah

| Gejala                          | Periksa                         | Perbaikan                                                                           |
| ------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------- |
| Home error setelah tambah skill | Nama di PROFILE dan STACKS      | Samakan key exact, tambah mapping ikon dahulu                                       |
| Ikon baru tidak diekspor        | Import `react-icons`            | Pilih nama ikon dari versi terpasang; jangan install library lain otomatis          |
| Warna baru tidak muncul         | Class dinamis/scan Tailwind     | String class utuh di folder yang dipindai; restart build manual bila config berubah |
| Gambar tidak tampil             | URL/case/file                   | Tanpa prefix public, file nyata, encode `#`/spasi per segmen                        |
| Sertifikat preview kosong       | File/format, onError fallback   | Pastikan raster valid, bukan PDF dengan ekstensi JPG                                |
| Tag baru berupa slug mentah     | Messages types/categories       | Tambah label en/id dengan key identik                                               |
| Filter tag tidak menemukan item | `categories` array, `is_show`   | Gunakan key tag yang sama, aktifkan entri nyata                                     |
| Kata pencarian tidak cocok      | Locale, nama/penerbit/deskripsi | Cari copy bahasa aktif; search bukan lintas semua terjemahan                        |
| Study case 404                  | Data aktif, slug, Markdown      | Dua file locale bernama sama, isi tidak kosong, format slug valid                   |
| Tanggal `Invalid time value`    | Presisi field                   | Karier YYYY-MM; achievement YYYY-MM-DD; jangan string bulan bebas                   |
| Career durasi tak muncul        | Kedua tanggal                   | Isi keduanya atau period; jangan memalsukan tanggal                                 |
| Key terjemahan/error ICU        | JSON/key/placeholder            | Pastikan sintaks dan `{name}`/`{count}` utuh di kedua locale                        |
| UI lama tidak ikut berubah      | Komponen diimpor                | Telusuri page → module → component; jangan mengedit file alternatif saja            |
| PDF tidak muncul dalam modal    | `image`                         | Gunakan preview raster, rancang tautan PDF terpisah                                 |
| Build gagal fetch font          | Next/font/jaringan              | Periksa akses jaringan font; jangan ubah konten untuk menutupi error jaringan       |

### Pesan environment yang sudah dikenal

- **Browserslist/caniuse-lite outdated:** peringatan basis data browser; bukan
  kegagalan konten. Pembaruan dependency adalah pekerjaan tersendiri, jangan
  regenerate lockfile hanya untuk menghilangkan pesan saat edit copy.
- **WakaTime HTTP 401:** pesan build sebelum pengarsipan tahap 6; integrasi lama
  tidak lagi dijalankan pada build statis aktif.
- **Chat `NEXTAUTH_SECRET` / `NO_SECRET`:** masalah konfigurasi auth lama;
  bukan kebutuhan Projects/Achievements lokal. Jangan menaruh credential palsu.
- **Gambar legacy yang dihapus:** referensi masih ada pada komponen Dashboard/
  Contents/alternatif MobileHeader; lihat [daftar aset](ASSET_GUIDE.md#7-pemeriksaan-aset-setelah-edit).

Jika pemeriksaan gagal, catat command, pesan ringkas, file terkait. Jangan
mengklaim “lulus” hanya karena server tampak berjalan. Jangan memperluas edit ke
integrasi lama tanpa kebutuhan yang disepakati.

## 7. Batas pengelolaan dan publikasi repo

- Route/API lama sudah diarsipkan pada private folder `app/_legacy/`; URL-nya
  tidak tersedia di output Pages. Menambah menu tidak mengaktifkan source arsip.
- Konten inti berasal dari file publik lokal, bukan DB. Environment tidak
  menambah kartu proyek atau pencapaian.
- README memakai identitas pemilik; catatan sumber UI tetap ada pada Credits.
  Lisensi MIT disebut README asal, tetapi checkout belum memiliki file LICENSE;
  jangan menambahkan teks lisensi atas nama pihak lain tanpa sumber yang benar.
- Tahap 6 mencakup build statis dan pemeriksaan artefak; visual/runtime hosting
  tetap diverifikasi manual oleh pemilik sesudah deployment.

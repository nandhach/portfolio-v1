# Panduan pengelolaan konten

Panduan untuk portfolio Muhammad Nandha Chrismawan. Semua path relatif terhadap
root repository; alias `@/` menunjuk root, bukan `src/`. Contoh bertanda contoh
harus diganti fakta nyata sebelum diaktifkan.

Panduan terkait: [visual micro](VISUAL_CUSTOMIZATION.md),
[aset](ASSET_GUIDE.md), [setup dan diagnosis](SETUP.md).

## Daftar isi

1. [Peta edit cepat](#1-peta-edit-cepat)
2. [Alur edit yang disarankan](#2-alur-edit-yang-disarankan)
3. [Identitas, headline, metadata, kontak](#3-identitas-headline-metadata-kontak)
4. [Home dan skill](#4-home-dan-skill)
5. [About dan pengalaman](#5-about-dan-pengalaman)
6. [Pendidikan](#6-pendidikan)
7. [Projects dan studi kasus](#7-projects-dan-studi-kasus)
8. [Achievements dan sertifikat](#8-achievements-dan-sertifikat)
9. [Terjemahan, menu, tema](#9-terjemahan-menu-tema)
10. [Resep perubahan dan pemeriksaan](#10-resep-perubahan-dan-pemeriksaan)

## 1. Peta edit cepat

| Ingin mengubah                       | File utama                                                                 | Bagian                                   |
| ------------------------------------ | -------------------------------------------------------------------------- | ---------------------------------------- |
| Nama, nama singkat, headline sidebar | `common/constants/profile.ts`                                              | `PROFILE`                                |
| Pengantar Home                       | `messages/en.json`, `messages/id.json`                                     | `HomePage`                               |
| Cerita About                         | Dua file messages yang sama                                                | `AboutPage.resume`                       |
| Daftar skill Home                    | `common/constants/profile.ts`                                              | `skills`                                 |
| Ikon/warna teknologi                 | `common/constants/stacks.tsx`                                              | `STACKS`                                 |
| Pengalaman                           | `common/constants/carreers.ts`                                             | `CAREERS` (ejaan file memang `carreers`) |
| Pendidikan/GPA                       | `common/constants/education.ts`                                            | `EDUCATION`                              |
| Kartu proyek                         | `contents/projects.ts`                                                     | `projects`                               |
| Detail proyek Inggris                | `contents/projects/en/<slug>.md`                                           | Markdown                                 |
| Detail proyek Indonesia              | `contents/projects/id/<slug>.md`                                           | Markdown                                 |
| Pencapaian/sertifikat                | `contents/achievements.ts`                                                 | `achievements`                           |
| Contoh achievement nonaktif          | `contents/examples/achievement.ts`                                         | Tidak diimpor aplikasi                   |
| Menu aktif                           | `common/constants/menu.tsx`                                                | `MENU_ITEMS`, `isShow`                   |
| Teks menu                            | Dua file messages                                                          | `Navigation`                             |
| Email/GitHub/LinkedIn                | `common/constants/profile.ts`                                              | Alamat/URL                               |
| Tampilan Contact                     | `common/constants/socialMedia.tsx`                                         | Data kartu; copy pada `ContactPage`      |
| Judul/deskripsi SEO                  | `common/constants/metadata.ts`, `app/[locale]/layout.tsx`, tiap `page.tsx` | Metadata                                 |
| Domain canonical                     | `.env.local`                                                               | `DOMAIN`                                 |
| Avatar                               | `public/images/avatar.svg` atau `PROFILE.avatar`                           | URL `/images/...`                        |
| Ikon tab browser                     | `app/icon.svg`, `app/[locale]/layout.tsx`                                  | Metadata icons                           |
| Warna global                         | `tailwind.config.ts`                                                       | `theme.extend.colors`                    |
| Bentuk/jarak kartu                   | `modules/<fitur>/components/`                                              | `className` pada elemen                  |

Folder `.agent/` adalah catatan kerja internal; bukan sumber konten runtime.
Tidak perlu direktori career-workspace untuk mengedit atau membangun aplikasi.

## 2. Alur edit yang disarankan

1. Tentukan jenis edit: data, terjemahan, aset, atau desain.
2. Buka file pada tabel di atas. Jangan mengedit komponen bernama mirip sebelum
   memastikan komponen itu diimpor halaman aktif.
3. Ubah satu kelompok hal terlebih dahulu, misalnya satu pengalaman.
4. Lengkapi `en` dan `id` dengan makna setara. Nama produk/teknologi boleh sama.
5. Bila menambah aset, letakkan di `public/`, lalu tulis URL tanpa kata `public`.
6. Simpan file. Jalankan pemeriksaan kode pada [SETUP](SETUP.md#4-pemeriksaan-kode).
7. Preview sendiri pada kedua bahasa, tema, layar kecil/besar. Ikuti daftar manual
   pada [SETUP](SETUP.md#5-pemeriksaan-manual-oleh-pemilik).

### Bahasa data

- `.ts`: objek JavaScript dengan kontrak TypeScript; string diapit kutip,
  array diapit `[]`, objek diapit `{}`. Komentar diperbolehkan.
- `.tsx`: seperti `.ts`, bisa menyimpan JSX untuk ikon/komponen.
- `.json`: kutip ganda, tanpa komentar, tanpa koma setelah properti terakhir.
- `.md`: teks Markdown; bukan komponen React/JSX executable.

Jangan mengganti `slug`/`id` sekadar untuk mengganti judul: keduanya identitas
stabil. Judul dapat berubah tanpa memutus URL studi kasus.

## 3. Identitas, headline, metadata, kontak

### 3.1 `PROFILE`

| Field                | Efek                                               | Catatan                                       |
| -------------------- | -------------------------------------------------- | --------------------------------------------- |
| `name`               | Nama lengkap sidebar, alt avatar, referensi profil | Gunakan nama publik                           |
| `sName`              | Nama pendek untuk beberapa metadata                | Saat panduan ditulis: `nandhach`              |
| `initials`           | Data inisial                                       | Teks di SVG avatar tidak otomatis berubah     |
| `headline`           | Headline sidebar                                   | Saat ini `Software Developer`                 |
| `avatar`             | URL gambar sidebar                                 | `/images/avatar.svg` sebagai fallback         |
| `email`              | Tautan email                                       | Alamat saja, tanpa `mailto:` pada data profil |
| `github`, `linkedin` | Tautan profil                                      | URL lengkap HTTP(S)                           |
| `skills`             | Kurasi teknologi Home                              | Urutan mengikuti array                        |

### 3.2 Mengganti headline secara konsisten

Headline belum seluruhnya diturunkan dari satu field. Setelah mengganti
`PROFILE.headline`, periksa juga:

1. `messages/en.json` dan `messages/id.json`: `HomePage.location_type`, paragraf
   Home/About, `Profile.description`, copy Contact yang relevan.
2. `common/constants/metadata.ts`: `keyword`.
3. `app/[locale]/layout.tsx`: `title`, `openGraph.title` yang masih berisi teks
   headline eksplisit.
4. Metadata halaman dengan kata posisi lama, README, dan footer jika menyebutnya.

Cari frasa yang sedang diganti di editor; jangan melakukan penggantian global
tanpa meninjau konteks historis seperti posisi magang `Frontend Developer`.

### 3.3 Mengganti email atau sosial

Edit `PROFILE`, kemudian periksa sidebar dan Contact. Data kartu Contact ada di
`common/constants/socialMedia.tsx`; copy action ada di `ContactPage.social_media`.
Alamat yang tampak pada kartu berasal dari `href` dan dihilangkan prefix-nya.
Contact aktif memakai tautan langsung, bukan `ContactForm`/API email lama.
Mengganti `PROFILE.email` tidak otomatis mengganti penerima pada endpoint lama.

### 3.4 Metadata dan domain

- `DOMAIN` harus origin, misalnya `https://portfolio.example.org` untuk contoh;
  ganti hanya jika domain benar-benar dimiliki dan dikonfirmasi.
- Jangan menambahkan `/en` atau `/projects` pada domain: helper mengambil origin.
- Tanpa domain valid, metadata memakai `http://localhost:3000`.
- Perubahan environment perlu proses/build baru. Mengubah teks Markdown proyek
  tidak mengubah metadata global secara otomatis.
- Metadata per proyek ada di `app/[locale]/projects/[slug]/page.tsx`.

## 4. Home dan skill

### 4.1 Teks Home

`modules/home/components/Introduction.tsx` membaca `HomePage` pada messages:

| Key                                 | Tampilan               |
| ----------------------------------- | ---------------------- |
| `intro`                             | Judul sapaan           |
| `location`                          | Bullet lokasi          |
| `location_type`                     | Bullet headline        |
| `resume.paragraph_1`, `paragraph_2` | Dua paragraf pengantar |
| `skills.title`, `skills.sub_title`  | Heading skill          |

Menambah `paragraph_3` di JSON saja belum merender paragraf baru. Tambahkan juga
`{ index: 3 }` ke `paragraphData` dalam `Introduction.tsx`. Untuk Story About,
periksa daftar paragraf pada `modules/about/components/Story.tsx`.

### 4.2 Menambah skill yang sudah punya ikon

Contoh `Docker`, bila memang ingin ditampilkan sebagai skill pribadi:

1. Cari key `Docker` dalam `common/constants/stacks.tsx`.
2. Tambahkan `"Docker"` ke `PROFILE.skills`, pada posisi yang diinginkan.
3. Simpan. Ikon/background diambil otomatis dari `STACKS["Docker"]`.
4. Cek layout ketika jumlah ikon bertambah.

Menghapus skill dari Home cukup menghapus namanya dari `PROFILE.skills`. Jangan
menghapus mapping `STACKS` jika proyek lain masih memakai ikon itu.
Field `isActive` dalam mapping lama bukan pengendali daftar Home saat ini.

### 4.3 Menambah skill baru beserta ikon

Contoh Flutter berikut hanya resep, bukan penambahan otomatis:

```tsx
// Tambahkan ke import react-icons/si yang sudah ada.
import { SiFlutter } from "react-icons/si";

// Tambahkan properti berikut DI DALAM objek STACKS.
Flutter: {
  icon: <SiFlutter size={iconSize} />,
  background: "bg-sky-500",
  color: "text-sky-500",
},
```

Lalu tambahkan `"Flutter"` ke `PROFILE.skills`. Jangan membuat deklarasi `STACKS`
kedua atau import `SiFlutter` dua kali. Pilih ikon yang benar-benar diekspor versi
`react-icons` terpasang; TypeScript akan mendeteksi nama ekspor yang salah.

**Nama harus identik, termasuk kapitalisasi/titik/spasi**:
`React.js`, `Next.js`, `TailwindCSS`, `Github`, `Npm`, `bun` adalah contoh key
yang digunakan saat ini. `GitHub` dan `Github` berbeda.

`SkillList.tsx` mengakses `STACKS[name].icon` secara langsung. Key yang tidak ada
dapat menimbulkan error runtime meski indeks string lolos pemeriksaan tipe.
Daftarkan mapping terlebih dahulu. Pada ProjectCard, stack tak dikenal punya
fallback teks; perilakunya berbeda dari Home.

## 5. About dan pengalaman

File: `common/constants/carreers.ts`. Urutan kartu mengikuti urutan `CAREERS`,
bukan otomatis tanggal terbaru. Kontrak saat ini:

| Field                    | Wajib             | Isi                                                  |
| ------------------------ | ----------------- | ---------------------------------------------------- |
| `id`                     | Ya                | String stabil unik, contoh `piramida-internship`     |
| `position`, `company`    | Ya                | Posisi dan instansi                                  |
| `logo`                   | Tidak             | URL aset; tanpa logo memakai ikon bangunan           |
| `link`                   | Tidak             | URL HTTP(S); tidak valid dirender sebagai teks biasa |
| `location`               | Tidak             | Kota/negara publik                                   |
| `start_date`, `end_date` | Tidak             | `YYYY-MM`; isi keduanya jika periode pasti           |
| `translations.en`, `.id` | Ya                | Copy lokal seperti di bawah                          |
| `type`                   | Ya, per bahasa    | Internship/Magang, Freelance, dll.                   |
| `location_type`          | Ya, per bahasa    | Remote/Jarak jauh, On-site/Di kantor                 |
| `period`                 | Tidak, per bahasa | Keterangan pengganti tanggal                         |
| `responsibilities`       | Ya, array         | Pekerjaan pribadi                                    |
| `lessons_learned`        | Ya, array         | Pembelajaran yang relevan                            |
| `impact`                 | Ya, array         | Hasil dengan batas kolaborasi/status                 |

Array detail boleh `[]`; section kosong tidak ditampilkan. Tombol detail hanya
muncul jika ada isi setidaknya pada satu array.

### Contoh struktur pengalaman baru

Contoh sintaks; jangan aktifkan nama/tanggal/hasil contoh sebagai pengalaman nyata:

```ts
{
  id: "pengalaman-baru",
  position: "Frontend Developer",
  company: "Ganti dengan instansi terkonfirmasi",
  // logo: "/images/careers/logo-yang-sudah-ada.png",
  // link: "URL resmi terkonfirmasi",
  location: "Ganti dengan lokasi publik",
  translations: {
    en: {
      type: "Freelance",
      location_type: "Remote",
      period: "Replace with a confirmed period",
      responsibilities: ["Replace with your actual contribution."],
      lessons_learned: ["Replace with a concrete learning outcome."],
      impact: ["Replace with a supported result and its limitations."],
    },
    id: {
      type: "Freelance",
      location_type: "Jarak jauh",
      period: "Ganti dengan periode terkonfirmasi",
      responsibilities: ["Ganti dengan kontribusi pribadi nyata."],
      lessons_learned: ["Ganti dengan pembelajaran konkret."],
      impact: ["Ganti dengan hasil berbukti beserta batasnya."],
    },
  },
},
```

Salin objek ke dalam array `CAREERS`, bukan sesudah `];`. Tidak ada `is_show`
pada kontrak pengalaman: untuk draft, simpan terpisah dari array aktif. Jangan
menggunakan field achievement `is_show` atau menu `isShow` di sini.

### Tanggal dan durasi

- `2025-01` hingga `2025-06` tampil sebagai Jan–Jun dengan durasi **6 bulan**.
- Durasi menghitung bulan awal/akhir inklusif karena presisi data hanya bulan.
- Jangan memasukkan `YYYY-MM-DD` ke field karier: formatter menambahkan `-01`.
- Bila hanya satu tanggal terisi, komponen tidak menampilkan rentang/durasi;
  gunakan `period` yang benar sebagai pengganti.
- Belum ada mode “Present” otomatis pada desain data ini. Jangan membiarkan
  `end_date` kosong dengan harapan tanggal hari ini dihitung otomatis.
- Spectra memakai edisi event 2025/2026; itu bukan tanggal kontrak freelance.

### Merumuskan tiga bagian detail

**Responsibilities:** tindakan yang Anda kerjakan, teknologi/area, batas tim.
**What I Learned:** pemahaman yang berkembang dari pekerjaan itu; hindari klaim
“mastered” tanpa dasar. **Impact:** hasil nyata, penerima manfaat, status lokal/
internal/deployed, angka hanya jika terkonfirmasi. Hindari menyatakan hasil
platform sebagai pekerjaan frontend pribadi seluruhnya.

## 6. Pendidikan

File `common/constants/education.ts`, array `EDUCATION`:

| Field                      | Format/efek                                                       |
| -------------------------- | ----------------------------------------------------------------- |
| `id`                       | Identitas string unik                                             |
| `school`                   | Nama institusi publik                                             |
| `logo`, `link`, `location` | Opsional; fallback ikon/teks jika tidak ada                       |
| `start_year`               | Number opsional, contoh `2022`                                    |
| `end_year`                 | Number wajib, contoh `2026`                                       |
| `graduation_date`          | String wajib `YYYY-MM-DD`; disimpan meski kartu menampilkan tahun |
| `GPA`                      | String opsional, contoh `3.43 / 4.00`; key memakai huruf besar    |
| `translations`             | `en`/`id` masing-masing `degree`, `major`                         |

Ganti GPA pada data, bukan teks label. Label `GPA`/`IPK` berasal dari
`AboutPage.education.gpa` pada messages. Hapus properti `GPA` jika tidak ingin
menampilkannya; jangan isi `"-"`. Tahun tidak diberi kutip karena kontraknya number.
Menambah pendidikan: salin objek, ganti semua field, beri ID unik, letakkan sesuai
urutan yang diinginkan. Tidak ada filter visibilitas otomatis pada pendidikan.

## 7. Projects dan studi kasus

### 7.1 Alur data

`contents/projects.ts` → `services/projects.ts` → halaman/API → ProjectCard.
Detail: slug aktif ditemukan → `loadProjectContent(slug, locale)` membaca Markdown
→ ProjectDetail. Slug yang tidak tersedia ditangani sebagai `404`.

| Field                      | Wajib | Aturan                                                    |
| -------------------------- | ----- | --------------------------------------------------------- |
| `id`                       | Ya    | Number unik                                               |
| `slug`                     | Ya    | Huruf kecil/angka, kata dipisah `-`; identik kedua bahasa |
| `order`                    | Ya    | Number; lebih kecil tampil dahulu; tie diurutkan slug     |
| `is_show`                  | Ya    | `true` aktif; `false` hilang dari listing dan lookup slug |
| `is_featured`              | Ya    | Badge unggulan; tidak otomatis mengubah `order`           |
| `stacks`                   | Ya    | Array nama mapping STACKS; `[]` diperbolehkan             |
| `image`                    | Tidak | URL cover yang tersedia                                   |
| `link_demo`, `link_github` | Tidak | HTTP(S), nyata dan boleh dipublikasikan                   |
| `translations.en`, `.id`   | Ya    | `title` dan `description`                                 |

Saat ini urutan FMS, Spectra, Ride-hailing, NKRI, Chat App. FMS/Spectra unggulan.
Cover grafis netral hanya ilustrasi, bukan screenshot atau bukti deployment.

### 7.2 Menambah proyek dari awal

1. Pilih slug stabil, misalnya `proyek-baru`; jangan pakai slash, spasi, underscore,
   huruf kapital, atau `..`.
2. Tambahkan objek berikut **ke dalam** array `projects`:

   ```ts
   {
     id: 6,
     slug: "proyek-baru",
     order: 6,
     is_show: false, // Aktifkan hanya setelah isi nyata lengkap.
     is_featured: false,
     stacks: ["React.js", "TypeScript"],
     translations: {
       en: {
         title: "Replace with the confirmed title",
         description: "Replace with your role, result, and delivery status.",
       },
       id: {
         title: "Ganti dengan judul terkonfirmasi",
         description: "Ganti dengan peran, hasil, dan status proyek.",
       },
     },
   },
   ```

3. Buat `contents/projects/en/proyek-baru.md` dan
   `contents/projects/id/proyek-baru.md`. Keduanya harus berisi teks nyata.
4. Bila ada cover, simpan di `public/images/projects/`, isi `image` dengan
   `/images/projects/<nama>`. Jangan mengarang demo/repository; field boleh absen.
5. Tambahkan mapping ikon bila ingin ikon stack baru, atau biarkan fallback teks.
6. Periksa `id`, `slug`, `order` agar tidak bentrok. `id: 6` hanya aman jika belum
   dipakai saat Anda mengedit.
7. Ubah `is_show: true` setelah kedua studi kasus siap. Periksa en/id dan `404`.

### 7.3 Struktur Markdown studi kasus

Tidak perlu frontmatter YAML; judul kartu sudah menjadi judul halaman. Mulai
dengan `##` untuk subbagian. File dibaca sebagai Markdown biasa melalui
`react-markdown`, bukan MDX executable; jangan memasukkan import/JSX React.

```md
## Context

Explain the actual problem and project context.

## My role

Explain personal responsibilities and the team's separate responsibilities.

## Implementation

- Describe a concrete engineering decision.
- Explain why it mattered and its trade-offs.

## Outcome and limitations

State whether this was local, an internal prototype, an academic demo, or deployed.

## What I learned

Describe learning grounded in the work.
```

Versi Indonesia memakai struktur makna sama: Konteks, Peran saya, Implementasi,
Hasil dan keterbatasan, Pembelajaran. Jangan menambahkan angka di satu bahasa
yang tidak ada di bahasa lain.

Sintaks yang didukung: paragraf, `##`/`###`, bullet, daftar angka, `**tebal**`,
inline code, fenced code block, blockquote, tautan, tabel GFM. Teks mentah HTML
tidak dipakai sebagai cara merender komponen khusus. Styling tiap elemen
ditentukan `common/components/elements/MDXComponent.tsx`.

Contoh gambar cover netral yang tersedia: `![Ilustrasi FMS](/images/projects/fms.svg)`.
Gambar isi Markdown tidak melalui wrapper Image kartu; uji ukuran manual.
Jangan menambahkan screenshot internal FMS/NKRI yang dibatasi publikasinya.

### 7.4 Edit, hide, dan rename

- **Edit judul:** hanya `translations`; URL dan file tetap.
- **Edit detail:** kedua Markdown; ringkasan kartu tidak ikut berubah otomatis.
- **Ganti cover:** `image`; nama file dan kapitalisasi harus tepat.
- **Hide proyek:** `is_show: false`; URL detail lookup menjadi tidak tersedia.
- **Rename slug:** ubah metadata dan dua nama file; URL lama tidak punya redirect
  otomatis. Pertimbangkan mempertahankan slug agar tautan lama tidak putus.
- **Hapus link:** hapus field atau gunakan `null`; jangan `"#"`, `"coming soon"`,
  atau URL contoh. Helper menyaring URL yang bukan HTTP(S).

## 8. Achievements dan sertifikat

### 8.1 Kontrak lengkap

| Field             | Wajib | Aturan                                                            |
| ----------------- | ----- | ----------------------------------------------------------------- |
| `id`              | Ya    | Number unik; enam entri awal memakai 1–6                          |
| `slug`            | Ya    | String stabil unik; identitas item/modal                          |
| `type`            | Ya    | Satu jenis utama, key machine-readable                            |
| `categories`      | Ya    | Array tag; bukan string tunggal `category`                        |
| `issue_date`      | Ya    | Tanggal nyata `YYYY-MM-DD`                                        |
| `is_show`         | Ya    | Boolean, `false` untuk draft                                      |
| `translations`    | Ya    | `en`/`id`: `name`, `issuing_organization`, opsional `description` |
| `image`           | Tidak | URL gambar sertifikat                                             |
| `credential_id`   | Tidak | Nomor publik terkonfirmasi, bukan NIM/nomor pribadi sembarang     |
| `url_credential`  | Tidak | URL verifikasi nyata HTTP(S)                                      |
| `expiration_date` | Tidak | Disimpan kontrak; belum ditampilkan oleh kartu/modal saat ini     |

Sertifikat gambar memuat isi dokumen apa adanya sesuai keputusan pemilik. Field
ID/URL opsional tidak disimpulkan otomatis dari QR/gambar. Menambahkan field baru
ke data tidak otomatis menambah tampilan UI.

### 8.2 Jenis dan tag

Jenis tersedia: `certification`, `internship`, `intellectual-property`, `exhibition`.
Tag tersedia: `software-quality`, `internship`, `toefl`, `language`, `research`,
`software-development`, `exhibition`, `symposium`.

`type` dan tag boleh tumpang tindih makna; keduanya tetap kontrak terpisah.
PEPT memakai type certification, tag toefl/language. HKI type intellectual-property,
tag research/software-development. Label manusia berasal dari
`AchievementsPage.types.<key>` dan `AchievementsPage.categories.<key>`.

### 8.3 Menambah achievement

1. Buka `contents/examples/achievement.ts`. Contoh tidak diimpor aplikasi.
2. Salin objek ke array `achievements` di `contents/achievements.ts`.
3. Ganti seluruh nilai contoh. Pilih ID/slug yang belum dipakai.
4. Isi tanggal lengkap dari sumber yang benar. Bila baru mengetahui bulan,
   konfirmasi hari atau perluas kontrak/formatter; jangan otomatis memakai tanggal 1.
5. Isi kedua bahasa. Ringkas konteks, peran, dan makna pengakuan secara faktual.
6. Tambahkan gambar dengan helper `certificateImage("nama-file.jpg")` di file data.
   Helper meng-encode nama file, termasuk `#` dan spasi.
7. Jika memakai type/tag baru, tambah label pada kedua file messages:

   ```json
   "types": {
     "certification": "Certification",
     "jenis-baru": "Replace with its English label"
   }
   ```

   Ini potongan ilustrasi, bukan pengganti seluruh objek types. Pertahankan key
   lain. Buat label Indonesia pada file `id.json` dengan key sama.

8. Set `is_show: true` hanya ketika data dan izin publikasi siap.
9. Periksa kartu, dialog, filter type, tiap tag, search, dan hasil kosong.

### 8.4 Cara filter bekerja

- Semua opsi berasal dari item aktif; tidak perlu menulis daftar opsi manual.
- `category=research` cocok dengan **setiap** item yang array `categories`-nya
  mengandung research, termasuk bila research bukan tag pertama.
- Query `category` memilih satu tag per permintaan; “multi-tag” berarti item bisa
  punya banyak tag, bukan multiselect beberapa filter sekaligus.
- Filter type + category + search dikombinasikan (semuanya harus cocok).
- Search tidak peka kapital, mencakup nama, penerbit, deskripsi lokal.
- Mengganti locale berarti mencari pada copy locale itu; kata Inggris mungkin
  tidak cocok dengan deskripsi Indonesia.
- Urutan tanggal menurun, lalu slug. Bukan urutan array input.
- GET form menggunakan tombol Apply/Terapkan; reset membersihkan query.
- Filter tidak dikenal ditangani sebagai pilihan tidak dikenal/hasil kosong.

Contoh URL manual: `/en/achievements?category=research`,
`/id/achievements?type=certification&category=language`.
API: `/api/achievements?locale=id&category=research`. API kategori mengembalikan
key, bukan label terjemahan. Schema respons memakai `categories`, bukan `category`.

### 8.5 Mengubah tampilan sertifikat

Thumbnail dan modal memakai image sama. Thumbnail `object-contain` agar dokumen
utuh; modal juga contain. Gambar absen/gagal memakai fallback. Deskripsi panjang
ada pada modal, bukan kartu. ID/link hanya tampil jika tersedia. Tidak ada tombol
unduh PDF otomatis. Lihat [panduan aset](ASSET_GUIDE.md#6-cv-dan-pdf-opsional).

## 9. Terjemahan, menu, tema

### Terjemahan

1. Cari namespace komponen (`useTranslations("...")`).
2. Ubah key itu pada kedua messages. Jangan menerjemahkan nama key.
3. Pertahankan placeholder: `{name}`, `{count}` dan format plural ICU.
4. Jika menambah key, panggil dari komponen. Menambah JSON saja tidak menambah UI.
5. Jangan menghapus key lama sebelum mengecek pemakai route tersembunyi.

Contoh ICU durasi en: `{count, plural, one {# month} other {# months}}`;
id: `{count} bulan`. Kurung yang hilang dapat menyebabkan error format pesan.
Key kategori/type punya fallback ke teks key yang belum dikenal; tambahkan label
bilingual agar pengunjung tidak melihat slug mesin.

### Navigasi

`MENU_ITEMS.isShow` mengatur menu, bukan keberadaan route. Urutan mengikuti
konstanta/pengolahan menu aktif. Teks label dicari di `Navigation`. Untuk tautan
internal gunakan `Link` dari `@/i18n/navigation` agar locale dipertahankan.
Jangan mengaktifkan menu lama hanya untuk menghapus pesan build integrasinya.

### Locale dan tema

`i18n/routing.ts`: en/id, default en, prefix selalu aktif. `middleware.ts` menangani
routing. `common/stores/theme.tsx` dan `ThemeToggle.tsx` menangani theme melalui
`next-themes`; Tailwind memakai dark class. Mengubah default locale adalah edit
routing, bukan konten, dan memerlukan pemeriksaan metadata/navigasi lebih luas.

## 10. Resep perubahan dan pemeriksaan

### Resep A — hanya mengubah deskripsi proyek

Edit dua `translations.description` → edit kedua studi kasus jika narasi berubah
→ format file → lint/tipe/build → cek kartu tidak memotong batas peran/status.

### Resep B — mengganti sertifikat dengan scan lebih tajam

Tambahkan file baru → ubah `certificateImage(...)` → cek preview dan modal →
pastikan tanggal/metadata tetap tepat. Mengganti gambar tidak mengganti nama,
tanggal, atau kategori otomatis. Jangan menghapus file lama sebelum cek referensi.

### Resep C — menghapus sebuah badge Home

Hapus nama dari `PROFILE.skills` → jangan ubah STACKS proyek → cek jumlah kolom
dan tooltip. Bila hanya ingin merapikan jarak, edit `SkillList.tsx`, bukan data.

### Resep D — menyembunyikan pencapaian sementara

Set `is_show: false`. Kartu dan opsi tag yang hanya dipakai entri itu hilang.
File sertifikat tetap publik jika masih berada di `public/`; menyembunyikan kartu
bukan proteksi akses file. Untuk menarik aset publik, tangani file dan cache pada
hosting secara terpisah setelah memeriksa kebutuhan pemilik.

### Sebelum selesai mengedit

- Kedua bahasa setara, tanpa nama template atau data contoh aktif.
- ID/slug unik, tanggal sesuai sumber, status proyek tidak berubah menjadi klaim
  deployed/production tanpa fakta.
- Aset tersedia, case-sensitive, URL tidak palsu.
- Format/tipe/lint/build lulus; hasil manual dicatat sendiri, bukan diasumsikan.
- README personal adalah ringkasan repo; tidak perlu memasukkan seluruh catatan
  sumber personal atau credential ke dokumentasi publik.

# Panduan visual sampai detail micro

Panduan ini menjelaskan **di mana** dan **bagaimana** mengubah tampilan. Nilai
“saat ini” merujuk source pada penyelesaian tahap 5; gunakan pencarian teks di
editor karena nomor baris dapat berubah. Contoh class adalah resep pilihan,
bukan perubahan yang sudah diterapkan.

Terkait: [konten](CONTENT_MANAGEMENT.md), [aset](ASSET_GUIDE.md),
[verifikasi manual](SETUP.md#5-pemeriksaan-manual-oleh-pemilik).

## Daftar isi

1. [Cara membaca Tailwind](#1-cara-membaca-tailwind)
2. [Warna, font, layout global](#2-warna-font-layout-global)
3. [Sidebar dan mobile](#3-sidebar-dan-mobile)
4. [Home dan skill kaca](#4-home-dan-skill-kaca)
5. [CareerCard](#5-careercard)
6. [EducationCard](#6-educationcard)
7. [Projects dan Markdown](#7-projects-dan-markdown)
8. [AchievementCard dan dialog](#8-achievementcard-dan-dialog)
9. [Contact, shared card, gambar](#9-contact-shared-card-gambar)
10. [Resep micro dan pemeriksaan](#10-resep-micro-dan-pemeriksaan)

## 1. Cara membaca Tailwind

### 1.1 Skala dan satuan

Dengan root font default 16px, Tailwind memakai skala umum berikut. Jika root font
berubah, nilai rem mengikuti perubahan; arbitrary px tetap piksel.

| Class                                     | Nilai                   | Contoh              |
| ----------------------------------------- | ----------------------- | ------------------- |
| `p-2`, `gap-2`                            | 0.5rem ≈ 8px            | Padding/jarak kecil |
| `p-3`, `gap-3`                            | 0.75rem ≈ 12px          | Jarak kompak        |
| `p-4`, `gap-4`                            | 1rem ≈ 16px             | Jarak standar       |
| `p-5`, `gap-5`                            | 1.25rem ≈ 20px          | Padding kartu kecil |
| `p-6`, `gap-6`                            | 1.5rem ≈ 24px           | Padding kartu lebar |
| `p-8`                                     | 2rem ≈ 32px             | Padding halaman     |
| `text-xs`                                 | 12px / line-height 16px | Metadata kecil      |
| `text-sm`                                 | 14px / line-height 20px | Copy sekunder       |
| `text-base`                               | 16px / line-height 24px | Body standar        |
| `text-lg`, `text-xl`                      | 18px, 20px              | Heading             |
| `text-3xl`                                | 30px                    | Sapaan Home         |
| `rounded-lg`, `rounded-xl`, `rounded-2xl` | 8px, 12px, 16px         | Radius              |
| `duration-300`                            | 300ms CSS               | Transisi            |
| `duration: 0.3`                           | 0.3 detik Framer Motion | Animasi JS          |

`px` kiri/kanan, `py` atas/bawah, `pt` hanya atas. `space-y-4` memberi jarak antar
anak selevel; `gap-4` untuk flex/grid. Menambah keduanya pada struktur sama bisa
menimbulkan jarak ganda. `leading-7` = 28px; `leading-relaxed` = 1.625;
`leading-[1.8]` = pengali 1.8. `tracking-wider` mengubah jarak huruf.

### 1.2 Breakpoint mobile-first

| Prefix       | Aktif mulai  | Catatan                    |
| ------------ | ------------ | -------------------------- |
| Tanpa prefix | Semua ukuran | Nilai dasar mobile         |
| `sm:`        | 640px        | Telepon lebar/tablet kecil |
| `md:`        | 768px        | Tablet ke atas             |
| `lg:`        | 1024px       | Sidebar desktop            |
| `xl:`        | 1280px       | Desktop lebar              |
| `2xl:`       | 1536px       | Layar sangat lebar         |

`gap-3 sm:gap-5` berarti 12px dahulu, 20px mulai 640px.
`hidden lg:block` tersembunyi di bawah 1024px.
`dark:` hanya ketika theme dark class aktif, bukan breakpoint layar.
`group-hover:` membutuhkan ancestor `group`; `group-focus-within:` merespons fokus
keyboard di dalam grup. Perubahan hover sebaiknya punya padanan fokus yang sesuai.

### 1.3 Aturan edit class

1. Temukan elemen spesifik; ubah class milik elemen itu, bukan seluruh file.
2. **Ganti** utility lama, jangan menambahkan dua utility konflik seperti `p-4 p-6`.
   Urutan teks class bukan jaminan pemenang CSS.
3. Utility breakpoint berbeda boleh berdampingan: `p-4 sm:p-6`.
4. Nilai khusus memakai `[]`, contoh `max-w-[900px]`, `text-[13px]`.
5. Tailwind memindai `app/`, `common/`, `modules/` (lihat config). Class yang hanya
   berada di `contents/` atau docs tidak otomatis menjadi CSS aplikasi.
6. Jangan buat `bg-${color}-500`. Pakai string utuh yang terlihat saat build,
   misalnya kondisi `active ? "bg-sky-500" : "bg-neutral-500"` pada source yang
   dipindai, atau daftar safelist eksplisit bila benar-benar dibutuhkan.
7. Hindari `!important` sebagai solusi pertama; periksa parent, wrapper, inline
   style, breakpoint, dan dimensi intrinsik gambar dahulu.

## 2. Warna, font, layout global

### 2.1 Warna utama

File `tailwind.config.ts`, `theme.extend.colors.primary`:

- `DEFAULT: "#fbe400"` dipakai `text-primary`, `bg-primary`, `outline-primary`.
- Shade 50–950 adalah nilai terpisah. Mengganti DEFAULT saja tidak mengganti
  `primary-400`, `primary-700`, dan lainnya.
- `dark.DEFAULT: "#121212"`, `light.DEFAULT: "#fafafa"` adalah token terpisah;
  banyak kartu memakai `neutral-*`, jadi tidak semua background mengikuti token itu.

Resep mengganti brand ke warna lain: ganti palet primary lengkap, lalu periksa
badge, tombol, heading detail karier, indikator fokus, dan kontras kedua tema.
Kuning terang pada teks background putih dapat kurang terbaca; untuk satu heading
gunakan shade lebih gelap pada light, misalnya
`text-primary-800 dark:text-primary`, tanpa mengubah semua pemakai global.

**Loader navigasi belum mengikuti token:** `app/[locale]/layout.tsx`,
`NextTopLoader.color="#fbe400"` dan `shadow="0 0 10px #fbe400,0 0 5px #ffffb8"`.
Ganti dua properti ini juga jika ingin brand loader ikut berubah.

### 2.2 Font

Font Inter didefinisikan `common/styles/fonts.ts` dan diterapkan lewat
`inter.className` pada body layout locale. Mengganti nama font di satu heading
tidak mengganti body. Periksa juga `font-sans` pada renderer Markdown.
Gunakan font yang tersedia melalui konfigurasi Next/font; penambahan font eksternal
dapat membutuhkan jaringan saat build. Tidak ada dependency font baru yang
diperlukan hanya untuk mengubah ukuran/weight.

| Target                             | Saat ini                | Resep                                                       |
| ---------------------------------- | ----------------------- | ----------------------------------------------------------- |
| Judul kecil lebih tegas            | `font-medium`           | Ganti `font-semibold`                                       |
| Body lebih renggang                | `leading-7`             | Ganti `leading-8`                                           |
| Metadata lebih mudah dibaca        | `text-xs`/`text-[10px]` | Ganti `text-sm`/`text-xs`                                   |
| Heading tidak terlalu besar mobile | `text-3xl`              | `text-2xl sm:text-3xl`                                      |
| Teks panjang meluber               | Lebar flex parent       | Tambah/pertahankan `min-w-0`, lalu `break-words` bila perlu |

Jangan memakai `line-clamp` untuk menyembunyikan qualifier penting seperti
“internal”, “local-only”, atau batas kontribusi.

### 2.3 Lebar dan padding halaman

File `common/components/layouts/index.tsx`:

| Elemen             | Saat ini                         | Contoh edit dan efek                                    |
| ------------------ | -------------------------------- | ------------------------------------------------------- |
| Wrapper luar       | `max-w-7xl lg:px-12`             | `lg:px-8` memberi ruang isi lebih lebar                 |
| Baris sidebar/main | `lg:gap-5 lg:py-4`               | `lg:gap-8` menjauhkan sidebar dari main                 |
| Main               | `min-w-0 max-w-[854px] lg:w-4/5` | `max-w-[900px]` menaikkan batas; cek total lebar parent |

File `common/components/elements/Container.tsx`: `mt-20 p-8 lg:mt-0`.
`mt-20` menyediakan offset header fixed mobile; jangan hapus tanpa menyesuaikan
tinggi header. Untuk isi lebih lega pada telepon: ganti `p-8` menjadi
`px-5 py-8 sm:p-8`. Perubahan shared Container memengaruhi banyak halaman,
termasuk route lama.

### 2.4 Heading dan pembatas section

Komponen `SectionHeading.tsx`, `SectionSubHeading.tsx`, `PageHeading.tsx`,
`Breakline.tsx` berada di `common/components/elements/`. Edit shared komponen jika
semua heading harus berubah; edit wrapper section jika hanya jarak satu halaman.
`space-y-6` pada section = jarak antar blok utama, bukan jarak tiap paragraf.
`app/globals.css` mengatur scrollbar dan hexagon; bukan sumber semua styling kartu.

## 3. Sidebar dan mobile

Komponen aktif: `common/components/layouts/sidebar/`. `MobileHeader.tsx` alternatif
lama bukan header yang dirender layout utama saat ini.

### 3.1 Lebar, sticky, fixed

- `sidebar/index.tsx`: header `lg:w-1/5 lg:shrink-0`; inner `sticky top-0 z-10`.
- `Profile.tsx`: panel mobile `fixed z-20 w-full ... p-5`, desktop `lg:relative`
  dan `lg:p-0`.
- JS di `Profile.tsx` menggunakan ambang `window.innerWidth < 1024`. Jika breakpoint
  sidebar berubah dari lg, ubah juga ambang JS agar kontrol mobile tidak berbeda
  dengan layout CSS. Jangan ubah hanya salah satunya.

### 3.2 Avatar, nama, headline

| Target              | File/elemen                       | Saat ini                                              | Resep                                           |
| ------------------- | --------------------------------- | ----------------------------------------------------- | ----------------------------------------------- |
| Ukuran avatar       | `Profile.tsx`, `imageSize`        | mobile 40, desktop 100                                | 48/112; periksa tinggi header                   |
| Avatar menu terbuka | `ProfileHeader.tsx`, width/height | 80                                                    | Ubah kedua dimensi                              |
| Bentuk avatar       | `ProfileHeader.tsx`, `rounded`    | `rounded-full`                                        | `rounded-2xl` untuk rounded square              |
| Border avatar       | `ProfileHeader.tsx`, class image  | `border-2 border-neutral-400 dark:border-neutral-600` | Border lebih lembut: shade 300/700              |
| Hover avatar        | Class image                       | `lg:hover:scale-105`                                  | Hapus jika ingin statis                         |
| Nama                | Heading h2                        | `text-sm sm:text-lg lg:text-xl`                       | Ubah per breakpoint; nama lengkap cukup panjang |
| Headline            | Div setelah nama                  | `hidden text-sm ... lg:flex`                          | Teks dari PROFILE, ukuran di sini               |
| Jarak kontrol       | Wrapper toggle                    | `gap-6 lg:mt-4`                                       | `gap-4` lebih rapat                             |

Mengubah inisial data tidak mengubah glyph SVG. Avatar baru harus dipotong
proporsional; gunakan `object-cover` dan ukuran persegi jika foto tidak persegi.

### 3.3 Menu dan footer

`Menu.tsx` mengatur daftar desktop; `MenuItem.tsx` elemen menu bila tersedia;
`MobileMenu.tsx` menu mobile; `MobileMenuButton.tsx` tombol pembuka. Cari class
active/hover pada elemen yang dirender, jangan mengubah label data untuk styling.
SocialLinks dan Copyright terpisah. Pertahankan akses keyboard dan label tombol
tema/bahasa ketika mengecilkan ikon atau menghilangkan teks visual.

## 4. Home dan skill kaca

### 4.1 Introduction

`modules/home/components/Introduction.tsx`:

| Elemen                 | Class saat ini                              | Resep                                |
| ---------------------- | ------------------------------------------- | ------------------------------------ |
| Wrapper sapaan         | `text-3xl font-medium`                      | `text-2xl font-semibold sm:text-3xl` |
| Bullet lokasi/headline | `ml-5 ... gap-x-10 gap-y-2 ... md:flex-row` | `gap-x-6` untuk lebih rapat          |
| Paragraf               | `mt-6 space-y-4 leading-7`                  | `space-y-5 leading-8` lebih longgar  |
| Warna body             | `text-neutral-600 dark:text-neutral-300`    | Shade 700/200 meningkatkan kontras   |

### 4.2 Grid skill

`modules/home/components/SkillList.tsx`:
`grid-cols-6 gap-x-[1em] gap-y-[2.7em] ... md:grid-cols-10 lg:grid-cols-11`.

- Lebih sedikit kolom telepon: `grid-cols-4 sm:grid-cols-6` mengganti `grid-cols-6`.
- Lebih longgar vertikal: `gap-y-[3.2em]`; memberi ruang label tooltip.
- Lebih rapat horizontal: `gap-x-2` mengganti `gap-x-[1em]`.
- Menambah skill hanya mengubah data, bukan kolom otomatis. Pastikan label panjang
  tidak menabrak ikon tetangga pada hover.

### 4.3 Anatomi GlassIcon

File `common/components/elements/GlassIcon.tsx`:

| Layer          | Saat ini                                    | Dampak edit                                    |
| -------------- | ------------------------------------------- | ---------------------------------------------- |
| Tombol luar    | `h-[2.6em] w-[2.6em] md:h-[3em] md:w-[3em]` | Ubah h/w berpasangan untuk panel lebih besar   |
| Perspektif     | `[perspective:24em]`                        | Nilai lebih kecil membuat efek 3D lebih kuat   |
| Panel belakang | `rotate-[15deg]`, radius `1.25em`           | `rotate-[8deg]` lebih tenang                   |
| Hover belakang | rotate 25deg + translate3d                  | Kurangi sudut/geser untuk gerak lebih halus    |
| Warna belakang | `${background}`                             | Dari STACKS; bukan color ikon                  |
| Panel kaca     | `bg-[hsla(0,0%,100%,0.15)]`                 | 0.15 adalah opacity putih                      |
| Blur kaca      | `backdrop-blur-[0.75em]` dan prefixed style | Ubah keduanya konsisten                        |
| Border kaca    | inline `boxShadow` inset                    | Ganti alpha 0.3 atau ketebalan 0.1em           |
| Wadah ikon     | `h-[1.5em] w-[1.5em]`                       | Tidak otomatis mengubah `size={iconSize}` ikon |
| Tooltip        | `top-full text-sm leading-[2] opacity-0`    | `text-xs` lebih kecil; jarak via translate     |
| Durasi         | `duration-300` pada layer                   | 200 lebih cepat, 500 lebih lambat              |

Ukuran SVG ikon default berada pada `iconSize = 26` di `stacks.tsx`; perubahan
global juga memengaruhi ikon stack proyek. Untuk satu skill, beri size khusus
pada entry itu. Jika memperbaiki fokus/gerak komponen ini, tambahkan padanan
`group-focus-visible` dan `motion-reduce` yang tepat; class hover lama tidak
otomatis memenuhi preferensi reduced motion.

## 5. CareerCard

File `modules/about/components/CareerCard.tsx`. Data/copy bukan di sini, kecuali
label yang diambil lewat messages. `CareerList.tsx` mengatur grid/jarak antar kartu.

### 5.1 Kepala kartu dan logo

| Target          | Cari elemen/class | Saat ini                    | Resep                                        |
| --------------- | ----------------- | --------------------------- | -------------------------------------------- |
| Padding         | SpotlightCard     | `p-5 sm:p-6`                | `p-4 sm:p-5` lebih kompak                    |
| Gap logo/isi    | article           | `gap-3 sm:gap-5`            | `gap-4 sm:gap-6` lebih lapang                |
| Logo mobile     | Image             | `h-12 w-12`                 | `h-14 w-14` = 56px                           |
| Logo desktop    | Image             | `sm:h-[60px] sm:w-[60px]`   | 64px, ubah width/height props juga           |
| Bentuk logo     | Image             | `rounded-lg border-[1.5px]` | `rounded-xl border`                          |
| Background logo | Image             | `bg-white object-contain`   | Pertahankan putih jika logo tidak transparan |
| Posisi          | h3                | `font-medium`               | `font-semibold text-base`                    |
| Copy metadata   | Wrapper           | `text-sm ...`               | `text-[13px]` bila ingin lebih padat         |

Fallback CompanyIcon mempunyai class ukuran sendiri: ubah juga jika ukuran logo
diubah. `shrink-0` mencegah logo mengecil karena teks panjang. `min-w-0 flex-1`
pada kolom isi penting agar nama instansi membungkus tanpa overflow.

### 5.2 Metadata

- Nama instansi/lokasi: `flex-col ... md:flex-row md:flex-wrap md:gap-2`.
- Periode/durasi/tipe/mode: ukuran `text-[13px]`, struktur responsive sama.
- Bullet `•`: `hidden ... md:block`, warna 300 light/700 dark, `aria-hidden`.
- Ubah `md:` menjadi `lg:` bila metadata terlalu sesak di tablet. Semua separator
  harus mengikuti breakpoint baru agar tidak muncul di baris yang salah.
- Tanggal disusun `Intl` dengan `month: "short"`; ganti ke `"long"` bila ingin
  bulan lengkap. Ini memperpanjang teks; periksa wrap kedua locale.

### 5.3 Tombol dan animasi detail

| Target                     | Saat ini                   | Edit                                              |
| -------------------------- | -------------------------- | ------------------------------------------------- |
| Jarak tombol dari metadata | `pt-2`                     | `pt-3`                                            |
| Geser tombol               | `-ml-1`                    | Hapus untuk sejajar persis kolom isi              |
| Ukuran teks                | `text-sm font-medium`      | `text-xs` lebih kecil                             |
| Chevron                    | size 18                    | 20 untuk lebih jelas                              |
| Sudut terbuka              | rotate 90                  | Pertahankan arah yang menunjukkan expanded        |
| Durasi chevron/panel       | `reduceMotion ? 0 : 0.3`   | 0.2 untuk lebih cepat; tetap hormati reduceMotion |
| Panel                      | opacity 0/1, height 0/auto | Jangan animasi fixed height yang memotong isi     |

Pertahankan `id`, `aria-controls`, `aria-expanded`, dan `role="region"` ketika
mengganti bentuk tombol. Label show/hide berada pada `AboutPage.career` messages.

### 5.4 Responsibilities, Learning, Impact

`DetailSection` adalah shared helper lokal dalam file yang sama:

- Heading: icon 16px, `gap-2`, `text-xs uppercase tracking-wider`, `text-primary`.
- Isi bullet: `text-xs leading-relaxed`, item `space-y-2`, gap centang/teks 8px.
- Centang dekoratif: `aria-hidden`, bold, neutral 700/300.
- Wrapper panel: `space-y-4 py-3`.
- Learning/Impact: `grid-cols-1 ... sm:grid-cols-2` jika keduanya berisi.
- Garis pemisah: `border-t border-neutral-200 pt-4 dark:border-neutral-800`.

**Resep keterbacaan:** ganti isi helper `text-xs` menjadi `text-sm`; ganti
`sm:grid-cols-2` menjadi `lg:grid-cols-2` agar kolom tidak terlalu sempit di tablet.
**Resep selalu satu kolom:** hilangkan class kondisi `sm:grid-cols-2`, bukan
menghapus salah satu data section. Pertahankan pengecekan array kosong.

## 6. EducationCard

File `modules/about/components/EducationCard.tsx`:

| Elemen              | Saat ini                                      | Resep                                             |
| ------------------- | --------------------------------------------- | ------------------------------------------------- |
| Padding/gap         | `p-5 sm:p-6`, `gap-3 sm:gap-5`                | Samakan CareerCard untuk konsistensi              |
| Logo                | `h-12 w-12 sm:h-[70px] sm:w-[70px]`, props 70 | Ganti dimensi sepasang; fallback ikon 65 terpisah |
| Logo background     | `rounded-lg bg-white object-contain`          | Padding kecil `p-1` jika tepi logo terlalu rapat  |
| Nama sekolah        | h3 `font-medium`                              | `font-semibold`                                   |
| Gelar/jurusan/GPA   | `text-sm`, `md:flex-row md:flex-wrap`         | `lg:flex-row` untuk lebih lambat sejajar          |
| Periode/lokasi      | `text-xs`                                     | `text-[13px]`/`text-sm` agar lebih terbaca        |
| Jarak blok metadata | `space-y-2`                                   | `space-y-3`                                       |

Label GPA/IPK dari messages; nilai dari data. Jangan menulis “GPA” hardcoded jika
tetap ingin locale id menampilkan IPK. Garis/bullet jangan menjadi satu-satunya
pemisah semantik; teks mesti masih terbaca ketika layout membungkus.

## 7. Projects dan Markdown

### 7.1 Grid dan ProjectCard

Cari grid di `modules/projects/components/Projects.tsx`. `ProjectCard.tsx`:

| Target               | Saat ini                            | Resep                                                                        |
| -------------------- | ----------------------------------- | ---------------------------------------------------------------------------- |
| Cover                | `h-[200px] w-full ... object-cover` | Tinggi 180/220px; jangan ubah satu card saja                                 |
| Fallback tanpa image | `h-[200px]`                         | Samakan tinggi cover                                                         |
| Sudut gambar         | `rounded-t-xl`                      | Cocokkan radius outer card                                                   |
| Badge unggulan       | top-right, `px-2 py-1 text-sm`      | `text-xs` untuk badge lebih kecil                                            |
| Overlay              | black, hover opacity 80, 300ms      | Ubah alpha/durasi; tambahkan group-focus bila memperbaiki interaksi keyboard |
| Isi                  | `space-y-2 p-5`                     | `space-y-3 p-6`                                                              |
| Deskripsi            | `text-sm leading-relaxed`           | `leading-7` lebih lapang                                                     |
| Stack row            | `gap-3 pt-2`                        | `gap-2` lebih rapat                                                          |

Card seluruhnya tautan detail; jangan menaruh link/button lain bersarang di dalam
link ini. Jangan memotong deskripsi yang menjelaskan batas status/kontribusi.
Cover SVG 1200×600 tahap 5 dirancang dengan pusat aman; crop berbeda menurut
rasio grid. `object-contain` membuat grafis utuh tetapi bisa menambah letterbox.

### 7.2 Detail proyek

`ProjectDetail.tsx`:

- Jarak blok luar `space-y-8`.
- Stack/link bar `gap-5`, row mulai `sm:flex-row`.
- Image props 1000×400, class `transition duration-500 hover:scale-[1.04]`.
- Isi Markdown `mt-5 space-y-6 leading-[1.8] dark:text-neutral-300`.

Untuk menghilangkan zoom cover, hapus hover scale. Untuk tinggi cover tetap,
tambahkan `h-[300px] w-full object-cover`; pahami bagian gambar dapat terpotong.
Untuk gambar sertifikat/diagram teks, pilih `h-auto w-full object-contain`.

### 7.3 Styling Markdown

`common/components/elements/MDXComponent.tsx`:

| Elemen     | Class utama saat ini                      | Resep                                       |
| ---------- | ----------------------------------------- | ------------------------------------------- |
| Link       | `text-teal-600 hover:text-teal-400`       | Ubah ke warna brand yang kontras light/dark |
| h2         | `text-xl font-medium`                     | `text-2xl font-semibold`                    |
| h3         | `pt-4 text-[18px] leading-snug`           | Kurangi padding jika heading terlalu jauh   |
| ul/ol      | `space-y-3 pb-5 pl-10`                    | `space-y-2 pl-6` lebih kompak               |
| Blockquote | border kiri 5px, cyan, `py-3 pl-6`        | Ganti warna/bg/border bersama               |
| Tabel      | Wrapper `overflow-auto`, cell `px-3 py-1` | `py-2` untuk baris lebih lapang             |

Tidak ada Tailwind Typography plugin. Menambahkan `prose` saja tidak menghasilkan
styling typography plugin. Edit renderer yang ada atau rancang kebutuhan baru
secara eksplisit, bukan memasang dependency hanya untuk satu jarak heading.

## 8. AchievementCard dan dialog

File utama `modules/achievements/components/AchievementCard.tsx`. Ada dua komponen
dalam file: card dan `CertificateDialog`. `Achievements.tsx` grid, `FilterHeader.tsx`
form filter.

### 8.1 Grid dan filter

- Grid: `grid-cols-1 gap-4 md:grid-cols-2`. Resep lebih lapang: `gap-6`.
- Tiga kolom pada main yang maksimum 854px dapat membuat judul/tag terlalu sempit;
  uji sebelum memakai `lg:grid-cols-3`.
- Form filter: `md:grid-cols-3`, input `p-2 text-sm rounded-lg`.
- Tombol apply: `px-4 py-2`, reset link terpisah.
- Jangan ganti GET form menjadi kontrol state setengah jalan: query/filter server
  dan nilai `defaultValue` perlu tetap konsisten.

### 8.2 Anatomi card

| Elemen         | Saat ini                                    | Contoh perubahan                                       |
| -------------- | ------------------------------------------- | ------------------------------------------------------ |
| Outer          | article `h-full`, Spotlight `group h-full`  | Pertahankan h-full agar tinggi grid rata               |
| Trigger        | button absolut inset 0, z-10                | Jangan ganti div onClick; tombol mendukung Enter/Space |
| Area thumbnail | neutral 200/800                             | neutral 100/900 untuk lebih lembut                     |
| Thumbnail      | `h-48 w-full object-contain p-2`            | `h-56 p-3` memperbesar; tinggi naik 192 ke 224px       |
| Hover image    | `motion-safe:group-hover:scale-105`         | Hapus zoom atau scale 102%                             |
| Overlay        | `bg-black/60`, sm:flex, opacity hover/focus | Ubah alpha 50/70; tetap ada indikator mobile           |
| Isi            | `gap-4 p-4`                                 | `p-5` lebih lapang                                     |
| Judul          | `text-sm font-medium`                       | `text-base font-semibold`                              |
| Penerbit       | `text-xs` neutral 500/400                   | text-sm dan shade lebih kuat                           |
| Badge          | border, `px-2 py-0.5 text-[10px]`           | `text-xs px-2.5 py-1` lebih terbaca                    |
| Tanggal        | `text-[10px] uppercase`, border-t, `pt-2`   | `text-xs normal-case pt-3`                             |
| Mobile action  | `sm:hidden`, text-xs                        | Pertahankan jika hover overlay disembunyikan mobile    |

Judul tidak line-clamp agar nama pencapaian lengkap terbaca. Trigger adalah overlay
di atas konten, bukan pembungkus heading sehingga semantik heading dipertahankan.
Jika menambah link di card, ubah struktur trigger dahulu agar link tidak tertutup
overlay dan tidak menjadi interaksi bersarang.

### 8.3 Thumbnail contain atau cover

- `object-contain`: seluruh sertifikat terlihat; portrait mempunyai ruang samping.
- `object-cover`: kotak terisi, sebagian dokumen terpotong; cocok hanya sebagai
  preview, jangan dipakai modal dokumen yang harus terbaca utuh.
- `p-2`: ruang internal gambar; hilangkan bila ingin sampai tepi. Background tetap
  berguna untuk scan dengan rasio berbeda.
- Ukuran props 600×400 bukan perintah crop file; CSS dan natural ratio menentukan
  tampilan. Wrapper Image juga punya div sendiri.

### 8.4 Dialog/backdrop

| Target       | Saat ini                                              | Resep                                          |
| ------------ | ----------------------------------------------------- | ---------------------------------------------- |
| Layar dialog | `h-[100dvh] w-screen`                                 | Gunakan dvh untuk viewport mobile dinamis      |
| Padding luar | `p-4 md:p-8`                                          | `p-2 sm:p-4 md:p-8` jika ruang mobile sempit   |
| Backdrop     | `backdrop:bg-black/80 backdrop:backdrop-blur-sm`      | alpha 60/90 dan blur-md                        |
| Batas panel  | `max-w-6xl`, `max-h-full`                             | max-w-5xl lebih sempit                         |
| Panel        | `rounded-2xl bg-white dark:bg-neutral-900 shadow-2xl` | Radius/shadow sesuai shared style              |
| Arah         | `flex-col md:flex-row`                                | `lg:flex-row` bila tablet butuh susun vertikal |
| Scroll panel | `overflow-y-auto`                                     | Jangan hapus; isi panjang/mobile perlu scroll  |
| Animasi      | opacity, `reduceMotion ? 0 : 0.2`                     | 0.15 lebih cepat, tetap reduceMotion           |

Native `<dialog>.showModal()` menempatkan modal di top layer, membuat halaman lain
inert, dan membatasi fokus. Angka z-index besar bukan pengganti perilaku ini.
`Portal` memasang modal ke body. Jangan menambahkan atribut `open` permanen yang
mengubah modal menjadi nonmodal atau mengganggu showModal.

### 8.5 Kolom gambar dan metadata

- Kolom gambar `md:w-3/5`, metadata `md:w-2/5`: 60%/40%.
- Jika diubah ke 2/3 dan 1/3, ganti **dua** kolom; pertahankan `min-w-0`.
- Gambar modal `max-h-[60dvh] w-full object-contain md:max-h-[85dvh]`.
- Metadata `p-5 md:p-8 md:pt-14`; padding atas desktop memberi ruang tombol close.
- Border pemisah `md:border-l ... dark:md:border-neutral-800`.
- Deskripsi `text-sm leading-7`; field `dl space-y-4 text-sm`.
- Heading field `text-xs uppercase tracking-wide`.

Metadata sengaja tidak `hidden md:flex`; jangan menyembunyikannya mobile jika ingin
pengunjung ponsel tetap membaca deskripsi dan tanggal. Untuk teks lebih panjang,
naikkan width metadata atau gunakan satu kolom; jangan mengecilkan seluruh teks.

### 8.6 Tombol tutup, fokus, scroll body

Close: `absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2`, ikon 22px.
Resep target sentuh lebih besar: `p-3`, periksa tidak menutup bagian sertifikat
yang penting. `aria-label` berasal dari messages. Tombol difokuskan saat buka.
Escape, klik area di luar panel, tombol close memanggil close; fokus kembali ke
trigger setelah animasi exit/unmount. Body overflow dipulihkan ke nilai sebelumnya.
Jangan menghapus cleanup effect saat mengubah animasi.

## 9. Contact, shared card, gambar

### 9.1 Contact

`modules/contact/components/ContactCard.tsx`:

- Grid `grid-cols-[minmax(0,1fr)_auto] gap-3 p-6` menjaga teks dan ikon sisi kanan.
- Background dekoratif icon `-left-[3.5rem] -top-[3.5rem] rotate-45`.
- Heading `text-lg font-semibold tracking-wide`, deskripsi `text-xs`.
- Link action `px-4 py-2 rounded-md`, hover scale 105%.
- Alamat `break-all text-xs`: bila terlalu agresif, coba `break-words` tetapi cek
  URL panjang pada lebar 320px.
- Warna/bg/border per kartu dari `common/constants/socialMedia.tsx`.

Jangan menaruh Link di dalam Button. Contact menggunakan link langsung; styling
seperti tombol tidak mengharuskan elemen button jika fungsinya navigasi.

### 9.2 SpotlightCard lintas halaman

File `common/components/elements/SpotlightCard.tsx`:

- Radius `rounded-2xl`, border 1.5px, neutral 300/800, bg neutral 100/900.
- Overlay radial putih default `rgba(255, 255, 255, 0.25)`.
- Opacity hover/focus diset 0.6; fade CSS 500ms.
- Overlay `pointer-events-none`; pertahankan agar link/tombol dapat diklik.

Edit shared komponen untuk semua kartu. Untuk satu kartu gunakan properti
`spotlightColor` atau ubah elemen internal khusus. Class radius/border konflik pada
wrapper jangan ditumpuk tanpa meninjau CSS hasilnya; ganti sumber aturan yang jelas.

### 9.3 Wrapper Image

`common/components/elements/Image.tsx` membungkus `next/image` dengan div overflow,
loading blur/grayscale, lazy, dan `unoptimized`. Class diberikan ke gambar,
sedangkan prop `rounded` diberikan ke wrapper dan gambar.

- Tinggi wrapper tidak otomatis sama dengan class gambar jika layout berubah.
- SVG/scan lokal tidak perlu remote host configuration.
- Class `quality` tidak mengompresi file yang dilayani unoptimized.
- Career/Education memakai `next/image` langsung, jadi perilaku loading/wrapper
  mereka berbeda. Jangan mengira mengubah wrapper Image akan mengubah semua logo.

## 10. Resep micro dan pemeriksaan

### Resep A — kartu karier terasa terlalu padat

1. CareerCard: `p-5 sm:p-6` menjadi `p-5 sm:p-7`.
2. DetailSection: `text-xs` menjadi `text-sm`; cek total panjang.
3. Grid Learning/Impact: pindah breakpoint dua kolom dari sm ke lg.
4. Cek satu kartu terbuka/semua terbuka, en/id, light/dark, 320/768/1280px.

### Resep B — sertifikat terlalu kecil di desktop

1. Pastikan scan asli cukup besar, bukan thumbnail yang diperbesar.
2. Naikkan kolom gambar 60% ke sekitar 66.7%; metadata sisanya.
3. Periksa max-height 85dvh; menaikkan lebar saja tidak membantu portrait yang
   sudah dibatasi tinggi.
4. Bila perlu dokumen ukuran asli, rancang link buka gambar publik nyata sebagai
   fitur tersendiri; jangan mengganti credential URL dengan file scan tanpa label.

### Resep C — mengganti aksen tanpa mengubah layout

Ganti palet primary → ganti loader color/shadow → periksa heading karier, badge
unggulan, fokus keyboard, tombol credential. Jangan mengganti semua neutral menjadi
primary; hierarki teks utama/sekunder harus tetap terbaca.

### Resep D — overflow hanya pada mobile

Periksa parent `min-w-0`, `flex-wrap`, kata/URL panjang, fixed width image, padding
Container, grid kolom, kemudian breakpoint. `overflow-hidden` pada root sekadar
menyembunyikan isi dan bukan perbaikan layout.

### Matriks pemeriksaan setiap edit visual

| Kondisi               | Yang diperhatikan                                                 |
| --------------------- | ----------------------------------------------------------------- |
| 320/375px             | Tidak horizontal scroll; nama, tag, tombol, metadata tidak hilang |
| 768px                 | Peralihan md, dua kolom, metadata wrap, dialog                    |
| 1024/1280px           | Peralihan sidebar lg, batas lebar main                            |
| en/id                 | Teks lebih panjang, bulan, label, kata tanpa spasi                |
| light/dark            | Kontras body, border, logo putih, fokus                           |
| Keyboard              | Tab terlihat, Enter/Space, Escape, fokus kembali                  |
| Reduced motion        | Gerak baru tidak memaksa animasi                                  |
| Konten kosong/panjang | Fallback image/stack, section kosong, scroll modal                |

Ini daftar pemeriksaan **manual oleh pemilik**, bukan hasil visual yang sudah
divalidasi agent. Source lint/TypeScript/build memeriksa kode, bukan kualitas
komposisi, ketajaman gambar, atau semua perilaku browser.

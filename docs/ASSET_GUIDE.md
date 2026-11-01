# Panduan aset

Untuk konten lihat [CONTENT_MANAGEMENT](CONTENT_MANAGEMENT.md); untuk ukuran dan
crop komponen lihat [VISUAL_CUSTOMIZATION](VISUAL_CUSTOMIZATION.md).

## 1. Struktur dan URL

```text
public/images/
├── avatar.svg                 Avatar inisial NC
├── projects/                  Lima cover SVG netral
│   ├── fms.svg
│   ├── spectra.svg
│   ├── ride-hailing.svg
│   ├── nkri.svg
│   └── chat-app.svg
├── careers/                   Logo pengalaman
├── education/                 Logo PENS
└── achievements/              Scan sertifikat asli
```

`public/images/projects/fms.svg` tersedia sebagai URL `/images/projects/fms.svg`.
Jangan menulis `/public/images/...`. Folder aset tidak memakai prefix locale;
en/id boleh memakai file sama. Data dan Markdown harus menyebut nama/case tepat,
termasuk `.PNG` versus `.png` pada hosting case-sensitive.

File `app/icon.svg` adalah metadata route Next.js, bukan di dalam public.
Untuk mengganti icon browser, edit file itu atau metadata icons pada layout.

## 2. Pilihan format, resolusi, ukuran

| Kebutuhan      | Format                                         | Saran persiapan                                     |
| -------------- | ---------------------------------------------- | --------------------------------------------------- |
| Foto avatar    | JPG/WebP, PNG bila perlu alpha                 | Crop persegi 400–800px, wajah jelas                 |
| Avatar inisial | SVG                                            | viewBox persegi, teks inisial eksplisit             |
| Logo           | SVG/PNG, JPG yang sudah disediakan juga bisa   | 200–512px cukup untuk tampilan 48–70px              |
| Cover proyek   | SVG grafis, WebP/JPG screenshot yang diizinkan | Rasio sekitar 2:1; 1200×600px                       |
| Sertifikat     | JPG/PNG/WebP                                   | Sisi panjang 1600–2500px atau lebih jika teks kecil |
| Dokumen unduh  | PDF                                            | File nyata, isi publik final, link terpisah         |

Saran ukuran: avatar/logo puluhan hingga ratusan KB; cover raster sekitar
100–500KB; scan sertifikat ideal di bawah 2MB jika teks tetap jelas. Ini target
praktis, bukan batas upload aplikasi. Jangan mengorbankan keterbacaan dokumen
demi target byte. SVG tidak membutuhkan export raster berulang.

`Image.tsx` shared memakai `unoptimized`, sehingga file asli dikirim ke pengunjung.
Properti quality tidak otomatis mengecilkannya. Optimasi raster dilakukan pada
file sumber secara sengaja, setelah menjaga salinan asli di tempat yang sesuai.

## 3. Cover netral tahap 5

Kelima cover SVG adalah ilustrasi abstrak buatan untuk portfolio, tanpa screenshot
internal, endpoint, host, data pengguna, atau logo partner.

| File               | Konsep                             | Tidak boleh disimpulkan                |
| ------------------ | ---------------------------------- | -------------------------------------- |
| `fms.svg`          | Modul dan batas integrasi          | Topologi produksi atau adopsi industri |
| `spectra.svg`      | Lembar penilaian/antarmuka asesmen | UI asli atau identitas peserta         |
| `ride-hailing.svg` | Jalur dan titik peta abstrak       | Lokasi perjalanan riil                 |
| `nkri.svg`         | Komunikasi dan token UI            | Screenshot prototype internal          |
| `chat-app.svg`     | Percakapan abstrak                 | Data percakapan pengguna               |

Semua memiliki viewBox `0 0 1200 600`, background gelap netral, aksen berbeda,
serta area pusat aman. Judul proyek dirender komponen HTML di bawah cover; grafis
tidak memuat klaim “production”, “live”, atau status lain.

### Edit cover SVG manual

1. Buka `public/images/projects/<slug>.svg` di editor teks atau vector editor.
2. Ganti warna background pada rect pertama, aksen stroke/fill pada shape terkait.
3. Pertahankan `xmlns`, `viewBox`, penutupan tag, dan referensi gradient id.
4. Bila mengganti ukuran artboard, pertahankan rasio atau periksa crop kartu ulang.
5. Jangan masukkan script, gambar remote, atau materi internal ke SVG.
6. Simpan dengan nama sama untuk mengganti semua pemakainya. Nama baru memerlukan
   perubahan `image` pada `contents/projects.ts`.

SVG memakai elemen vector standar tanpa font eksternal, jadi tidak bergantung
pada font terpasang. `alt` di website tetap berasal dari judul proyek.

### Mengganti cover dengan screenshot yang disetujui

1. Pastikan hak publikasi dan data layar sudah dikurasi.
2. Siapkan file landscape, misalnya `spectra-cover.webp`.
3. Letakkan di `public/images/projects/`.
4. Ubah `image: "/images/projects/spectra-cover.webp"` pada proyek terkait.
5. Cek kartu dengan `object-cover` dan detail; teks kecil dalam screenshot dapat
   tidak terbaca pada kartu meski file tajam.
6. Pertahankan SVG lama jika masih direferensikan; hapus hanya setelah pemeriksaan.

Cover FMS/NKRI tetap netral selama screenshot belum diizinkan.

## 4. Logo dan avatar

Mapping aktif:

| Instansi                         | Path data                                          |
| -------------------------------- | -------------------------------------------------- |
| PT. Mitra Informatika            | `/images/careers/mitra-informatika.jpg`            |
| PT. Piramida Teknologi Informasi | `/images/careers/piramida-teknologi-informasi.jpg` |
| Spectra                          | `/images/careers/spectra.jpg`                      |
| PENS                             | `/images/education/logo-pens.png`                  |

Logo karier di `common/constants/carreers.ts`; pendidikan di
`common/constants/education.ts`. Logo tambahan yang belum dipetakan tidak otomatis
menjadi pengalaman baru. `object-contain` menjaga keseluruhan logo. Background
putih membantu logo JPG yang tidak punya alpha pada dark theme.

Mengganti avatar:

1. Siapkan crop persegi publik; simpan misalnya `public/images/profile.webp`.
2. Edit `PROFILE.avatar` menjadi `/images/profile.webp`.
3. Cek desktop, mobile closed/open; dimensi berbeda pada ketiganya.
4. Jika foto terdistorsi, gunakan crop persegi atau sesuaikan `object-cover` pada
   `ProfileHeader.tsx`.
5. Inisial `NC` tetap ada dalam `avatar.svg` sebagai fallback aset yang tersedia;
   mengganti `PROFILE.initials` saja tidak mengedit isi SVG.

## 5. Sertifikat, nama file khusus, publikasi

### Mapping enam gambar

File dipetakan lewat helper lokal `certificateImage(filename)` dalam
`contents/achievements.ts`. Nama file asli dipertahankan, termasuk spasi, tanda
kurung, dan `#` pada sertifikat Mitra.

```ts
const certificateImage = (filename: string) =>
  `/images/achievements/${encodeURIComponent(filename)}`;
```

`#` mentah pada URL berarti fragment, bukan bagian nama file; tanpa encoding
request dapat menuju path salah. Encode **satu nama file**, bukan seluruh URL.
Jangan encode ulang hasil helper (`%23` menjadi `%2523`).

Untuk file baru, lebih mudah gunakan nama lowercase kebab-case:
`nama-sertifikat-2026.jpg`. Bila rename file lama, ubah satu pemetaan pada data
dan periksa semua referensi. Jangan rename hanya untuk tampilan judul: judul dari
data terjemahan, bukan nama file.

### Orientasi dan crop

- Pertahankan portrait/landscape asli, jangan paksa raster menjadi 2:1.
- Thumbnail contain menampilkan scan utuh dalam area 192px; ruang kosong samping
  pada portrait adalah normal.
- Modal contain mempertahankan isi; jangan crop nomor/nama/stempel untuk memenuhi
  bentuk kotak thumbnail.
- Rapikan kemiringan, silau, bayangan jika mengambil scan baru. Periksa teks pada
  ukuran penuh sebelum mengganti scan yang sudah terbaca.

### File publik dan keputusan pemilik

Gambar saat ini ditampilkan apa adanya atas konfirmasi pemilik. Jangan menyalin
alamat atau identitas pihak lain dari gambar ke copy/metadata. Untuk sertifikat
baru, gunakan versi yang memang ingin dipublikasikan. File dalam `public/` dapat
diakses langsung walaupun `is_show: false`; flag itu hanya menyembunyikan item.

Jika kelak memilih redaksi, buat file versi publik yang permanen (bukan overlay
CSS di atas gambar). Perbarui pemetaan dan penanganan file/cache hosting sesuai
keputusan pemilik. Credential ID/URL hanya dimunculkan bila data nyata tersedia.

## 6. CV dan PDF opsional

PDF dapat disimpan sebagai dokumen publik, misalnya path yang direncanakan
`public/documents/muhammad-nandha-chrismawan-cv.pdf`, **setelah file final ada**.
Folder/path contoh ini belum berarti CV tersedia sekarang.

PDF tidak dapat dipakai sebagai `image` untuk `next/image`, card, atau modal
sertifikat gambar saat ini. Bila ingin keduanya, sediakan preview JPG/WebP terpisah
dan tautan PDF dengan label jelas. Schema achievement saat ini belum punya
`pdf_url`; menambahnya perlu kontrak dan UI baru, bukan menaruh PDF pada image.

Untuk tautan CV nyata pada halaman yang Anda pilih, setelah file ada:

```tsx
<a
  href="/documents/muhammad-nandha-chrismawan-cv.pdf"
  download
  className="inline-flex rounded-lg px-4 py-2 focus-visible:outline focus-visible:outline-2"
>
  {t("resume_download_button")}
</a>
```

Contoh mengasumsikan namespace AboutPage dan key yang sudah ada; tempatkan pada
komponen aktif serta uji file benar-benar tersedia. Jangan mengaktifkan tombol
dengan file kosong, URL contoh, atau route `#`.

## 7. Pemeriksaan aset setelah edit

1. Pastikan file ada pada path/case yang tepat, bukan shortcut ke disk pribadi.
2. Pastikan URL memakai `/images/...` atau `/documents/...`, bukan `D:\...`.
3. Periksa semua pemakai sebelum menghapus/rename file.
4. Periksa alt sesuai isi; grafis dekoratif tidak perlu mengulang seluruh teks.
5. Cek card/detail/modal, kedua tema, ponsel/desktop secara manual.
6. Lint/tipe/build tidak menjamin setiap image URL mendapat HTTP 200; cek browser
   manual tetap dibutuhkan.

### Referensi aset lama yang masih tersisa

Penghapusan aset template oleh pemilik dipertahankan. Saat audit tahap 5, source
lama masih memuat referensi berikut:

| Source                                                | Referensi            | Kondisi                                        |
| ----------------------------------------------------- | -------------------- | ---------------------------------------------- |
| `common/components/layouts/MobileHeader.tsx`          | `/images/satria.jpg` | Komponen alternatif; bukan header layout utama |
| `modules/dashboard/components/Monkeytype/Profile.tsx` | `/images/satria.jpg` | Fitur Dashboard tersembunyi dari menu          |
| `modules/contents/ProfileHeader.tsx`                  | `/images/tiktok.png` | Fitur Contents tersembunyi dari menu           |

Tidak mengembalikan foto pemilik template atau mengubah modul legacy dalam tahap
panduan ini. Jika nanti fitur lama diaktifkan, personalisasikan datanya dan ganti
referensi gambar sebagai bagian scope fitur tersebut. Menu tersembunyi tidak
menonaktifkan akses URL langsung.

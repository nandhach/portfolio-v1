# Deployment GitHub Pages

Target repo saat ini: **https://nandhach.github.io/portfolio-v1/**.
Ini target konfigurasi, bukan pernyataan website sudah dipublikasikan.

## 1. Cara kerja

- `next.config.mjs`: `output: "export"` untuk build produksi, `trailingSlash: true`, gambar
  `unoptimized`, `basePath` dari `NEXT_PUBLIC_BASE_PATH`.
- `npm run dev` tidak mengaktifkan `output: "export"`, menghindari pemeriksaan
  development Next.js 14 yang dapat menolak params locale dari parent layout.
  Route/API arsip tetap tidak aktif; build produksi tetap mengekspor semua halaman.
- `npm run build`: Next.js merender konten lokal, lalu
  `scripts/finalize-static-export.mjs` menetapkan `lang` HTML en/id dan `.nojekyll`.
- Hasil publik hanya folder `out/`; bukan source, `.env`, cache `.next`, atau arsip.
- `/` memuat HTML masuk dengan meta refresh ke `/en/`, disertai tautan biasa.
  Ini navigasi HTML, bukan HTTP redirect middleware.
- Semua halaman utama dan lima studi kasus per bahasa sudah ditentukan saat build.
  Slug/locale tidak dikenal tidak diekspor; Pages memakai `404.html` bilingual.
- Achievements membawa data publik bahasa aktif; filter/pencarian berjalan setelah
  JavaScript aktif. Apply/reset memperbarui query URL tanpa API; Back/Forward
  membaca kembali filter. Tanpa JavaScript, semua achievement tetap tersedia,
  tetapi filter dan modal interaktif tidak bekerja.
- Native Next.js Link/router menambahkan base path. Aset lokal dan URL HTML biasa
  memakai `withBasePath` dari `common/libs/site.ts`; jangan memberi prefix dua kali.
- `getPageUrl` pada `common/constants/metadata.ts` menyusun canonical/OG absolut
  dari origin, base path, locale, path halaman.
- Layout root bersifat bersama; finalizer memberi bahasa dokumen awal yang tepat.
  `DocumentLanguage` memperbarui atribut bahasa setelah navigasi client.

## 2. Publikasi pertama

1. Tinjau perubahan dan konten publik, commit/push sendiri ke branch default.
2. Buka repo GitHub → **Settings → Pages → Build and deployment → Source**.
   Pilih **GitHub Actions**. Repo/akun harus mendukung Pages untuk visibilitasnya.
3. Buka tab **Actions**, pilih **Deploy portfolio to GitHub Pages**, klik
   **Run workflow**, pilih branch default, konfirmasi.
4. Tunggu job `build` dan `deploy` selesai. URL tersedia pada environment
   `github-pages` dan output deployment.
5. Jalankan checklist manual di bawah pada URL hosting.

Workflow `.github/workflows/pages.yml` hanya dipicu `workflow_dispatch`.
Push tidak otomatis memublikasikan. Untuk pembaruan berikutnya, push perubahan
yang ditinjau kemudian jalankan workflow lagi. Tidak perlu membuat branch
`gh-pages` atau meng-commit folder `out/`.

`actions/configure-pages` memberikan `origin` dan `base_path` sesuai Pages;
workflow meneruskannya ke build dan pemeriksaan artefak. Job build hanya membaca
repo; job deploy memakai `pages: write` dan `id-token: write`. Token bawaan GitHub
Actions cukup; jangan membuat PAT atau menambahkan secret integrasi lama.
Pengaturan proteksi environment dapat meminta persetujuan sesuai konfigurasi repo.

## 3. Build lokal setara target project Pages

Dependency sudah tersedia: jalankan lint/tipe terlebih dahulu, kemudian build
dengan kedua variabel sama pada build dan checker.

PowerShell:

```powershell
$env:DOMAIN = "https://nandhach.github.io"
$env:NEXT_PUBLIC_BASE_PATH = "/portfolio-v1"
npm run build
npm run check:export
```

Shell POSIX:

```sh
DOMAIN=https://nandhach.github.io NEXT_PUBLIC_BASE_PATH=/portfolio-v1 npm run build
DOMAIN=https://nandhach.github.io NEXT_PUBLIC_BASE_PATH=/portfolio-v1 npm run check:export
```

`DOMAIN` hanya origin, **tanpa** `/portfolio-v1`. Base path tidak diakhiri `/`.
Nilai ini masuk bundle saat build; mengubah environment sesudah build tidak
mengubah file lama. Jangan upload hasil build localhost ke Pages.

Untuk development root, kosongkan `NEXT_PUBLIC_BASE_PATH`, gunakan DOMAIN
localhost dan `npm run dev`. Jika variabel masih aktif di sesi PowerShell,
gunakan `$env:NEXT_PUBLIC_BASE_PATH = ""` dan `$env:DOMAIN = "http://localhost:3000"`.
Periksa `.env.local` bila hasil tidak sesuai. `next start` tidak mendukung export;
script `start` dihapus. Untuk preview ringan root lokal, kosongkan base path,
build ulang, lalu jalankan `npm run preview` (serve, port 3000, loopback).
Project-path preview memerlukan pemasangan hasil build di `/portfolio-v1/`;
script preview root tidak memasang prefix tersebut.
Agent tidak menjalankan server/browser untuk verifikasi.

## 4. Perubahan domain atau nama repo

- Repo project biasa: `https://<owner>.github.io/<repo>/`, base path `/<repo>`.
- Repo user-site `<owner>.github.io`: URL root, base path kosong.
- Custom domain: atur domain nyata di Settings → Pages dan DNS sesuai panduan
  GitHub. Workflow membaca metadata Pages setelah pengaturan tersebut aktif.
  Build ulang; periksa canonical, aset, dan URL workflow.
- Jangan menambahkan `public/CNAME` sebelum domain benar-benar dipilih/dimiliki.
  Saat ini tidak ada custom domain yang diasumsikan.

## 5. Arsip fitur server

`app/_legacy/` adalah private folder Next.js, bukan route group. Isinya tidak
dirutekan atau diekspor: seluruh `/api/*`, Chat, Contents, Dashboard, Smart Talk,
halaman legal template, middleware lama. File asal dipindahkan, bukan dibuang;
modul/service/dependency tetap tersimpan. Projects/Achievements memakai service
lokal saat build, tidak memakai API arsip.

Jangan mengembalikan folder ini ke route aktif untuk sekadar menampilkan menu.
Pages tidak menjalankan Node.js, auth server, email endpoint, middleware, atau
optimasi gambar dinamis. Pemulihan fitur tersebut membutuhkan host server dan
review konfigurasi, konten template, izin publikasi, serta credential terpisah.

## 6. Pemeriksaan artefak dan manual

`npm run check:export` memeriksa 20 halaman locale, bahasa HTML, canonical,
halaman masuk, `404`, file `.nojekyll`, URL aset/link/form lokal termasuk filename
sertifikat ter-encode, serta ketiadaan route legacy/API. Checker tidak menjalankan
JavaScript browser, simulasi filter, screenshot, atau request hosting.

Sesudah deployment, pemilik memeriksa:

1. URL root membuka English; `/id/` langsung menampilkan Indonesia.
2. Kelima menu desktop/mobile, locale toggle dari detail proyek, Back/Forward.
3. Refresh langsung `/portfolio-v1/id/projects/fms/` dan studi kasus lain.
4. Foto profil, logo, cover SVG, thumbnail/modal enam sertifikat.
5. Filter `?category=research`, kombinasi type/category/search, reset, hasil kosong;
   refresh dan Back/Forward mempertahankan filter. Locale toggle mempertahankan
   query; pencarian diterapkan pada copy bahasa tujuan.
6. Slug tidak dikenal menunjukkan halaman 404, tautan pulang kedua bahasa benar.
7. Dark/light, keyboard/modal/Escape/fokus, reduced motion, desktop/mobile.
8. Canonical/OG berisi domain dan `/portfolio-v1/`, tanpa localhost atau prefix ganda.
9. Contact membuka email/GitHub/LinkedIn yang benar; URL legacy tidak tersedia.

Checklist visual lebih rinci: [SETUP](SETUP.md#5-pemeriksaan-manual-oleh-pemilik).

## 7. Troubleshooting

| Gejala                      | Tindakan                                                                                                 |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| Workflow belum terlihat     | Pastikan file workflow sudah di branch default dan Actions diaktifkan                                    |
| Configure Pages gagal       | Pilih Source GitHub Actions pada Settings → Pages; periksa izin repo/akun                                |
| Deploy menunggu persetujuan | Periksa environment `github-pages` dan aturan branch/environment                                         |
| CSS/aset 404                | Cocokkan `base_path` workflow dan URL Pages; build ulang, jangan upload build root                       |
| Canonical salah             | DOMAIN harus origin; jangan memasukkan path repo; jalankan checker dengan environment build              |
| Refresh detail 404          | Pastikan output `out/<locale>/projects/<slug>/index.html` dan upload seluruh `out/`                      |
| Filter tidak bekerja        | Pastikan JavaScript berhasil dimuat; jangan aktifkan kembali `force-dynamic`/searchParams server         |
| Build gagal font            | Periksa akses Google Fonts; loader Next.js 14 dapat gagal sementara, ulangi build setelah jaringan pulih |
| Build menyebut API/WakaTime | Periksa apakah route lama dikembalikan; build statis saat ini tidak mengeksekusi integrasi tersebut      |

Rujukan: [Next.js 14 static export](https://nextjs.org/docs/14/app/building-your-application/deploying/static-exports),
[GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

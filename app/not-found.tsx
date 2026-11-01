import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-5 p-8">
      <h1 className="text-4xl font-semibold">404</h1>
      <p lang="en">Page not found.</p>
      <p lang="id">Halaman tidak ditemukan.</p>
      <nav aria-label="Portfolio home" className="flex gap-6 underline">
        <Link href="/en/" lang="en">
          Home — English
        </Link>
        <Link href="/id/" lang="id">
          Beranda — Indonesia
        </Link>
      </nav>
    </main>
  );
}

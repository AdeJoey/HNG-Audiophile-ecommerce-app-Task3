// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-almost-black text-white text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-brand-orange">404</h1>
      <p className="text-lg mb-6 opacity-80">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg uppercase tracking-widest transition"
      >
        Go Home
      </Link>
    </div>
  );
}

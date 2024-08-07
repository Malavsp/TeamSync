import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" bg-blue-200  content-center w-auto h-screen flex items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested page.</p>
      <Link
        href="/admin"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Return Home
      </Link>
    </div>
  );
}

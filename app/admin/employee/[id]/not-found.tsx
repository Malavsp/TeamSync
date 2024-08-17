import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-500 w-full h-screen flex flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-4xl font-bold text-white">404 Not Found</h2>
      <p className="text-lg text-white opacity-90">
        Could not find the employee you are looking for !
      </p>
      <Link
        href="/admin/employee"
        className="mt-6 bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 border border-gray-300 rounded-lg shadow-md transition-all duration-200"
      >
        Return
      </Link>
    </div>
  );
}

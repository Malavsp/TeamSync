"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex h-full flex-col items-center justify-center p-6 mt-44">
      <h2 className="text-3xl font-semibold text-center text-gray-800">
        Something went wrong!
      </h2>
      <button
        className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}

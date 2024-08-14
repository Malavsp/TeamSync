import Link from "next/link";

export function UpdateButton({ url }: { url: string }) {
  return (
    <Link
      href={`/admin/${url}/edit`}
      className="p-2 mr-2 border border-b rounded-md hover:bg-gray-100"
    >
      <button>✏️</button>
    </Link>
  );
}

export function DeleteButton({ id }: { id: number }) {
  //   const deleteBlogById = deleteBlog.bind(null, id);
  return (
    <form className="inline">
      <button className="rounded-md border p-2 hover:bg-gray-100">🗑️</button>
    </form>
  );
}

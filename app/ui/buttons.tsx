import { deleteById } from "@/lib/actions";
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

export function DeleteButton({
  id,
  tableName,
}: {
  id: number;
  tableName: string;
}) {
  const deleteByIdAndTable = deleteById.bind(null, id, tableName);
  return (
    <form className="inline" action={deleteByIdAndTable}>
      <button className="rounded-md border p-2 hover:bg-gray-100">🗑️</button>
    </form>
  );
}

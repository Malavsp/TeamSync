import { Button } from "@/app/ui/button";
import Link from "next/link";
import { DeleteButton, UpdateButton } from "@/app/ui/buttons";
import { fetchAllDepartments } from "@/lib/data";
import { notFound } from "next/navigation";

const Department = async () => {
  const departments = await fetchAllDepartments();

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Department List</h3>
      </div>
      <Button variant="secondary" className="border ml-96">
        <Link href="/admin/department/create">Create Department</Link>
      </Button>
      <div className="mt-3">
        <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border ">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="hidden sm:block px-6 py-3">
                  Id.
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {departments.map((d, index) => (
                <tr
                  key={d.id}
                  className="bg-white border-b group/item hover:bg-black-100"
                >
                  <th
                    scope="row"
                    className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {index + 1}
                  </th>
                  <td className=" py-4">{d.name}</td>
                  <td className="px-6 py-4">
                    <UpdateButton url={`department/${d.id}`} />
                    <DeleteButton id={d.id} tableName="Department" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Department;

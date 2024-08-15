import { Button } from "@/app/ui/button";
import { DeleteButton, UpdateButton } from "@/app/ui/buttons";
import Link from "next/link";
import { fetchAllEmployees } from "@/lib/data";
import { notFound } from "next/navigation";
import { UserAndDept } from "@/lib/definitions";
import Image from "next/image";

const Page = async () => {
  const employees: UserAndDept[] = await fetchAllEmployees();

  if (!employees) {
    notFound();
  }

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3 className="">Employee List</h3>
        <Button variant="secondary" className="border ml-96">
          <Link href="/admin/employee/create">Create Employee</Link>
        </Button>
      </div>
      <div className="mt-3"></div>

      <div className="mt-3">
        <div className="relative h-[80vh] overflow-x-auto mt-4 border">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Salary
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e, id) => (
                <tr key={id} className="group/item hover:bg-black-100">
                  <th
                    scope="row"
                    className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium whitespace-nowrap"
                  >
                    <Image
                      src={"/placeh.png"}
                      alt="author"
                      width={40}
                      height={10}
                      className="rounded-full"
                    />
                    {e.fname}
                    <Link
                      className="group/edit invisible hover:color-black-200 group-hover/item:visible"
                      href={`/admin/employee/${e.uid}`}
                    >
                      <span className="group-hover/edit:text-gray-700 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </th>
                  <td className="px-6 py-4">{e.email}</td>
                  <td className="px-6 py-4">{e.salary}</td>
                  <td className="px-6 py-4">{e.name}</td>
                  <td className="px-6 py-4">
                    <UpdateButton url={`employee/${e.uid}`} />
                    <DeleteButton id={e.uid} tableName="Users" />
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

export default Page;

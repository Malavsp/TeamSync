import Link from "next/link";
import Image from "next/image";
import { fetchAllAdmins } from "@/lib/data";
import { User } from "@/lib/definitions";
import { notFound } from "next/navigation";

const Page = async () => {
  const admins: User[] = await fetchAllAdmins();

  if (!admins) {
    notFound();
  }

  return (
    <div className="ms-3 mt-5">
      <div className="mt-4 px-5 pt-3">
        <h3>List of Admins</h3>
        <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border ">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="hidden sm:block px-6 py-3">
                  Admin
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr
                  key={admin.uid}
                  className="bg-white border-b group/item hover:bg-black-100"
                >
                  <th
                    scope="row"
                    className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <Image
                      src={"/placeh.png"}
                      alt="author"
                      width={40}
                      height={10}
                      className="rounded-full"
                    />
                    {admin.fname}
                  </th>
                  <td className="px-6 py-4">{admin.email}</td>
                  <td className="px-6 py-4">
                    <Link
                      className="group/edit invisible hover:color-black-700 group-hover/item:visible ..."
                      href={`/admin/${admin.uid}`}
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

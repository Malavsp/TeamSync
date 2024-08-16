"use client";

import { updateDepartment } from "@/lib/actions";
import { Department } from "@/lib/definitions";
import Link from "next/link";

const EditForm = ({ department }: { department: Department }) => {
  const updateDepartmentById = updateDepartment.bind(null, department.id);
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit Department</h2>
        <form className="w-full" action={updateDepartmentById}>
          <div className="mb-5">
            <label
              htmlFor="department"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <strong>Department:</strong>
            </label>
            <input
              type="text"
              name="department"
              className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={department.name}
              required
            />
          </div>
          <div className="ml-16 mt-10">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit
            </button>
            <Link
              href="/admin/department"
              className="m-9 rounded-lg bg-gray-100 p-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;

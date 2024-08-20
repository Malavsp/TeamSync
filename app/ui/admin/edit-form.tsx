"use client";

import { User } from "@/lib/definitions";
import Link from "next/link";
import Image from "next/image";
import { AdminState, updateAdmin } from "@/lib/actions";
import { useFormState } from "react-dom";

const AdminEditForm = ({ user }: { user: User }) => {
  const initialState: AdminState = { errors: {}, message: null };
  const updateAdminById = updateAdmin.bind(null, user.uid);
  const [state, formAction] = useFormState(updateAdminById, initialState);

  return (
    <form className="max-w-md m-auto" action={formAction}>
      <Image
        src={"/placeh.png"}
        height={20}
        width={60}
        alt="a placeholder image of a user"
        className="rounded-full m-auto"
      ></Image>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          defaultValue={user.email}
          required
        />
        <div>
          {state.errors?.email &&
            state.errors.email.map((error) => (
              <p key={error} className="text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          name="password"
          id="password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          defaultValue={user.password}
          required
        />
        <div>
          {state.errors?.password &&
            state.errors.password.map((error) => (
              <p key={error} className="text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="fname"
            id="fname"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            defaultValue={user.fname}
            required
          />
          <div>
            {state.errors?.firstName &&
              state.errors.firstName.map((error) => (
                <p key={error} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
          <label
            htmlFor="fname"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
          <div>
            {state.message && (
              <p className="text-sm text-red-500 mt-2">{state.message}</p>
            )}
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="lname"
            id="lname"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            defaultValue={user.lname}
            required
          />
          <div>
            {state.errors?.lastName &&
              state.errors.lastName.map((error) => (
                <p key={error} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
          <label
            htmlFor="lname"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Save
      </button>
      <Link
        href="/admin/profile"
        className=" m-3 rounded-lg bg-gray-100 p-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        Cancel
      </Link>
    </form>
  );
};

export default AdminEditForm;
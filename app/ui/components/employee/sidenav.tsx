import { signOut } from "@/auth";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="flex flex-col w-[240px] bg-gray-100 h-full border-r border-gray-300 p-4">
      <div className="pb-3 mb-4">
        <Link href="/employee" className="text-xl font-bold text-black">
          HRM
        </Link>
      </div>
      <ul className="space-y-4">
        <li>
          <Link
            href="/employee"
            className="flex items-center text-black hover:bg-gray-200 p-2 rounded"
          >
            <i className="bi bi-speedometer2 mr-2"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/employee/profile"
            className="flex items-center text-black hover:bg-gray-200 p-2 rounded"
          >
            <i className="bi bi-person mr-2"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <form
            className="flex items-center text-black hover:bg-gray-200 p-2 rounded"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <i className="bi bi-power mr-2"></i>
            <button type="submit">Logout</button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;

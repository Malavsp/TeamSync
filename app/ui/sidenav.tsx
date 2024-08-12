import Link from "next/link";

const SideNav = () => {
  return (
    <div className="flex flex-col w-[240px] bg-gray-100 h-full border-r border-gray-300 p-4">
      <div className="pb-3 mb-4">
        <Link href="/admin" className="text-xl font-bold text-black">
          REACT
        </Link>
      </div>
      <ul className="space-y-4">
        <li>
          <Link
            href="/admin"
            className="flex items-center text-black hover:bg-gray-200 p-2 rounded"
          >
            <i className="bi bi-speedometer2 mr-2"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/employee"
            className="flex items-center text-black hover:bg-gray-200 p-2 rounded"
          >
            <i className="bi bi-people mr-2"></i>
            <span>Manage Employees</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/department"
            className="flex items-center text-black hover:bg-gray-200 p-2 rounded"
          >
            <i className="bi bi-columns mr-2"></i>
            <span>Manage Departments</span>
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="flex items-center text-black hover:bg-gray-200 p-2 rounded"
          >
            <i className="bi bi-person mr-2"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center text-black hover:bg-gray-200 p-2 rounded"
          >
            <i className="bi bi-power mr-2"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;

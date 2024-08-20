import { Stats } from "../ui/components/employee/stats";

const Page = () => {
  return (
    <div className="w-full h-50 p-4 bg-white shadow-md rounded-lg">
      <p className="text-lg font-medium text-gray-700 mb-2">
        Your Attendance Record
      </p>
      <Stats />
    </div>
  );
};

export default Page;

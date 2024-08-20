import EditForm from "@/app/ui/employee/edit-form";
import { auth } from "@/auth";
import { fetchAllDepartments, fetchEmployeeById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditEmployee = async () => {
  const session = await auth();
  const uid = session?.user.uid;
  const [user, departments] = await Promise.all([
    fetchEmployeeById(uid),
    fetchAllDepartments(),
  ]);

  if (!user) {
    notFound();
  }
  return (
    <div className="p-3 rounded w-50">
      <h3 className="text-center mb-7">Edit Profile</h3>
      <EditForm user={user} departments={departments} />
    </div>
  );
};

export default EditEmployee;

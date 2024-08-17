import EditForm from "@/app/ui/employee/edit-form";
import { fetchAllDepartments, fetchEmployeeById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditEmployee = async ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const [user, departments] = await Promise.all([
    fetchEmployeeById(id),
    fetchAllDepartments(),
  ]);

  if (!user) {
    notFound();
  }
  return (
    <div className="p-3 rounded w-50">
      <h3 className="text-center mb-7">Edit Employee</h3>
      <EditForm user={user} departments={departments} />
    </div>
  );
};

export default EditEmployee;

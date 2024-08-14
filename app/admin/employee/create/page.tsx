import CreateForm from "@/app/ui/employee/create-form";
import { fetchAllDepartments } from "@/lib/data";

const AddEmployee = async () => {
  const departments = await fetchAllDepartments();
  return (
    <div className="p-3 rounded mt-12">
      <h3 className="text-center">Create Employee</h3>
      <CreateForm departments={departments} />
    </div>
  );
};

export default AddEmployee;

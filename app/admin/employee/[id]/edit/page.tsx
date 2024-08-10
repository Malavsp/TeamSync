import EditForm from "@/app/ui/employee/edit-form";

const EditEmployee = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  return (
    <div className="p-3 rounded w-50">
      <h3 className="text-center">Edit Employee</h3>
      <EditForm />
    </div>
  );
};

export default EditEmployee;

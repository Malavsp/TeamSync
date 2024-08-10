import EditForm from "@/app/ui/department/edit-form";

const EditDepartment = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  return (
    <div className="d-flex justify-content-center align-items-center h-75 mt-6 ">
      <div className="p-3 rounded w-25">
        <EditForm />
      </div>
    </div>
  );
};

export default EditDepartment;

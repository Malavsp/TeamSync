import AdminEditForm from "@/app/ui/admin/edit-form";
import { auth } from "@/auth";
import { fetchAdminById } from "@/lib/data";

const EditAdmin = async () => {
  const session = await auth();
  const uid = session?.user.uid;
  const user = await fetchAdminById(uid);

  return (
    <div className="p-3 rounded w-50">
      <h3 className="text-center mb-7">Edit Profile</h3>
      <AdminEditForm user={user} />
    </div>
  );
};

export default EditAdmin;

"use server";

import { client } from "@/app/database/config";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

// Form Data Schemas
// Employee Form Validation
const EmployeeFormSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  salary: z.coerce.number(),
  departmentId: z.coerce.number(),
});

// Department Form Validation
const DepartmentFormSchema = z.object({
  id: z.number(),
  departmentName: z.string(),
});

const CreateEmployee = EmployeeFormSchema.omit({ id: true });
const UpdateEmployee = EmployeeFormSchema.omit({ id: true });

const CreateDepartment = DepartmentFormSchema.omit({ id: true });
const UpdateDepartment = DepartmentFormSchema.omit({ id: true });

export async function createEmployee(formData: FormData) {
  const { email, password, firstName, lastName, salary, departmentId } =
    CreateEmployee.parse({
      email: formData.get("email"),
      password: formData.get("password"),
      firstName: formData.get("fname"),
      lastName: formData.get("lname"),
      salary: formData.get("salary"),
      departmentId: formData.get("department"),
    });
  const role = "employee"; // as create new employee
  //   console.log(email, password, firstName, lastName, salary, departmentId);
  try {
    const stmnt = `INSERT INTO Users (email, password, fname, lname, salary, department_id, role)
                     VALUES ($1, $2, $3, $4, $5, $6, $7)
                    `;
    await client.query(stmnt, [
      email,
      password,
      firstName,
      lastName,
      salary,
      departmentId,
      role,
    ]);
  } catch (error) {
    console.error(error);
    return;
  }
  revalidatePath("/admin/employee");
  redirect("/admin/employee");
}
export async function updateEmployee(id: number, formData: FormData) {
  const { email, password, firstName, lastName, salary, departmentId } =
    UpdateEmployee.parse({
      email: formData.get("email"),
      password: formData.get("password"),
      firstName: formData.get("fname"),
      lastName: formData.get("lname"),
      salary: formData.get("salary"),
      departmentId: formData.get("department"),
    });
  //   console.log(email, password, firstName, lastName, salary, departmentId, id);
  try {
    const stmnt = `
      UPDATE Users SET email = $1, password =$2 , fname=$3, lname=$4, salary=$5, department_id=$6
      WHERE uid = $7`;
    const res = await client.query(stmnt, [
      email,
      password,
      firstName,
      lastName,
      salary,
      departmentId,
      id,
    ]);
    // console.log(res);
  } catch (error) {
    console.error(error);
    return;
  }
  revalidatePath("/admin/employee");
  redirect("/admin/employee");
}
export async function createDepartment(formData: FormData) {
  const { departmentName } = CreateDepartment.parse({
    departmentName: formData.get("department"),
  });
  //   console.log(departmentName.toUpperCase());
  try {
    const stmnt = `INSERT INTO department (name)
      VALUES ($1)`;
    const res = await client.query(stmnt, [departmentName.toUpperCase()]);
  } catch (error) {
    return;
  }

  revalidatePath("/admin/department");
  redirect("/admin/department");
}

export async function updateDepartment(id: number, formData: FormData) {
  //   console.log(formData.get("department"));
  //   console.log("in id", id);
  const { departmentName } = UpdateDepartment.parse({
    departmentName: formData.get("department"),
  });

  try {
    const stmnt = `
      UPDATE department
      SET name = $1
      WHERE id = $2`;

    const res = await client.query(stmnt, [departmentName, id]);
    // console.log(res);
  } catch (error) {
    return;
  }
  //   console.log(departmentName);
  revalidatePath("/admin/department");
  redirect("/admin/department");
}

export async function deleteById(id: number, tableName: string) {
  //   console.log(id, tableName);
  try {
    if (tableName === "Users") {
      const stmnt = `DELETE FROM ${tableName} WHERE uid = $1`;
      const res = await client.query(stmnt, [id]);
    } else {
      const stmnt = ` DELETE FROM ${tableName} WHERE id = $1`;
      const res = await client.query(stmnt, [id]);
    }
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/admin");
}

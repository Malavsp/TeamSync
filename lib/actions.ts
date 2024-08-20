"use server";

import { client } from "@/app/database/config";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

// Form Data Schemas
// Employee Form Validation
const EmployeeFormSchema = z.object({
  id: z.number(),
  email: z.string().email({ message: "Please enter valid email address" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must contain at least 8 characters" }),
  firstName: z.string().trim().min(2, { message: "Please enter first name" }),
  lastName: z.string().trim().min(2, { message: "Please enter last name" }),
  salary: z.coerce.number().gt(1, { message: "Please enter salary" }),
  departmentId: z.coerce.number(),
});

// Department Form Validation
const DepartmentFormSchema = z.object({
  id: z.number(),
  departmentName: z
    .string()
    .trim()
    .min(2, { message: "Please enter department name" }),
});

const CreateEmployee = EmployeeFormSchema.omit({ id: true });
const UpdateEmployee = EmployeeFormSchema.omit({ id: true });

const CreateDepartment = DepartmentFormSchema.omit({ id: true });
const UpdateDepartment = DepartmentFormSchema.omit({ id: true });

const UpdateAdmin = EmployeeFormSchema.omit({
  id: true,
  salary: true,
  departmentId: true,
});

export type DepartmentState = {
  errors?: {
    departmentName?: string[];
  };
  message?: string | null;
};

export type EmployeeState = {
  errors?: {
    email?: string[];
    password?: string[];
    firstName?: string[];
    lastName?: string[];
    salary?: string[];
    departmentId?: string[];
  };
  message?: string | null;
};

export type AdminState = {
  errors?: {
    email?: string[];
    password?: string[];
    firstName?: string[];
    lastName?: string[];
  };
  message?: string | null;
};

export async function createEmployee(
  prevData: EmployeeState,
  formData: FormData
) {
  const validatedFields = CreateEmployee.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    firstName: formData.get("fname"),
    lastName: formData.get("lname"),
    salary: formData.get("salary"),
    departmentId: formData.get("department"),
  });
  const role = "employee"; // as creating new employee

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing required fields. Failed to create employee.",
    };
  }

  const { email, password, firstName, lastName, salary, departmentId } =
    validatedFields.data;

  try {
    const stmnt = `
      INSERT INTO Users (email, password, fname, lname, salary, department_id, role)
      VALUES ($1, $2, $3, $4, $5, $6, $7)`;

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
    return { message: "Database Error: Failed to create employee" };
  }
  revalidatePath("/admin/employee");
  redirect("/admin/employee");
}

export async function updateEmployee(
  id: number,
  prevData: EmployeeState,
  formData: FormData
) {
  const validatedFields = UpdateEmployee.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    firstName: formData.get("fname"),
    lastName: formData.get("lname"),
    salary: formData.get("salary"),
    departmentId: formData.get("department"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing required fields. Failed to edit employee.",
    };
  }

  const { email, password, firstName, lastName, salary, departmentId } =
    validatedFields.data;

  try {
    const stmnt = `
      UPDATE Users 
      SET email = $1, password = $2, fname = $3, lname = $4, salary = $5, department_id = $6
      WHERE uid = $7
      RETURNING role`;

    const res = await client.query(stmnt, [
      email,
      password,
      firstName,
      lastName,
      salary,
      departmentId,
      id,
    ]);
  } catch (error) {
    console.error(error);
    return { message: "Database Error: Failed to update employee" };
  }
  revalidatePath("/admin/employee");
  redirect("/admin/employee");
}

export async function createDepartment(
  prevData: DepartmentState,
  formData: FormData
) {
  const validatedFields = CreateDepartment.safeParse({
    departmentName: formData.get("department"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing required fields. Failed to create department.",
    };
  }

  const { departmentName } = validatedFields.data;

  try {
    const stmnt = `
      INSERT INTO department (name)
      VALUES ($1)`;

    const res = await client.query(stmnt, [departmentName.toUpperCase()]);
  } catch (error) {
    return { message: "Database Error: Failed to create department" };
  }

  revalidatePath("/admin/department");
  redirect("/admin/department");
}

export async function updateDepartment(
  id: number,
  prevData: DepartmentState,
  formData: FormData
) {
  const validatedFields = UpdateDepartment.safeParse({
    departmentName: formData.get("department"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing required fields. Failed to edit department.",
    };
  }

  const { departmentName } = validatedFields.data;

  try {
    const stmnt = `
      UPDATE department
      SET name = $1
      WHERE id = $2`;

    const res = await client.query(stmnt, [departmentName, id]);
    // console.log(res);
  } catch (error) {
    return { message: "Database Error: Failed to update department" };
  }
  //   console.log(departmentName);
  revalidatePath("/admin/department");
  redirect("/admin/department");
}

export async function updateAdmin(
  uid: number,
  prevData: AdminState,
  formData: FormData
) {
  const validatedFields = UpdateAdmin.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    firstName: formData.get("fname"),
    lastName: formData.get("lname"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing required fields. Failed to edit profile.",
    };
  }

  const { email, password, firstName, lastName } = validatedFields.data;

  try {
    const stmnt = `
      UPDATE Users 
      SET email = $1, password = $2, fname = $3, lname = $4
      WHERE uid = $5`;

    const res = await client.query(stmnt, [
      email,
      password,
      firstName,
      lastName,
      uid,
    ]);
  } catch (error) {
    console.error(error);
    return { message: "Database Error: Failed to update employee" };
  }
  revalidatePath("/admin/employee");
  redirect("/admin/employee");
}

export async function deleteById(id: number, tableName: string) {
  try {
    if (tableName === "Users") {
      const stmnt = `DELETE FROM ${tableName} WHERE uid = $1`;
      const res = await client.query(stmnt, [id]);
    } else {
      const stmnt = ` DELETE FROM ${tableName} WHERE id = $1`;
      const res = await client.query(stmnt, [id]);
    }
  } catch (error) {
    return { message: `Database Error: Failed to Delete ${tableName}` };
  }

  revalidatePath("/admin");
}

export async function authenticate(
  prevData: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

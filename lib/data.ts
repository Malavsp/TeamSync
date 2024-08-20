import { unstable_noStore as noStore } from "next/cache";
import { client } from "@/app/database/config";
import { Department, User, UserAndDept } from "./definitions";

async function fetchAllDepartments(): Promise<Department[]> {
  noStore();
  try {
    const stmnt = "SELECT * FROM Department ORDER BY id";
    const data = await client.query(stmnt);

    return data.rows;
  } catch (error) {
    console.error("Error in fetching all departments", error);
    throw new Error();
  }
}

async function fetchDepartmentById(id: number): Promise<Department> {
  noStore();
  try {
    const stmnt = `SELECT * FROM Department WHERE id = $1`;
    const data = await client.query(stmnt, [id]);

    return data.rows[0];
  } catch (error) {
    console.error("Error in fetching department by given ID", error);
    throw new Error();
  }
}

async function fetchAllAdmins(): Promise<User[]> {
  noStore();
  try {
    const stmnt = "SELECT * FROM Users WHERE role = 'admin' ORDER BY uid";
    const data = await client.query<User>(stmnt);

    return data.rows;
  } catch (error) {
    console.error("Error in fetching all admins", error);
    throw new Error();
  }
}

async function fetchAdminById(id: number | undefined): Promise<User> {
  noStore();
  try {
    const stmnt = "SELECT * FROM Users WHERE Users.uid = $1";
    const data = await client.query(stmnt, [id]);

    return data.rows[0];
  } catch (error) {
    console.error("Error in fetching empoyee by given Id", error);
    throw new Error();
  }
}

async function fetchEmployeeById(id: number | undefined): Promise<UserAndDept> {
  noStore();
  try {
    const stmnt =
      "SELECT * FROM Users JOIN Department ON Users.department_id = Department.id WHERE Users.uid = $1";
    const data = await client.query(stmnt, [id]);

    return data.rows[0];
  } catch (error) {
    console.error("Error in fetching empoyee by given Id", error);
    throw new Error();
  }
}

async function fetchAllEmployees(): Promise<UserAndDept[]> {
  noStore();
  try {
    const stmnt =
      "SELECT * FROM Users JOIN Department ON Users.department_id = Department.id WHERE role = 'employee' ORDER BY uid;";
    const data = await client.query(stmnt);

    return data.rows;
  } catch (error) {
    console.error("Error in fetching all Users", error);
    throw new Error();
  }
}

export {
  fetchAllAdmins,
  fetchAdminById,
  fetchAllDepartments,
  fetchDepartmentById,
  fetchAllEmployees,
  fetchEmployeeById,
};

export type Employee = {
  id: number;
  fname: string;
  lname: string;
  email: string;
  password: string;
  salary?: number;
  role: string;
  department_id: number;
};

export type Department = {
  id: number;
  name: string;
};

import { type ChartConfig } from "@/app/ui/components/employee/chart";

export type User = {
  uid: number;
  fname: string;
  lname: string;
  email: string;
  password: string;
  salary?: number;
  role: string;
  department_id?: number;
};

export type Department = {
  id: number;
  name: string;
};

export const chartConfig = {
  month: {
    label: "Month",
    color: "#2563eb",
  },
  present: {
    label: "Present",
    color: "#60a5fa",
  },
  absence: {
    label: "Absence",
    color: "#ef2c2c",
  },
} satisfies ChartConfig;

export type UserAndDept = User & Department;

## TeamSync

**TeamSync** is a platform for employee management designed in order to facilitate the administering of workforce and speeds up the implementation of the tedious tasks.

## Features
 - Responsive Design
 - Managament tools 
 - User Authentication and Authorization
 - Data Storage 


## Technologies

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js
- **Database**: Postgres
- **Styling**: Tailwind CSS, Shadcn UI
- **Animations**: Recharts
- **Type Validations**: ZOD 
- **Font**: Google Fonts (Inter)
- **Version Control**: Git, GitHub

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Malavsp/human-resource-management.git
   cd HR
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the required environment variables.
   ```bash
   AUTH_SECRET = <your-secret-key-generated-by-next-auth>
   ```

4. **Run the application:**
    <br>
    <br>
    **Development :**` npm run dev`
    <br>
    <br>
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 
### Employee Management:

**Add, Edit, and Delete Employees:** Admins can perform full CRUD operations on employee records, including personal details, job roles, salaries, and department assignments.
Profile Management: Employees can view and edit their profile information, including personal details and contact information.
Attendance Tracking: Employees can log in to view their attendance records and leave balances.
Department Management:

**Add, Edit, and Delete Departments:** Admins can manage departments, including setting up new departments, editing existing ones, and removing departments no longer in use.
Department Assignment: Easily assign employees to departments or transfer them between departments.
Authentication and Security:

**Secure Login System:** Secure login for both employees and admins, ensuring data privacy and secure access.
Role-Based Access Control: Different access levels for admins and employees, ensuring that users can only access the information and features relevant to their role.



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

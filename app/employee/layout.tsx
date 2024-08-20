import SideNav from "../ui/components/employee/sidenav";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border ">
          <h4 className="m-auto text-2xl">
            <p className="decoration-sky-500/30 inline underline">Welcome</p>{" "}
            back !👋
          </h4>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;

import SideNav from "../ui/sidenav";

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
          <h4 className="m-auto">HR Management System</h4>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;

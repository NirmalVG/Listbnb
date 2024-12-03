import Sidebar from "../Sidebar/Sidebar";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto md:px-44 py-8 flex-1 ">
        <div className="text-sm text-gray-500 mb-6">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>My Profile</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

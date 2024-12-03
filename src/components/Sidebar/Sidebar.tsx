import { Button } from "@/components/ui/button.tsx";
import { Link, useLocation } from "react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const buttons = [
  {
    title: "My Account",
    to: "/profile",
  },
  {
    title: "Profile",
    to: "/edit-profile",
  },
  {
    title: "Ads",
    to: "/ads",
  },
  {
    title: "Post Ad",
    to: "/post-ad",
  },
  {
    title: "Logout",
    to: "",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="md:w-64">
      <Button
        variant="outline"
        size="icon"
        className="md:hidden md:ml-4 mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      <div className={`space-y-6 ${isOpen ? "block" : "hidden"} md:block`}>
        {buttons.map((button) => {
          if (button.title === "Logout") {
            return (
              <button
                key="logout"
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:text-[#FF0066] transition-colors"
              >
                Logout
              </button>
            );
          }

          const isActive = location.pathname === button.to;
          return (
            <Link
              key={button.to}
              to={button.to}
              className={`block px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-black text-white  border rounded-full"
                  : "text-gray-700 hover:text-[#FF0066]"
              }`}
            >
              {button.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

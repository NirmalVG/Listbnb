import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function Header() {
  const navigate = useNavigate();

  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleSignInClick = () => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      const isRegistered = localStorage.getItem("isRegistered");
      navigate(isRegistered ? "/login" : "/register");
    }
  };

  const handlePostAdClick = () => {
    if (isLoggedIn) {
      navigate("/post-ad");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-44 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            className="w-[186px] h-[40px]"
            alt="logo"
          />
        </Link>
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={handleSignInClick}>
            <User className="h-5 w-5" />
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-[#FF0066] ml-4 hover:bg-[#FF0066]/90 rounded-full"
            onClick={handlePostAdClick}
          >
            Post Your Ad →
          </Button>
        </div>
      </div>
    </header>
  );
}

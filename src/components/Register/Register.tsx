import { Button } from "@/components/ui/button.tsx";
import { Link, useLocation } from "react-router";

const Register = () => {
  const location = useLocation();
  return (
    <div className="bg-pink-50 p-8 md:p-12 flex flex-col items-center justify-center text-center">
      <img
        src="/images/thumb-1.png"
        alt="Login illustration"
        width={300}
        height={300}
        className="mb-8"
      />
      <h3 className="text-xl font-semibold mb-2">{`${
        location.pathname === "/login" ? "Don't" : "Already"
      } Have an Account?`}</h3>
      <p className="text-sm text-gray-600 mb-6">
        {location.pathname === "/login"
          ? "To connect with us please register for a new account if you are not having one already."
          : "To connect with us please login to our account if you are having one already."}
      </p>
      <Link to={location.pathname === "/login" ? "/register" : "/login"}>
        <Button
          variant="outline"
          className="border-[#FF0066] text-[#FF0066] hover:bg-[#FF0066] hover:text-white"
        >
          {location.pathname === "/login" ? "Register" : "Login"} →
        </Button>
      </Link>
    </div>
  );
};

export default Register;

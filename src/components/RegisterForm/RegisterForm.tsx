import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="p-8 md:p-12">
      <div className="mb-8 text-center">
        <div className="flex justify-center">
          <img src="/images/logo.png" className=" mb-8" alt="logo" />
        </div>
        <p className="text-sm text-gray-500">
          <b>Listbnb</b> a Largest Classified Listing Marketplace offers perfect
          Ads classifieds...
        </p>
        <h2 className="mt-6 font-bold text-xl">
          Create Your
          <br /> Account
        </h2>
      </div>

      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            console.log("Form values:", values);

            const obj = {
              email: values.email,
              username: values.username,
              password: values.password,
            };

            console.log("Request payload:", obj);

            const response = await axios.post(
              `${import.meta.env.VITE_API_URL}/api/auth/local/register`,
              obj,
              {
                headers: {
                  "Content-Type": "application/json",
                  "x-api-key": import.meta.env.VITE_API_KEY || "",
                },
                timeout: 5000,
              }
            );

            const data = response.data;
            localStorage.setItem("token", data.jwt);
            localStorage.setItem("isRegistered", true);
            navigate("/login");
          } catch (error) {
            if (axios.isAxiosError(error)) {
              console.error("Axios error message:", error.message);
              console.error("Axios error response:", error.response);
            } else {
              console.error("Unexpected error:", error);
            }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-[#FF0066]">*</span>
              </Label>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && touched.email && (
                <div className="text-sm text-red-500">{errors.email}</div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">
                Username <span className="text-[#FF0066]">*</span>
              </Label>
              <Field
                as={Input}
                id="username"
                name="username"
                placeholder="Choose a username"
              />
              {errors.username && touched.username && (
                <div className="text-sm text-red-500">{errors.username}</div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                Password <span className="text-[#FF0066]">*</span>
              </Label>
              <div className="relative">
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
              {errors.password && touched.password && (
                <div className="text-sm text-red-500">{errors.password}</div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                Confirm Password <span className="text-[#FF0066]">*</span>
              </Label>
              <div className="relative">
                <Field
                  as={Input}
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="text-sm text-red-500">
                  {errors.confirmPassword}
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FF0066] hover:bg-[#FF0066]/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Register Now"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;

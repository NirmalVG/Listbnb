import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router";

// Validation schema for login
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 md:p-12">
      <div className="mb-8 text-center">
        <div className="flex justify-center">
          <img src="/images/logo.png" className="mb-8" alt="logo" />
        </div>
        <p className="text-sm text-gray-500">
          Listbnb's Largest Classified Listing Marketplace offers perfect Ads
          classifieds...
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Login To Your
          <br /> Account
        </h2>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              console.log("Form values:", values);
              const obj = {
                identifier: values.username,
                password: values.password,
              };

              const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/auth/local`,
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
              console.log("Login successful:", data);

              // Save the token and navigate
              localStorage.setItem("token", data.jwt);
              navigate("/profile");
            } catch (error) {
              if (axios.isAxiosError(error)) {
                console.error("Axios error message:", error.message);
                console.error("Axios error response:", error.response?.data);
                alert(
                  error.response?.data?.message ||
                    "An error occurred. Please try again."
                );
              } else {
                console.error("Unexpected error:", error);
                alert("An unexpected error occurred. Please try again.");
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Username <span className="text-[#FF0066]">*</span>
                </label>
                <Field
                  as={Input}
                  type="text"
                  name="username"
                  placeholder="Type here"
                  className="w-full"
                />
                {errors.username && touched.username && (
                  <div className="text-sm text-red-500">{errors.username}</div>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Password <span className="text-[#FF0066]">*</span>
                </label>
                <Field
                  as={Input}
                  type="password"
                  name="password"
                  placeholder="Type here"
                  className="w-full"
                />
                {errors.password && touched.password && (
                  <div className="text-sm text-red-500">{errors.password}</div>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#FF0066] hover:bg-[#FF0066]/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login →"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;

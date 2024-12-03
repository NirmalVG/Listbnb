import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  photo: Yup.string()
    .url("Must be a valid URL")
    .required("Photo URL is required"),
  location: Yup.string().required("Location is required"),
  contactNumber: Yup.string().required("Contact number is required"),
});

const EditProfile = () => {
  const handleSubmit = async (
    values: {
      firstName: string;
      lastName: string;
      email: string;
      username: string;
      photo: string;
      location: string;
      contactNumber: string;
    },
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const token = localStorage.getItem("token");

      const obj = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        username: values.username,
        phone: values.contactNumber,
        location: values.location,
      };

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/profile`,
        obj,
        {
          headers: {
            "x-api-key": apiKey,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Profile updated successfully!");
        resetForm();
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("There was an error updating the profile.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-lg px-20 mx-auto">
      <CardContent className="pt-6">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            photo: "",
            location: "",
            contactNumber: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Label htmlFor="firstName">First Name*</Label>
                <Field
                  name="firstName"
                  id="firstName"
                  as={Input}
                  placeholder="Type here"
                />
                {errors.firstName && touched.firstName && (
                  <div className="text-sm text-red-500">{errors.firstName}</div>
                )}
              </div>

              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Field
                  name="lastName"
                  id="lastName"
                  as={Input}
                  placeholder="Type here"
                />
                {errors.lastName && touched.lastName && (
                  <div className="text-sm text-red-500">{errors.lastName}</div>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email*</Label>
                <Field
                  name="email"
                  id="email"
                  as={Input}
                  type="email"
                  placeholder="Type here"
                />
                {errors.email && touched.email && (
                  <div className="text-sm text-red-500">{errors.email}</div>
                )}
              </div>

              <div>
                <Label htmlFor="username">Username*</Label>
                <Field
                  name="username"
                  id="username"
                  as={Input}
                  placeholder="Type here"
                />
                {errors.username && touched.username && (
                  <div className="text-sm text-red-500">{errors.username}</div>
                )}
              </div>

              <div>
                <Label htmlFor="photo">Photo URL*</Label>
                <Field
                  name="photo"
                  id="photo"
                  as={Input}
                  placeholder="Image URL"
                />
                {errors.photo && touched.photo && (
                  <div className="text-sm text-red-500">{errors.photo}</div>
                )}
              </div>

              <div>
                <Label htmlFor="location">Location*</Label>
                <Field
                  name="location"
                  id="location"
                  as={Input}
                  placeholder="Type here"
                />
                {errors.location && touched.location && (
                  <div className="text-sm text-red-500">{errors.location}</div>
                )}
              </div>

              <div>
                <Label htmlFor="contactNumber">Contact Number*</Label>
                <Field
                  name="contactNumber"
                  id="contactNumber"
                  as={Input}
                  placeholder="Type here"
                  type="tel"
                />
                {errors.contactNumber && touched.contactNumber && (
                  <div className="text-sm text-red-500">
                    {errors.contactNumber}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FF0066] hover:bg-[#FF1A75]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default EditProfile;

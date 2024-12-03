import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  postAdSchema,
  type PostAdFormValues,
} from "@/lib/schemas/post-ad-schema";
import { Label } from "@/components/ui/label";

const PostAdForm = () => {
  const initialValues: PostAdFormValues = {
    title: "",
    price: 0,
    description: "",
    photos: "",
  };

  const handleSubmit = async (
    values: PostAdFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const token = localStorage.getItem("token");

      if (!apiKey || !token) {
        throw new Error("API key or token missing. Unable to proceed.");
      }

      console.log("Form values:", values);

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("price", String(values.price));
      formData.append("description", values.description);

      formData.append("image", values.photos);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/advertisements`,
        {
          method: "POST",
          headers: {
            "x-api-key": apiKey,
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create advertisement");
      }

      console.log("Advertisement created successfully");
      resetForm();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error creating advertisement:", error.message);
      } else {
        console.error("Error creating advertisement:", error);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={postAdSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6 mx-auto max-w-full">
          <div className="w-full">
            <Label htmlFor="title">
              Ad Title <span className="text-[#FF0066]">*</span>
            </Label>
            <Field name="title">
              {({ field }: any) => (
                <Input
                  id="title"
                  placeholder="Type here"
                  className="w-full"
                  {...field}
                />
              )}
            </Field>
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="w-full">
            <Label htmlFor="price">
              Price <span className="text-[#FF0066]">*</span>
            </Label>
            <Field name="price">
              {({ field }: any) => (
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  placeholder="Type here"
                  className="w-full"
                  {...field}
                />
              )}
            </Field>
            <ErrorMessage
              name="price"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="w-full">
            <Label htmlFor="description">
              Description <span className="text-[#FF0066]">*</span>
            </Label>
            <Field name="description">
              {({ field }: any) => (
                <Textarea
                  id="description"
                  placeholder="Type here"
                  className="min-h-[120px] w-full"
                  {...field}
                />
              )}
            </Field>
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="w-full">
            <Label htmlFor="photos">
              Image URL <span className="text-[#FF0066]">*</span>
            </Label>
            <Field name="photos">
              {({ field }: any) => (
                <Input
                  id="photos"
                  type="url"
                  placeholder="Enter image URL"
                  className="w-full"
                  {...field}
                />
              )}
            </Field>
            <ErrorMessage
              name="photos"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#FF0066] hover:bg-[#FF0066]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Posting..." : "Post"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PostAdForm;

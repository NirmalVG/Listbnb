import * as Yup from "yup";

export const postAdSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  price: Yup.number()
    .min(0, "Price must be a positive number")
    .required("Price is required"),
  description: Yup.string().required("Description is required"),
  photos: Yup.string()
    .url("Please enter a valid URL")
    .required("Image URL is required"),
});

export type PostAdFormValues = {
  title: string;
  price: number;
  description: string;
  photos: string;
};

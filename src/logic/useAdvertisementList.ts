import { useQuery } from "react-query";
import axios from "axios";

const useAdvertisementList = () => {
  const fetchAdvertisements = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/advertisements`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${import.meta.env.VITE_API_KEY}`,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  };

  return useQuery(["advertisements"], fetchAdvertisements);
};

export default useAdvertisementList;

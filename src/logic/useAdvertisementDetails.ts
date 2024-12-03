import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router";

const useAdvertisementDetails = () => {
  const { id } = useParams();

  const fetchAdvertisementDetail = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/advertisements/${id}`,
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
  return useQuery(["advertiseDetail"], fetchAdvertisementDetail);
};

export default useAdvertisementDetails;

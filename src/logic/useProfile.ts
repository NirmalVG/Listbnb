import { useQuery } from "react-query";
import axios from "axios";

const useProfile = () => {
  const fetchProfile = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/profile`,
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
  return useQuery(["profile"], fetchProfile);
};

export default useProfile;

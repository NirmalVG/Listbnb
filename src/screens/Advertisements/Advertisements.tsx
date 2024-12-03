import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useAdvertisementList from "@/logic/useAdvertisementList";
import { Link } from "react-router";
import { useState } from "react";
import axios from "axios";

interface Ad {
  id: string;
  title: string;
  location: string;
  timePosted: string;
  price: number;
  image: string;
}

const Advertisements = () => {
  const { data, error, isLoading, refetch } = useAdvertisementList();
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error loading products</div>
    );

  const handleDelete = async (adId: string) => {
    setIsDeleting(adId);

    try {
      const token = localStorage.getItem("token");
      const apiKey = import.meta.env.VITE_API_KEY;

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/advertisements/${adId}`,
        {
          headers: {
            "x-api-key": apiKey || "",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      refetch();
    } catch (error) {
      console.error("Failed to delete advertisement:", error);
    } finally {
      setIsDeleting(null);
    }
  };

  return (
    <div className="flex-1 p-6">
      <div className="space-y-4">
        {data.map((ad: Ad) => (
          <Card key={ad.id} className="p-4">
            <div className="flex items-center gap-4">
              <div className="h-24 w-24 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-medium">{ad.title}</h3>
                <div className="text-sm text-gray-500">
                  {ad.location} · {ad.timePosted}
                </div>
                <div className="mt-1 font-medium">${ad.price.toFixed(2)}</div>
              </div>

              <div className="flex gap-2">
                <Link to={`/ad-detail/${ad.id}`}>
                  <Button variant="outline" className="text-gray-600">
                    View
                  </Button>
                </Link>

                <Button
                  onClick={() => handleDelete(ad.id)}
                  disabled={isDeleting === ad.id}
                  className={`bg-[#FF0066] hover:bg-[#FF1A75] text-white ${
                    isDeleting === ad.id ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isDeleting === ad.id ? "Deleting..." : "Delete"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Advertisements;

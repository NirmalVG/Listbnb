import { Button } from "@/components/ui/button";

interface AdCardProps {
  title: string;
  location: string;
  timeAgo: string;
  price: number;
  image: string;
}

export function AdCard({
  title,
  location,
  timeAgo,
  price,
  image,
}: AdCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <img
        src={image}
        alt={title}
        className="rounded-lg object-cover w-[120px] h-[120px] sm:w-auto"
      />

      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">
          {location} · {timeAgo}
        </p>
        <p className="text-lg font-semibold mt-2">${price.toFixed(2)}</p>
      </div>

      <div className="flex gap-2 w-full sm:w-auto">
        <Button variant="outline" size="sm" className="flex-1 sm:flex-initial">
          View
        </Button>
        <Button
          variant="default"
          size="sm"
          className="bg-[#FF0066] hover:bg-[#FF0066]/90 flex-1 sm:flex-initial"
        >
          Edit Ad
        </Button>
      </div>
    </div>
  );
}

export default AdCard;

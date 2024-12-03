import { Link } from "react-router";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, title, price, image }: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
      <Link to={`/ad-detail/${id}`}>
        <div className="aspect-square relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/product/${id}`}>
            <h3 className="font-medium text-gray-800 text-sm line-clamp-2 hover:text-[#FF0066] transition-colors">
              {title}
            </h3>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0 text-gray-400 hover:text-[#FF0066]"
          >
            {/* <Heart className="h-5 w-5" /> */}
          </Button>
        </div>

        <div className="mt-3 flex items-center">
          <span className="text-lg font-semibold text-[#FF0066]">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

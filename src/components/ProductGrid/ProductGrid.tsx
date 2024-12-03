import ProductCard from "../ProductCard/ProductCard";
import useAdvertisementList from "@/logic/useAdvertisementList";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

const ProductGrid = () => {
  const { data, error, isLoading } = useAdvertisementList();

  // Handle states
  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error loading products</div>
    );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-[#f50963] text-lg font-semibold">WHAT'S NEW</p>
        <h2 className="text-3xl font-bold text-gray-800">
          Fresh Recommendations
        </h2>
        <p className="text-gray-500 mt-2">
          Discover the latest deals curated just for you
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <h2 className="text-center col-span-full text-gray-500">
            No Products Found
          </h2>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;

import PostAdForm from "@/components/PostAdForm/PostAdForm";
import { Sidebar } from "lucide-react";

const PostAdPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex-1">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Post Ad</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 max-w-2xl">
          <div className="bg-white rounded-lg p-6">
            <h1 className="text-2xl font-semibold mb-6">Post Your Ad</h1>
            <PostAdForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAdPage;

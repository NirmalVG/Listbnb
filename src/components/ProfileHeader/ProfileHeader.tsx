import { Button } from "@/components/ui/button";
import useProfile from "@/logic/useProfile";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router";

const ProfileHeader = () => {
  const { data, error, isLoading } = useProfile();

  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error loading products</div>
    );

  return (
    <>
      <div className="p-4 sm:p-6 bg-white rounded-lg">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <img
              src={image}
              alt="Profile picture"
              className="rounded-full w-[80px] h-[80px]"
            /> */}
            <div>
              <h2 className="text-xl font-semibold">
                {data.firstName} {data.lastName}
              </h2>
              {/* <p className="text-sm text-gray-500 mb-4">Member since 2019</p> */}

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{data.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{data.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{data.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <Link to="/edit-profile">
            <Button variant="outline" size="sm" className="mt-4 sm:mt-0">
              Edit Profile
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;

import AdCard from "@/components/AdCard/AdCard";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import Advertisements from "../Advertisements/Advertisements";

const ads = [
  {
    title: "Luxury couple apartment",
    location: "Dallas, Texas",
    timeAgo: "24hrs ago",
    price: 124.8,
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    title: "Beats Studio 3 Wireless Over Ear",
    location: "Dallas, Texas",
    timeAgo: "24hrs ago",
    price: 124.8,
    image: "/placeholder.svg?height=120&width=120",
  },
];

const Profile = () => {
  return (
    <div className="flex-1 space-y-6">
      <ProfileHeader />

      {/* Ads Section */}
      <Advertisements />
    </div>
  );
};

export default Profile;

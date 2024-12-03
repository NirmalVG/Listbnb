import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import Advertisements from "../Advertisements/Advertisements";

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

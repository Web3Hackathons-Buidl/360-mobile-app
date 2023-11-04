import FooterNav from "./common/FooterNav";
import ProfileHeader from "./ProfileHeader";
import ProfileMain from "./ProfileMain";

const Profile = ({ goProfileAndWithdraw }) => {
  return (
    <div>
      <ProfileHeader goProfileAndWithdraw={goProfileAndWithdraw} />
      <ProfileMain />
      <FooterNav />
    </div>
  );
};

export default Profile;

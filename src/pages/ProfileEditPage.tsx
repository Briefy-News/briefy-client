import FadeInLayout from 'src/components/Layout/FadeInLayout';
import MyInterestEdit from 'src/components/Profile/ProfileEdit/MyInterestEdit';
import MyAccountInfo from 'src/components/Profile/MyAccountInfo';
import Logout from 'src/components/Profile/ProfileEdit/Logout';

function ProfileEditPage() {
  return (
    <FadeInLayout>
      <MyInterestEdit />
      <MyAccountInfo />
      <Logout />
    </FadeInLayout>
  );
}

export default ProfileEditPage;

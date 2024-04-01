import { Helmet } from 'react-helmet';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import MyInterestEdit from 'src/components/Profile/ProfileEdit/MyInterestEdit';
import MyAccountInfo from 'src/components/Profile/MyAccountInfo';
import Logout from 'src/components/Profile/ProfileEdit/Logout';

function ProfileEditPage() {
  return (
    <>
      <Helmet>
        <meta property="og:description" content="프로필 수정하기" />
        <title>Briefy - 프로필 수정</title>
      </Helmet>
      <FadeInLayout>
        <MyInterestEdit />
        <MyAccountInfo />
        <Logout />
      </FadeInLayout>
    </>
  );
}

export default ProfileEditPage;

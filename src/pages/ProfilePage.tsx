import { useEffect } from 'react';
import { Outlet, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { profilePaths } from 'src/utils/paths';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import MyNewsInfo from 'src/components/Profile/MyNewsInfo';

function ProfilePage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isMyArticlePage = useMatch('/profile/article/:state');
  const isProfilePage = isMyArticlePage || profilePaths.includes(pathname);
  useEffect(() => {
    if (!isProfilePage) {
      navigate('/profile/article/all', { replace: true });
    }
  }, []);

  return (
    <>
      <FadeInLayout>
        <DefaultLayout>
          <MyNewsInfo />
          <Outlet />
        </DefaultLayout>
      </FadeInLayout>
    </>
  );
}

export default ProfilePage;

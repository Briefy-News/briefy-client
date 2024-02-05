import { useEffect } from 'react';
import { Outlet, useLocation, useMatch, useNavigate } from 'react-router-dom';
import Footer from 'src/components/Footer/Footer';
import { newsPaths } from 'src/utils/paths';

function NewsPage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = useMatch('/news/:category');
  const postId = useMatch('/news/:category/:postId');
  const sub = useMatch('/news/:category/:postId/sub');
  const isCategoryPage = category || postId || sub;
  const isNewsPage = isCategoryPage || newsPaths.includes(pathname);
  useEffect(() => {
    if (!isNewsPage) {
      navigate('/news/all', { replace: true });
    }
  }, []);

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default NewsPage;

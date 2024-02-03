import { useEffect } from 'react';
import { Outlet, useLocation, useMatch, useNavigate } from 'react-router-dom';
import Footer from 'src/components/Footer/Footer';

function NewsPage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isCategoryPage = useMatch('/news/:category');
  const isNewsPage = isCategoryPage || ['/news/search', '/news/search/newsletter', '/news/search/article'].includes(pathname);
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

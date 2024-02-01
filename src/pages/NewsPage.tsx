import { useEffect } from 'react';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import Footer from 'src/components/Footer/Footer';

function NewsPage() {
  const navigate = useNavigate();
  const isCategoryPage = useMatch('/news/:category');
  useEffect(() => {
    if (!isCategoryPage) {
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

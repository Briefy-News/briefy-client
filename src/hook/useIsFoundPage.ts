import { useLocation, useMatch } from 'react-router-dom';

const useIsFoundPage = () => {
  const categoryPage = useMatch('/news/:category');
  const { pathname } = useLocation();
  const isFoundPage = categoryPage || ['/', '/interest', '/news'].includes(pathname);
  return isFoundPage;
};

export default useIsFoundPage;

import { useLocation, useMatch } from 'react-router-dom';

const useIsNotFoundPage = () => {
  const categoryPage = useMatch('/news/:category');
  const { pathname } = useLocation();
  const isNotFoundPage = categoryPage || ['/', '/interest', '/news'].includes(pathname);
  return isNotFoundPage;
};

export default useIsNotFoundPage;

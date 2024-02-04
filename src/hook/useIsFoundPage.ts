import { useLocation, useMatch } from 'react-router-dom';
import { allPaths } from 'src/utils/paths';

const useIsFoundPage = () => {
  const { pathname } = useLocation();
  const isCategoryPage = useMatch('/news/:category');
  const isMyArticlePage = useMatch('/profile/article/:state');
  const isFoundPage = isCategoryPage || isMyArticlePage || allPaths.includes(pathname);
  return isFoundPage;
};

export default useIsFoundPage;

import { useLocation, useMatch } from 'react-router-dom';
import { allPaths } from 'src/utils/paths';

const useIsFoundPage = () => {
  const { pathname } = useLocation();
  const category = useMatch('/news/:category');
  const postId = useMatch('/news/:category/:postId');
  const sub = useMatch('/news/:category/:postId/sub');
  const isCategoryPage = category || postId || sub;
  const isMyArticlePage = useMatch('/profile/article/:state');
  const isFoundPage = isCategoryPage || isMyArticlePage || allPaths.includes(pathname);
  return isFoundPage;
};

export default useIsFoundPage;

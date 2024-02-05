import { Routes, Route } from 'react-router-dom';
import useIsFoundPage from 'src/hook/useIsFoundPage';
import 'src/style/global.css';

import Header from 'src/components/Header/Header';
import Nav from 'src/components/Nav/Nav';
import MainPage from 'src/pages/MainPage';
import InterestPage from 'src/pages/InterestPage';
import CategoryPage from 'src/pages/CategoryPage';
import NewsPage from 'src/pages/NewsPage';
import NotFoundPage from 'src/pages/NotFoundPage';
import SearchPage from 'src/pages/SearchPage';
import SearchNewsLetterPage from 'src/pages/SearchNewsLetterPage';
import SearchArticlePage from 'src/pages/SearchArticlePage';
import ProfilePage from 'src/pages/ProfilePage';
import MyNewsletterPage from 'src/pages/MyNewsletterPage';
import MyArticlePage from 'src/pages/MyArticlePage';
import SavedArticlePage from 'src/pages/SavedArticlePage';
import ProfileEditPage from 'src/pages/ProfileEditPage';
import NewsPostPage from 'src/pages/NewsPostPage';
import NewsPostSubPage from 'src/pages/NewsPostSubPage';

function App() {
  const isFoundPage = useIsFoundPage();

  return (
    <div className="relative">
      {isFoundPage && (
        <>
          <Header />
          <Nav />
        </>
      )}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/interest" element={<InterestPage />} />
        <Route path="/news" element={<NewsPage />}>
          <Route path="/news/:category" element={<CategoryPage />} />
          <Route path="/news/:category/:postId" element={<NewsPostPage />} />
          <Route path="/news/:category/:postId/sub" element={<NewsPostSubPage />} />
          <Route path="/news/search" element={<SearchPage />} />
          <Route path="/news/search/newsletter" element={<SearchNewsLetterPage />} />
          <Route path="/news/search/article" element={<SearchArticlePage />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="/profile/article/:state" element={<MyArticlePage />} />
          <Route path="/profile/newsletter" element={<MyNewsletterPage />} />
          <Route path="/profile/saved" element={<SavedArticlePage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

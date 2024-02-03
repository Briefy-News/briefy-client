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
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;

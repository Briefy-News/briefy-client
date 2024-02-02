import { Routes, Route } from 'react-router-dom';
import 'src/style/global.css';

import Header from 'src/components/Header/Header';
import Nav from 'src/components/Nav/Nav';
import MainPage from 'src/pages/MainPage';
import InterestPage from 'src/pages/InterestPage';
import CategoryPage from 'src/pages/CategoryPage';
import NewsPage from 'src/pages/NewsPage';
import NotFoundPage from 'src/pages/NotFoundPage';
import useIsFoundPage from 'src/hook/useIsFoundPage';

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
      </Routes>
    </div>
  );
}

export default App;

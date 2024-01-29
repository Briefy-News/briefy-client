import { Routes, Route } from 'react-router-dom';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import 'src/style/global.css';

import Header from 'src/components/Header/Header';
import Nav from 'src/components/Nav/Nav';
import MainPage from 'src/pages/MainPage';
import InterestPage from 'src/pages/InterestPage';
import CategoryPage from 'src/pages/CategoryPage';

function App() {
  return (
    <DefaultLayout>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/interest" element={<InterestPage />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;

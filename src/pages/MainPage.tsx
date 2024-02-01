import FadeInLayout from 'src/components/Layout/FadeInLayout';
import AddToHomeScreen from 'src/components/Main/AddToHomeScreen';
import Banner from 'src/components/Main/Banner';
import ArticleSwiper from 'src/components/Swiper/ArticleSwiper';
import NewsLetterSwiper from 'src/components/Swiper/NewsLetterSwiper';
import Footer from 'src/components/Footer/Footer';

function MainPage() {
  return (
    <>
      <FadeInLayout>
        <Banner />
        <NewsLetterSwiper />
        <AddToHomeScreen />
        <ArticleSwiper />
        <Footer />
      </FadeInLayout>
    </>
  );
}

export default MainPage;

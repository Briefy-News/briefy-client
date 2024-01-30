import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import AddToHomeScreen from 'src/components/Main/AddToHomeScreen';
import Banner from 'src/components/Main/Banner';
import NewsLetterSwiper from 'src/components/Swiper/NewsLetterSwiper';

function MainPage() {
  return (
    <>
      <FadeInLayout>
        <DefaultLayout>
          <Banner />
        </DefaultLayout>
        <NewsLetterSwiper />
        <DefaultLayout>
          <AddToHomeScreen />
        </DefaultLayout>
      </FadeInLayout>
    </>
  );
}

export default MainPage;

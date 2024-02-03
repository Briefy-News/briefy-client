import FadeInLayout from 'src/components/Layout/FadeInLayout';
import AddToHomeScreen from 'src/components/Main/AddToHomeScreen';
import Banner from 'src/components/Main/Banner';
import ArticleSwiper from 'src/components/Swiper/ArticleSwiper';
import NewsLetterSwiper from 'src/components/Swiper/NewsLetterSwiper';
import Footer from 'src/components/Footer/Footer';

function MainPage() {
  const trendTitle = (
    <div className="block md:flex md:items-center text-base md:text-[1.5rem] text-black900 font-light">
      브리피에서&nbsp;
      <h2><span className="font-semibold">요즘 핫한 뉴스레터</span>를 소개해드려요</h2>
    </div>
  );

  const latestTitle = (
    <div className="block md:flex md:items-center text-base md:text-[1.5rem] text-black900 font-light">
      <div className="flex"><h2><span className="font-semibold">신규 발행된 아티클</span></h2>은&nbsp;</div>
      <div>여기 다~ 있어요</div>
    </div>
  );

  return (
    <>
      <FadeInLayout>
        <Banner />
        <div className="pt-[32px] md:pt-[60px] lg:pt-[142px] pb-[32px] md:pb-[80px]">
          <NewsLetterSwiper title={trendTitle} />
        </div>
        <AddToHomeScreen />
        <div className="pt-[32px] md:pt-[80px] pb-[28px] md:pb-[120px]">
          <ArticleSwiper title={latestTitle} />
        </div>
        <Footer />
      </FadeInLayout>
    </>
  );
}

export default MainPage;

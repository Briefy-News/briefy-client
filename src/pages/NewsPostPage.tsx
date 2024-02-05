import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import NewsSubscribe from 'src/components/NewsPost/NewsSubscribe';
import NextUploadDate from 'src/components/NewsPost/NextUploadDate';
import PublishCycleCalendar from 'src/components/NewsPost/PublishCycleCalendar';
import ArticleSwiper from 'src/components/Swiper/ArticleSwiper';

function NewsPostPage() {
  const latestTitle = (
    <div className="block md:flex md:items-center text-base md:text-[1.5rem] text-black900 font-light">
      <h2 className="font-semibold">최근 아티클</h2>
    </div>
  );

  return (
    <FadeInLayout>
      <DefaultLayout>
        <div className="min-w769-max-w1180:block lg:flex gap-6 pt-[24px] md:pt-[60px] pb-[40px] md:pb-[56px]">
          <NewsSubscribe />
          <div className="w-full">
            <NextUploadDate />
            <PublishCycleCalendar />
          </div>
        </div>
      </DefaultLayout>
      <div className="pb-[36px] md:pb-[104px]">
        <ArticleSwiper title={latestTitle} num={8} />
      </div>
    </FadeInLayout>
  );
}

export default NewsPostPage;

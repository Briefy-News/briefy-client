import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import Calendar from 'src/components/NewsPost/Calendar';
import NewsSubscribe from 'src/components/NewsPost/NewsSubscribe';
import NextUploadDate from 'src/components/NewsPost/NextUploadDate';
import PublishCycleCalendar from 'src/components/NewsPost/PublishCycleCalendar';
import ArticleSwiper from 'src/components/Swiper/ArticleSwiper';
import useCategoryTxt from 'src/hook/useCategoryTxt';

function NewsPostPage() {
  const { category } = useParams();
  const categoryTxt = useCategoryTxt(category);

  const latestTitle = (
    <div className="block md:flex md:items-center text-base md:text-[1.5rem] text-black900 font-light">
      <h2 className="font-semibold">최근 아티클</h2>
    </div>
  );

  return (
    <>
      <Helmet>
        <meta property="og:description" content={`${categoryTxt} 뉴스 보러가기`} />
        <title>Briefy - {categoryTxt}</title>
      </Helmet>
      <FadeInLayout>
        <DefaultLayout>
          <div className="min-w769-max-w1180:block lg:flex gap-6 pt-[24px] md:pt-[60px] pb-[40px] md:pb-[56px]">
            <NewsSubscribe />
            <div className="w-full">
              <NextUploadDate />
              <div className="hidden md:block">
                <Calendar />
              </div>
              <PublishCycleCalendar />
            </div>
          </div>
        </DefaultLayout>
        <div className="pb-[36px] md:pb-[104px]">
          <ArticleSwiper title={latestTitle} num={8} />
        </div>
      </FadeInLayout>
    </>
  );
}

export default NewsPostPage;

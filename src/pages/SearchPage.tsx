import { NavLink, useLocation } from 'react-router-dom';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import ArticleSwiper from 'src/components/Swiper/ArticleSwiper';
import NewsLetterSwiper from 'src/components/Swiper/NewsLetterSwiper';

function SearchPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q');

  return (
    <FadeInLayout>
      <DefaultLayout>
        <div className="w-full flex justify-center pt-[50px] md:pt-[70px] pb-[40px] md:pb-[24px]">
          <h2 className="h-[56px]  md:h-[36px] text-center block md:flex justify-center text-black900 text-xl md:text-[1.75rem] font-light">
            <span className="font-semibold">{query}</span>&nbsp;에 대한 검색 결과는&nbsp;
            <div><span className="font-semibold text-primary">총 5개</span>예요.</div>
          </h2>
        </div>
      </DefaultLayout>

      <section>
        <DefaultLayout>
          <div className="h-[44px] md:h-[64px] pb-[8px] md:pb-[16px] flex items-center justify-between">
            <h2 className="text-base md:text-2xl font-light">
              <span className="font-semibold">뉴스레터</span>&nbsp;검색결과&nbsp;<span className="font-semibold text-primary">4개</span>
            </h2>
            <NavLink to={`/news/search/newsletter?q=${query}`} className="text-black500 underline font-light text-xs md:text-base">더보기</NavLink>
          </div>
        </DefaultLayout>
        <NewsLetterSwiper num={3} />
      </section>

      <section className="pt-[36px] md:pt-[40px] pb-[12px] md:pb-[106px]">
        <DefaultLayout>
          <div className="h-[44px] md:h-[64px] pb-[8px] md:pb-[16px] flex items-center justify-between">
            <h2 className="text-base md:text-2xl font-light">
              <span className="font-semibold">아티클</span>&nbsp;검색결과&nbsp;<span className="font-semibold text-primary">4개</span>
            </h2>
            <NavLink to={`/news/search/article?q=${query}`} className="text-black500 underline font-light text-xs md:text-base">더보기</NavLink>
          </div>
        </DefaultLayout>
        <ArticleSwiper num={4} />
      </section>
    </FadeInLayout>
  );
}

export default SearchPage;

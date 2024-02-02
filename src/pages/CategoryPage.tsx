import { useParams } from 'react-router-dom';
import useCategoryTxt from 'src/hook/useCategoryTxt';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';

import NewsLetterSwiper from 'src/components/Swiper/NewsLetterSwiper';

function CategoryPage() {
  const { category } = useParams();
  const categoryTxt = useCategoryTxt(category);

  const trendWeeklyView = (
    <div className="text-base md:text-[1.5rem] text-black900 font-light">
      <h2 className="block md:flex md:items-center">{categoryTxt} 주간 조회순&nbsp;<div className="font-semibold">TOP 10</div></h2>
    </div>
  );

  return (
    <>
      <FadeInLayout>
        <div className="pt-[40px] md:pt-[70px] pb-[64px] md:pb-[80px]">
          <NewsLetterSwiper title={trendWeeklyView} />
        </div>
        <DefaultLayout>
          <div>CategoryPage</div>
          {category}
        </DefaultLayout>
      </FadeInLayout>
    </>
  );
}

export default CategoryPage;

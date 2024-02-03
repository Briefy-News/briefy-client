import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useCategoryTxt from 'src/hook/useCategoryTxt';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';

import NewsLetterSwiper from 'src/components/Swiper/NewsLetterSwiper';
import CustomSelect from 'src/components/common/CustomSelect';
import InfiniteNewsLetter from 'src/components/common/InfiniteNewsLetter';
import InfiniteArticle from 'src/components/common/InfiniteArticle';

function CategoryPage() {
  const [orderBy, setOrderBy] = useState('subscribers');
  const { category } = useParams();
  const categoryTxt = useCategoryTxt(category);

  const trendWeeklyView = (
    <div className="text-base md:text-[1.5rem] text-black900 font-light">
      <h2 className="block md:flex md:items-center">{categoryTxt} 주간 조회순&nbsp;<div className="font-semibold">TOP 10</div></h2>
    </div>
  );

  const orderByList = [
    { value: 'subscribers', label: '구독 많은순' },
    { value: 'latest', label: '최신순' },
    { value: 'oldest', label: '오래된순' },
    { value: 'alphabet', label: '가나다순' },
  ];
  const customSelectProps = { orderBy, setOrderBy, list: orderByList };

  return (
    <>
      <FadeInLayout>
        <div className="pt-[40px] md:pt-[70px] pb-[64px] md:pb-[80px]">
          <NewsLetterSwiper title={trendWeeklyView} />
        </div>
        <DefaultLayout>
          <div className="h-[44px] md:h-[62px] w-full flex items-center">
            <h2 className="text-base md:text-2xl font-light text-black900">
              비지니스 뉴스레터
            </h2>
          </div>
          <div className="w-full flex justify-end">
            <CustomSelect {...customSelectProps} />
          </div>
          <div className="pb-[36px] pt-[16px] md:pt-[24px] md:pb-[120px]">
            <InfiniteNewsLetter />
          </div>
        </DefaultLayout>
      </FadeInLayout>
    </>
  );
}

export default CategoryPage;

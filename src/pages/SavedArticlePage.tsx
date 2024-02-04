import { useState } from 'react';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import CustomSelect from 'src/components/common/CustomSelect';
import InfiniteArticle from 'src/components/common/InfiniteArticle';

function SavedArticlePage() {
  const [orderBy, setOrderBy] = useState('latest');
  const orderByList = [
    { value: 'subscribers', label: '구독 많은순' },
    { value: 'latest', label: '최신순' },
    { value: 'oldest', label: '오래된순' },
    { value: 'alphabet', label: '가나다순' },
  ];
  const customSelectProps = { orderBy, setOrderBy, list: orderByList };

  return (
    <FadeInLayout>
      <h2 className="mt-[16px] md:mt-[40px] flex items-center h-[44px] md:h-[64px] text-base md:text-2xl text-black900 font-semibold">
        저장된 아티클
      </h2>
      <div className="flex justify-end">
        <CustomSelect {...customSelectProps} />
      </div>
      <div className="pt-[16px] md:pt-[24px] pb-[36px] md:pb-[132px]">
        <InfiniteArticle />
      </div>
    </FadeInLayout>
  );
}

export default SavedArticlePage;

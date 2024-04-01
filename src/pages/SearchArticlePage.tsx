import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import CustomSelect from 'src/components/common/CustomSelect';
import InfiniteArticle from 'src/components/common/InfiniteArticle';

function SearchArticlePage() {
  const [orderBy, setOrderBy] = useState('subscribers');
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q');

  const orderByList = [
    { value: 'subscribers', label: '구독 많은순' },
    { value: 'latest', label: '최신순' },
    { value: 'oldest', label: '오래된순' },
    { value: 'alphabet', label: '가나다순' },
  ];
  const customSelectProps = { orderBy, setOrderBy, list: orderByList };

  return (
    <>
      <Helmet>
        <meta property="og:description" content={`${query}와 관련된 뉴스 아티클 보러가기`} />
        <title>{query} : 브리피 아티클 검색</title>
      </Helmet>
      <FadeInLayout>
        <DefaultLayout>
          <div className="w-full flex justify-center pt-[50px] md:pt-[70px] pb-[60px] md:pb-[24px]">
            <h2 className="h-[56px]  md:h-[36px] text-center block md:flex justify-center text-black900 text-xl md:text-[1.75rem] font-light">
              <span className="font-semibold">{query}</span>&nbsp;에 대한&nbsp;
              <div>총 4개의&nbsp;<span className="font-semibold text-primary">아티클</span>&nbsp;검색 결과예요.</div>
            </h2>
          </div>

          <div className="w-full flex justify-end">
            <CustomSelect {...customSelectProps} />
          </div>
          <div className="pb-[36px] pt-[16px] md:pt-[24px] md:pb-[120px]">
            <InfiniteArticle />
          </div>
        </DefaultLayout>
      </FadeInLayout>
    </>
  );
}

export default SearchArticlePage;

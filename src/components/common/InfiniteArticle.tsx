import { useRef, useState } from 'react';
import { ArticleCard } from 'briefy-design';
import useInfinite from 'src/hook/useInfinite';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import LoadingLottie from 'src/components/common/LoadingLottie';

function InfiniteArticle() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const targetRef = useRef<HTMLDivElement>(null);
  const { loading } = useInfinite({ setData, targetRef });

  return (
    <>
      <div className="w-full grid grid-cols-2 min-w900-max-w1200:grid-cols-3 lg:grid-cols-4 md:gap-[24px] gap-[16px]">
        {data.map((_, idx) => (
          <FadeInLayout key={idx}>
            <ArticleCard
              data={{
                category: ['뉴닉', '경제'],
                title: '이스라엘-팔레스타인 하마스 전쟁 (8) : 지상편과 휴전',
                src: 'https://ifh.cc/g/t5Z7ol.jpg',
                percent: '75%',
              }}
              mode="unread"
              onClick={() => alert('클릭!')}
            />
          </FadeInLayout>
        ))}
      </div>
      <div ref={targetRef} className="w-full h-[5px]" />
      {loading && <LoadingLottie />}
    </>
  );
}

export default InfiniteArticle;

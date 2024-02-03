import { useRef, useState } from 'react';
import { NewsLetterCard } from 'briefy-design';
import useInfinite from 'src/hook/useInfinite';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import LoadingLottie from 'src/components/common/LoadingLottie';

function InfiniteNewsLetter() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const targetRef = useRef<HTMLDivElement>(null);
  const { loading } = useInfinite({ setData, targetRef });

  return (
    <>
      <div className="w-full grid max-w500:grid-cols-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px]">
        {data.map((_, idx) => (
          <FadeInLayout key={idx}>
            <NewsLetterCard
              title="뉴닉"
              category="경제"
              description="시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요"
              onClick={() => alert('뉴스레터')}
            />
          </FadeInLayout>
        ))}
      </div>
      <div ref={targetRef} className="w-full h-[5px]" />
      {loading && <LoadingLottie />}
    </>
  );
}

export default InfiniteNewsLetter;

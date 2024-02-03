import { useRef, useState } from 'react';
import { NewsLetterCard } from '@ui';
import Lottie from 'react-lottie-player';
import loadingJson from 'src/assets/lottie/loading.json';
import useInfinite from 'src/hook/useInfinite';
import FadeInLayout from '../Layout/FadeInLayout';

function InfiniteNewsLetter() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const targetRef = useRef<HTMLDivElement>(null);
  const { loading } = useInfinite({ setData, targetRef });

  return (
    <div className="w-full grid max-w500:grid-cols-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-[24px] gap-[16px]">
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
      <div ref={targetRef} className="w-full h-[5px] flex justify-center" />
      {loading && (
        <div className="w-full flex justify-center">
          <Lottie className="w-[120px]" loop animationData={loadingJson} play />
        </div>
      )}
    </div>
  );
}

export default InfiniteNewsLetter;

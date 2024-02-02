import { NewsLetterCard } from 'briefy-design';
import { SwiperSlide } from 'swiper/react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@reactuses/core';
import { SwiperData } from 'src/types/swiper';

import DefaultSwiper from 'src/components/Swiper/DefaultSwiper';
import TitleAndPrevNextbtn from 'src/components/Swiper/TitleAndPrevNextbtn';

interface Props {
  title: ReactNode;
}

function NewsLetterSwiper({ title } : Props) {
  const num = 20;
  const [swiperData, setSwiperData] = useState<SwiperData>({ slidesPerView: 3, spaceBetween: 24, lastIdx: num - 3 });
  const [swiperIndex, setSwiperIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const { width } = useWindowSize();
  useEffect(() => {
    if (width < 768) {
      setSwiperData({ slidesPerView: 1.5, spaceBetween: 16, lastIdx: num - 2 });
      return;
    }
    if (width < 1240) {
      setSwiperData({ slidesPerView: 2.5, spaceBetween: 16, lastIdx: num - 2 });
      return;
    }
    if (width >= 1240) {
      setSwiperData({ slidesPerView: 3, spaceBetween: 24, lastIdx: num - 3 });
    }
  }, [width]);

  const handleSlideChange = (idx: number) => {
    setSwiperIndex(idx);
  };

  const titleAndPrevNextbtnProps = { title, swiperIndex, swiperData, prevRef, nextRef };

  return (
    <section>
      <TitleAndPrevNextbtn {...titleAndPrevNextbtnProps} />

      <div className="flex justify-center pt-[16px]">
        <div className="w-full">
          <DefaultSwiper swiperData={swiperData} handleSlideChange={handleSlideChange}>
            {[...Array(num)].map((_, idx) => (
              <SwiperSlide key={`newsletter${idx}`}>
                <NewsLetterCard
                  title={`뉴닉 ${idx}`}
                  category="경제"
                  description="시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요"
                  onClick={() => alert('뉴스레터')}
                />
              </SwiperSlide>
            ))}
            <button ref={prevRef} className="swiper-button-prev" />
            <button ref={nextRef} className="swiper-button-next" />
          </DefaultSwiper>
        </div>
      </div>
    </section>
  );
}

export default NewsLetterSwiper;

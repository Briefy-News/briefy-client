import { NewsLetterCard } from 'briefy-design';
import { SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@reactuses/core';
import { SwiperData } from 'src/types/swiper';

import DefaultSwiper from 'src/components/Swiper/DefaultSwiper';
import TitleAndPrevNextbtn from 'src/components/Swiper/TitleAndPrevNextbtn';

function NewsLetterSwiper() {
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

  const title = (
    <div className="block md:flex md:items-center h-[44px] md:h-[64px] text-base md:text-[1.5rem] mb-[16px] md:mb-[24px] text-black900 font-light">
      브리피에서&nbsp;
      <h2><span className="font-semibold">요즘 핫한 뉴스레터</span>를 소개해드려요</h2>
    </div>
  );
  const titleAndPrevNextbtnProps = { title, swiperIndex, swiperData, prevRef, nextRef };

  return (
    <section className="pt-[32px] md:pt-[60px] lg:pt-[142px] pb-[32px] md:pb-[80px]">
      <TitleAndPrevNextbtn {...titleAndPrevNextbtnProps} />

      <div className="flex justify-center">
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

import { ArticleCard } from 'briefy-design';
import { SwiperSlide } from 'swiper/react';
import { ReactNode, useEffect, useRef, useState } from 'react';

import DefaultSwiper from 'src/components/Swiper/DefaultSwiper';
import TitleAndPrevNextbtn from 'src/components/Swiper/TitleAndPrevNextbtn';
import { useWindowSize } from '@reactuses/core';
import { SwiperData } from 'src/types/swiper';

interface Props {
  title?: ReactNode;
  num?: number;
}

function ArticleSwiper({ title, num = 20 } : Props) {
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
    if (width < 952) {
      setSwiperData({ slidesPerView: 2, spaceBetween: 16, lastIdx: num - 2 });
      return;
    }
    if (width < 1240) {
      setSwiperData({ slidesPerView: 3, spaceBetween: 24, lastIdx: num - 3 });
      return;
    }
    if (width >= 1240) {
      setSwiperData({ slidesPerView: 4, spaceBetween: 24, lastIdx: num - 4 });
    }
  }, [width]);

  const handleSlideChange = (idx: number) => {
    setSwiperIndex(idx);
  };

  const titleAndPrevNextbtnProps = { title, swiperIndex, swiperData, prevRef, nextRef };

  return (
    <>
      {title && <TitleAndPrevNextbtn {...titleAndPrevNextbtnProps} />}

      <div className="flex justify-center pt-[16px] md:pt-[24px]">
        <div className="w-full">
          <DefaultSwiper delay={5500} swiperData={swiperData} handleSlideChange={handleSlideChange}>
            {[...Array(num)].map((_, idx) => (
              <SwiperSlide key={`${idx}`}>
                <ArticleCard
                  data={{
                    category: ['뉴닉', '경제'],
                    title: `이스라엘-팔레스타인 하마스 전쟁 (${idx + 1}) : 지상편과 휴전`,
                    src: 'https://ifh.cc/g/t5Z7ol.jpg',
                    percent: '75%',
                  }}
                  mode="unread"
                  onClick={() => alert('클릭!')}
                />
              </SwiperSlide>
            ))}
            <button ref={prevRef} className="swiper-button-prev" />
            <button ref={nextRef} className="swiper-button-next" />
          </DefaultSwiper>
        </div>
      </div>
    </>
  );
}

export default ArticleSwiper;

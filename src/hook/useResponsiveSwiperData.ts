import { useWindowSize } from '@reactuses/core';
import { useState, useEffect } from 'react';
import { SwiperData } from 'src/types/swiper';

const useResponsiveSwiperData = (num: number) => {
  const [swiperData, setSwiperData] = useState<SwiperData>({ slidesPerView: 1, spaceBetween: 0, lastIdx: 0 });

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
  }, [width, num]);

  return { swiperData };
};

export default useResponsiveSwiperData;

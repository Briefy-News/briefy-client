import { ReactNode } from 'react';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { SwiperData } from 'src/types/swiper';

interface Props {
  swiperData: SwiperData;
  handleSlideChange: (idx: number) => void;
  children: ReactNode;
  delay?: number;
}

function DefaultSwiper({ swiperData, handleSlideChange, delay = 4000, children }: Props) {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      slidesPerView={swiperData.slidesPerView}
      spaceBetween={swiperData.spaceBetween}
      autoplay={window.innerWidth >= 768 ? { delay, disableOnInteraction: false } : undefined}
      className="flex justify-center max-w-full"
      onSlideChange={(e) => handleSlideChange(e.activeIndex)}
    >
      {children}
    </StyledSwiper>
  );
}

export default DefaultSwiper;

const StyledSwiper = styled(Swiper)`
  .swiper-button-prev::after,
  .swiper-button-next::after {
    opacity: 0;
  }
  padding: 0 20px 0 20px;
  .swiper-wrapper {
    max-width: 1240px;
    width: 100%;
  }

  @media all and (min-width: 1200px) {
    width: 1240px;
  }
`;

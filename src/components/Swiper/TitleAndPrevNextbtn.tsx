import { ReactNode, RefObject } from 'react';
import LeftBtnIcon from 'src/assets/icons/LeftBtnIcon';
import RightBtnIcon from 'src/assets/icons/RightBtnIcon';
import { SwiperData } from 'src/types/swiper';

interface Props {
  title: ReactNode;
  swiperIndex: number;
  swiperData: SwiperData;
  prevRef: RefObject<HTMLButtonElement>;
  nextRef: RefObject<HTMLButtonElement>;
}

function TitleAndPrevNextbtn({ title, swiperIndex, swiperData, prevRef, nextRef }: Props) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-[1240px] px-5">
        <div className="h-[44px] md:h-[64px] flex items-center justify-between w-full">
          {title}

          <div className="w-[92px] flex gap-[12px]">
            <button
              disabled={swiperIndex === 0}
              className={`${swiperIndex === 0 ? 'text-black300' : 'text-black900'} hidden md:block`}
              onClick={() => prevRef.current?.click()}
            >
              <LeftBtnIcon />
            </button>
            <button
              disabled={swiperIndex === swiperData.lastIdx}
              className={`${swiperIndex === swiperData.lastIdx ? 'text-black300' : 'text-black900'} hidden md:block`}
              onClick={() => nextRef.current?.click()}
            >
              <RightBtnIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleAndPrevNextbtn;

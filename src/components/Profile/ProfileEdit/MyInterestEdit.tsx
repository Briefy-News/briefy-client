import { Button } from 'briefy-design';
import { useState } from 'react';
import InterestList from 'src/components/common/InterestList';

function MyInterestEdit() {
  const [selected, setSelected] = useState<string[]>(['비즈니스', '엔터테이먼트', '여행']);
  const isEmpty = selected.length === 0;

  return (
    <>
      <div className="flex justify-between items-center pt-[16px] md:pt-[60px]">
        <h2 className="flex items-center h-[44px] md:h-[64px] text-base md:text-2xl text-black900 font-semibold">
          나의 관심 분야
        </h2>
        <div className="hidden md:block">
          <Button
            onClick={() => alert('click!')}
            title="수정하기"
            size="small"
            mode={isEmpty ? 'disabled' : 'lineBlue'}
          />
        </div>
      </div>

      <div className="rounded-[12px] md:rounded-[16px] border-black300 mt-[8px] border-[1px] flex justify-center">
        <div className="pt-[20px] pb-[20px] md:pt-[49px] md:pb-[48px]
            grid grid-cols-3 min-w769-max-w1080:grid-cols-4 lg:grid-cols-5 gap-5 min-w769-max-w1080:gap-[45px] lg:gap-[80px] justify-center"
        >
          <InterestList selected={selected} setSelected={setSelected} />
        </div>
      </div>
      <div className="block md:hidden pt-[16px] pb-[32px]">
        <Button
          onClick={() => alert('click!')}
          title="수정하기"
          size="small"
          mode={isEmpty ? 'disabled' : 'lineBlue'}
          mobileHeight="38px"
        />
      </div>
    </>
  );
}

export default MyInterestEdit;

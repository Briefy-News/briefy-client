import { Button } from 'briefy-design';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import InterestList from 'src/components/common/InterestList';

function InterestPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const isEmpty = selected.length === 0;
  const navigate = useNavigate();

  return (
    <FadeInLayout>
      <div className="flex flex-col items-center pt-[81px] sm:pt-[60px]">
        <div className="text-center text-black900">
          <div className="text-base sm:text-[1.75rem]">
            <span className="font-[600]">홍길동</span>&nbsp;
            <span className="font-[300]">님, 관심있는 분야를 선택해주세요!</span>
          </div>
          <div className="mt-[8px] text-[0.875rem] sm:text-[1.25rem] font-[300]">
            회원님이 좋아하실 만한 뉴스레터를 추천해 드릴게요.
          </div>
        </div>

        <div className="w-[280px] sm:w-[560px] md:w-[728px] pt-[40px] pb-[40px] sm:pt-[80px] sm:pb-[108px]
            grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 sm:gap-8 justify-center"
        >
          <InterestList selected={selected} setSelected={setSelected} />
        </div>

        <div className="pb-[70px] w-[320px] sm:w-[358px]">
          <Button
            onClick={() => navigate('/')}
            title="브리피 시작하기"
            size="big"
            mode={isEmpty ? 'disabled' : 'blue'}
            mobileHeight="38px"
          />
        </div>
      </div>
    </FadeInLayout>
  );
}

export default InterestPage;

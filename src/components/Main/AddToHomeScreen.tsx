import { Button } from '@ui';
import RightArrow from 'src/assets/icons/RightArrow';
import useA2HS from 'src/hook/useA2HS';

function AddToHomeScreen() {
  const { installApp } = useA2HS();

  return (
    <div className={`w-full h-[92px] md:h-[120px] rounded-[8px] md:rounded-[16px] px-[20px] md:px-[60px]
          bg-cover bg-center bg-[url('src/assets/png/subbanner.png')]
          flex flex-col justify-center gap-[8px] md:flex-row md:justify-between md:items-center md:gap-0`}
    >
      <div className="text-[0.875rem] md:text-[2rem] font-light text-white">
        브리피를 <span className="font-semibold">빠르고 간편하게</span> 이용하고 싶다면?
      </div>

      <div className="w-[220px] md:w-[280px]">
        <Button
          onClick={installApp}
          title="홈 화면에 브리피 추가하기"
          size="middle"
          mode="lineBlue"
          fontSize="1.125rem"
          mobileHeight="32px"
          hasBorder={false}
        >
          <div className="w-[23px] h-[23px] text-primary ml-[10px]">
            <RightArrow />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default AddToHomeScreen;

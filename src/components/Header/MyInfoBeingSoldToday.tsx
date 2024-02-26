import BookIcon from 'src/assets/icons/BookIcon';
import styled from 'styled-components';

function MyInfoBeingSoldToday() {
  return (
    <div className="flex flex-col w-full h-[66px] md:h-[120px] justify-between z-10
          absolute top-0 backdrop-blur-lg backdrop-saturate-150 b bg-background/70"
    >
      <div className="flex justify-center pt-[23px] md:pt-[40px]">
        <div className="pl-[20px] md:pl-[40px] flex md:justify-center w-full">
          <p className="text-black900 text-sm md:text-xl font-light">오늘도 내 개인정보는 팔리는 중 ing</p>
        </div>
        <div className="pr-[21px] text-black900">
          <BookIcon />
        </div>
      </div>
      <ProgressBar />
    </div>
  );
}

export default MyInfoBeingSoldToday;

const ProgressBar = styled.div`
  background-color: var(--primary);
  height: 4px;
  width: 100%;
  transition: all 1s linear;
`;

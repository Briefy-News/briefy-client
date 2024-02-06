import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookIcon from 'src/assets/icons/BookIcon';
import styled from 'styled-components';

function MyInfoBeingSoldToday() {
  const [timeLeft, setTimeLeft] = useState(600);
  const [percent, setPercent] = useState(100);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
        setPercent(Math.floor((timeLeft / 600) * 100));
      }
    }, 100);
    if (timeLeft <= 0) {
      navigate(-1);
    }

    return () => clearInterval(interval);
  }, [timeLeft]);

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
      <ProgressBar $percent={percent} />
    </div>
  );
}

export default MyInfoBeingSoldToday;

const ProgressBar = styled.div<{ $percent: number }>`
  background-color: var(--primary);
  height: 4px;
  width: ${({ $percent }) => `${$percent}%`};
  transition: all 1s linear;
`;

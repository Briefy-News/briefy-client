import { Button } from 'briefy-design';
import { useWindowSize } from '@reactuses/core';
import { useDisclosure } from '@nextui-org/modal';
import RightArrow from 'src/assets/icons/RightArrow';
import letterPng from 'src/assets/png/letter.png';
import { motion } from 'framer-motion';

import SignInModal from 'src/components/Modal/SignInModal';
import styled from 'styled-components';

function Banner() {
  const { width } = useWindowSize();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const modalProps = { isOpen, onOpenChange };

  return (
    <div className="pt-[24px]">
      <Section className="overflow-hidden md:overflow-visible relative h-[174px] rounded-[12px] md:rounded-[32px] md:h-[336px] flex items-center pl-[20px] md:pl-[120px] w-full bg-black100">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base md:text-[2.25rem] black900 font-light"
          >
            브리피가 <span className="font-semibold">처음</span>이신가요?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-[8px] md:mt-[16px] leading-[1.25rem] md:leading-[1.75rem] text-[0.875rem] md:text-xl font-light"
          >
            <span className="text-primary">3초</span> 만에 브리피 전용 메일 만들고,<br />
            원하는 뉴스레터를 구독하세요!
          </motion.p>

          <div className="pt-[24px] md:pt-[60px] w-[164px] md:w-[280px]">
            <Button
              onClick={onOpen}
              title="브리피 시작하기"
              size="middle"
              mode="blue"
              fontSize="0.95rem"
            >
              <div className="w-[23px] h-[23px] text-white ml-[10px]">
                <RightArrow />
              </div>
            </Button>
          </div>
        </div>
        {width > 900 && (
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7 }}
            className="absolute md:w-[280px] lg:w-[360px] transition-width duration-300 ease-linear top-[40px] right-[120px]"
            src={letterPng}
            alt="letter"
          />
        )}
        <SignInModal {...modalProps} />
      </Section>
    </div>
  );
}

export default Banner;

const Section = styled.section`
  position: relative;

  @media all and (max-width: 767px) {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 24px;
      width: 17px;
      height: 126px;
      background: linear-gradient(to left, transparent, var(--black-100));
    }
  }
`;

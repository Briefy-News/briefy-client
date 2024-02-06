import { ModalContent } from '@nextui-org/modal';
import ModalBg from 'src/components/Modal/ModalBg';
import { Button } from 'briefy-design';
import { useState } from 'react';

import LogoAndDesc from 'src/components/Modal/CreateMailModal/LogoAndDesc';
import BriefyEmail from 'src/components/Modal/CreateMailModal/BriefyEmail';
import { useNavigate } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

function CreateMailModal({ isOpen, onOpenChange }: Props) {
  const [email, setEmail] = useState('');
  const [isEmailCreated, setIsEmailCreated] = useState(false);
  const navigate = useNavigate();

  const handleCreateEmail = () => {
    // 이메일 생성
    setIsEmailCreated(true);
  };

  return (
    <ModalBg isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="rounded-[24px] md:max-w-[680px]">
        {(onClose: () => void) => (
          <div className={`${isEmailCreated && 'flex flex-col justify-between'} h-[546px] md:h-[554px] md:py-[60px] pt-[56px] pb-[36px] px-[20px] md:px-[52px]`}>
            <LogoAndDesc isEmailCreated={isEmailCreated} />
            {!isEmailCreated && <BriefyEmail email={email} setEmail={setEmail} />}

            {isEmailCreated && (
              <div className="flex gap-[4px] md:gap-[12px] flex-col items-center text-black900">
                <p className="text-sm md:text-base font-light"><span className="font-semibold">홍길동</span>님의 구독 이메일이 생성되었어요</p>
                <h3 className="text-xl md:text-[2rem] font-semibold">news.gildong@briefy.shop</h3>
              </div>
            )}

            <div className="flex gap-[12px] md:gap-[16px]">
              <Button
                onClick={handleCreateEmail}
                title={isEmailCreated ? '뉴스레터 구독하러 가기' : '이메일 만들기'}
                size="middle"
                mode="blue"
                mobileHeight="38px"
              />
              <Button
                onClick={() => { if (isEmailCreated) { navigate('/profile/article/all'); } onClose(); }}
                title={isEmailCreated ? '마이페이지에서 확인하기' : '다음에 만들게요!'}
                size="middle"
                mode="lineGray"
                mobileHeight="38px"
              />
            </div>
          </div>
        )}
      </ModalContent>
    </ModalBg>
  );
}

export default CreateMailModal;

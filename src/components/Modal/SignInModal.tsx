import { ModalContent, ModalHeader } from '@nextui-org/modal';
import { NavLink } from 'react-router-dom';
import Logo from 'src/assets/icons/Logo';
import XIcon from 'src/assets/icons/XIcon';

import ContinueGoogle from 'src/components/Header/ContinueGoogle';
import ModalBg from 'src/components/Modal/ModalBg';

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

function SignInModal({ isOpen, onOpenChange }: Props) {
  return (
    <ModalBg isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="rounded-[24px]">
        {(onClose: () => void) => (
          <div className="relative  pt-[56px] sm:pt-[41px] pb-[60px] border-[1px] border-black300">
            <button onClick={onClose} className="hidden sm:flex absolute top-[31px] right-[30px] w-[45px] h-[45px] rounded-full justify-center items-center hover:bg-[#F0F0F0] transition-background duration-150 ease-in-out">
              <XIcon />
            </button>
            <ModalHeader className="flex justify-center items-center w-full pt-0 pb-0 sm:pt-[59px]">
              <NavLink to="/" className="text-primary">
                <Logo />
              </NavLink>
            </ModalHeader>
            <div className="px-[30px] sm:px-[49px] pt-[59px]">
              <ContinueGoogle />
            </div>
            <p className="mt-[8px] text-[0.75rem] sm:text-[0.875rem] text-black500 font-[300] text-center">
              기존에 사용하는 구글 계정으로 간편하게 브리피를 이용해보세요.
            </p>
          </div>
        )}
      </ModalContent>
    </ModalBg>
  );
}

export default SignInModal;

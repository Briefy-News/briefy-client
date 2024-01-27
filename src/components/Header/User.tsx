import { Modal, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal';
import { NavLink } from 'react-router-dom';
import UserIcon from 'src/components/icons/UserIcon';
import Logo from 'src/components/icons/Logo';
import XIcon from 'src/components/icons/XIcon';

import ContinueGoogle from 'src/components/Header/ContinueGoogle';

function User() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div onClick={onOpen} className="cursor-pointer w-[18px] h-[22px] text-balck900">
        <UserIcon />
      </div>
      <Modal
        hideCloseButton
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          },
        }}
      >
        <ModalContent className="relative rounded-[24px] pt-[41px] pb-[60px] border-[1px] border-black300">
          {(onClose: () => void) => (
            <>
              <button onClick={onClose} className="absolute top-[31px] right-[30px] w-[45px] h-[45px] rounded-full flex justify-center items-center hover:bg-[#F0F0F0] transition-background duration-150 ease-in-out">
                <XIcon />
              </button>
              <ModalHeader className="flex justify-center items-center w-full py-[59px]">
                <NavLink to="/">
                  <div className="w-[112px] h-[35px]">
                    <Logo />
                  </div>
                </NavLink>
              </ModalHeader>
              <div className="px-[49px]">
                <ContinueGoogle />
              </div>
              <p className="mt-[8px] text-[0.875rem] text-black500 font-[300] text-center">
                기존에 사용하는 구글 계정으로 간편하게 브리피를 이용해보세요.
              </p>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default User;

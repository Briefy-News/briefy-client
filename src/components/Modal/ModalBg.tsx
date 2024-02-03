import { Modal } from '@nextui-org/modal';
import { ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  children: ReactNode;
}

function ModalBg({ isOpen, onOpenChange, children }: Props) {
  return (
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
      {children}
    </Modal>
  );
}

export default ModalBg;

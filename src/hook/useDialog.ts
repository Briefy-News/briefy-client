import { useDisclosure } from '@nextui-org/modal';
import { ReactNode } from 'react';

const useDialog = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleConfirm = (mode: string) => {
    if (mode === 'cancel') {
      clearPrompt();
    } else if (mode === 'confirm') {
      installApp();
    }
  };

  const openDialog = (content: string | ReactNode) => {
    setContentHtml(content);
    onOpen();
  };
};

export default useDialog;

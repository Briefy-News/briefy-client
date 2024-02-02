import { ReactNode } from 'react';
import { Button } from 'briefy-design';
import { ModalContent } from '@nextui-org/modal';
import ModalBg from 'src/components/Modal/ModalBg';

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  handleConfirm: (mode: string) => void;
  rightBtnTxt?: string;
  content?: string;
  contentHtml?: ReactNode;
}

function DialogModal({ isOpen, onOpenChange, handleConfirm, content, contentHtml, rightBtnTxt = '확인' }: Props) {
  return (
    <ModalBg isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="w-full md:max-w-[400px] rounded-[24px]">
        {(onClose: () => void) => (
          <div className="w-full px-[30px] sm:px-[35px] pt-[50px] pb-[30px] border-[1px] border-black300">
            <div className="w-full flex justify-center text-center text-black900 text-lg whitespace-pre-line">
              {content && content}
            </div>
            {contentHtml && contentHtml}

            <div className="pt-[50px]">
              <div className="flex gap-3">
                <Button
                  onClick={() => { handleConfirm('cancel'); onClose(); }}
                  title="취소"
                  size="medium"
                  mode="lineGray"
                  mobileHeight="50px"
                />
                <Button
                  onClick={() => { handleConfirm('confirm'); onClose(); }}
                  title={rightBtnTxt}
                  size="medium"
                  mode="blue"
                  mobileHeight="50px"
                />
              </div>
            </div>
          </div>
        )}
      </ModalContent>
    </ModalBg>
  );
}

export default DialogModal;

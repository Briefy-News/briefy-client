import { Button } from 'briefy-design';
import RightArrow from 'src/assets/icons/RightArrow';
import useA2HS from 'src/hook/useA2HS';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import { useDisclosure } from '@nextui-org/modal';
import DialogModal from 'src/components/Modal/DialogModal';

function AddToHomeScreen() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { installApp } = useA2HS();

  const contentHtml = (
    <div className="flex gap-5">
      <img src="/icon-192.png" className="w-[70px] h-[70px]" alt="briefy" />
      <div className="font-light w-full flex flex-col text-black900 text-2xl">
        <div><span className="font-semibold">브리피 바로가기</span>를</div>
        <div>추가하시겠습니까?</div>
      </div>
    </div>
  );
  const handleConfirm = (ok: boolean) => {
    if (ok) {
      installApp();
    }
  };
  const DialogModalProps = { isOpen, onOpenChange, contentHtml, handleConfirm, rightBtnTxt: '추가하기' };

  return (
    <DefaultLayout>
      <div className={`w-full h-[92px] md:h-[120px] rounded-[8px] md:rounded-[16px] px-[20px] md:px-[60px]
          bg-cover bg-center bg-[url('src/assets/png/subbanner.png')]
          flex flex-col justify-center gap-[8px] md:flex-row md:justify-between md:items-center md:gap-0`}
      >
        <div className="text-[0.875rem] flex md:block lg:flex md:text-[1.7rem] lg:text-[2rem] font-light text-white">
          브리피를&nbsp;<span className="font-semibold">빠르고 간편하게</span>&nbsp;<div>이용하고 싶다면?</div>
        </div>

        <div className="w-[220px] md:w-[280px]">
          <Button
            onClick={onOpen}
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

      <DialogModal {...DialogModalProps} />
    </DefaultLayout>
  );
}

export default AddToHomeScreen;

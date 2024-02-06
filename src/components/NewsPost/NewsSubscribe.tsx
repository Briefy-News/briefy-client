import { useDisclosure } from '@nextui-org/modal';
import { Button } from 'briefy-design';
import styled from 'styled-components';
import CreateMailModal from '../Modal/CreateMailModal';

function NewsSubscribe() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const createMailModalProps = { isOpen, onOpenChange };

  return (
    <>
      <div className="flex-col pr-[14px] pl-[12px] md:pr-[31px] md:pl-[30px] py-[12px] md:py-[30px] min-w769-max-w1180:w-full lg:w-[792px] h-auto md:h-[416px] rounded-[10px] md:rounded-[16px] border-[1px] border-black300">
        <div className="flex gap-[6px] md:gap-[16px]">
          <ImgBox className="w-[124px] md:min-w-[356px] h-[124px] md:h-[356px] rounded-[8px] md:rounded-[20px] cursor-pointer overflow-hidden">
            <img className="w-[124px] md:w-[356px] h-[124px] md:h-[356px] object-cover" src="https://ifh.cc/g/t5Z7ol.jpg" alt="news" />
          </ImgBox>
          <div className="pt-[6px] md:pt-[20px] flex flex-col justify-between">
            <div>
              <h2 className="text-black900 font-semibold text-base md:text-2xl">디그 dig</h2>
              <p className="mt-[4px] text-base text-black500 font-light">비지니스</p>
              <p className="hidden md:block mt-[2px] md:mt-[16px] md:text-base text-black700 font-light">월수금 아침 5분, 핵심을 파고드는 경제 뉴스를 정성껏 만들어 보내드려요.</p>
            </div>
            <div>
              <p className="mb-[6px] md:mb-[8px] text-sm text-black500 font-light">
                구독자 수&nbsp;<span className="font-semibold">909</span>명
              </p>
              <div className="hidden md:block">
                <Button
                  onClick={onOpen}
                  title="브리피로 구독하기"
                  size="big"
                  mode="blue"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="block md:hidden mt-[10px] text-sm text-black700 font-light">월수금 아침 5분, 핵심을 파고드는 경제 뉴스를 정성껏 만들어 보내드려요.</p>
      </div>
      <div className="py-[16px] block md:hidden">
        <Button
          onClick={onOpen}
          title="브리피로 구독하기"
          size="big"
          mode="blue"
          mobileHeight="38px"
        />
      </div>
      <CreateMailModal {...createMailModalProps} />
    </>
  );
}

export default NewsSubscribe;

const ImgBox = styled.div`
  img {
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

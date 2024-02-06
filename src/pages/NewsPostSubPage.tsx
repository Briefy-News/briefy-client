import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import { Button } from 'briefy-design';
import { useNavigate, useParams } from 'react-router-dom';
import DialogModal from 'src/components/Modal/DialogModal';
import { useDisclosure } from '@nextui-org/modal';
import useToast from 'src/hook/useToast';
import Iframe from 'react-iframe';

function NewsPostSubPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { successToast } = useToast();
  const navigate = useNavigate();
  const { category } = useParams();

  const handleConfirm = (ok: boolean) => {
    if (ok) {
      // 뉴스레터 구독하기
      successToast('뉴스레터가 구독되었습니다.');
      navigate(-1);
    }
  };
  const DialogModalProps = { isOpen, onOpenChange, handleConfirm, content: '뉴스레터를 구독하시겠습니까?' };

  return (
    <FadeInLayout>
      <DefaultLayout>
        <div className="pt-[24px] md:pt-[60px] pb-[36px] md:pb-[120px]">
          <div className="w-full h-[124px] md:h-[168px] px-[12px] md:px-[20px] gap-[16px] flex items-center rounded-[20px] border-[1px] border-black300 mb-[16px] md:mb-[24px]">
            <div className='rounded-[14px] min-w-[100px] h-[100px] md:w-[128px] md:h-[128px] bg-cover bg-center bg-[url("https://ifh.cc/g/t5Z7ol.jpg")]' />
            <div>
              <h3 className="text-base md:text-xl text-black900 font-light">디그 dig</h3>
              <p className="mt-0 md:mt-[2px] text-sm md:text-base text-black500 font-light">비지니스</p>
              <p className="line-clamp-2 mt-[10px] md:mt-[16px] text-sm md:text-base text-black700 font-light">월수금 아침 5분, 핵심을 파고드는 경제 뉴스를 정성껏 만들어 보내드려요.</p>
            </div>
          </div>

          <div className="w-full h-[400px] md:h-[700px] rounded-[20px] border-[1px] border-black300 overflow-hidden">
            <Iframe
              url="https://news.jtbc.co.kr/article/article.aspx?news_id=NB12164249&log=jtbc|news|index_main_news"
              width="100%"
              height="100%"
              display="block"
              position="relative"
            />
          </div>

          <div className="pt-[32px] md:pt-[24px] flex justify-center">
            <div className="flex w-full md:w-[740px] gap-[12px] md:gap-[24px]">
              <Button
                onClick={onOpen}
                title="14F뉴스레터 구독하기"
                size="big"
                mode="blue"
                mobileHeight="38px"
              />
              <Button
                onClick={() => navigate(`/news/${category}`)}
                title="목록으로 돌아가기"
                size="big"
                mode="lineBlue"
                mobileHeight="38px"
              />
            </div>
          </div>
        </div>
        <DialogModal {...DialogModalProps} />
      </DefaultLayout>
    </FadeInLayout>
  );
}

export default NewsPostSubPage;

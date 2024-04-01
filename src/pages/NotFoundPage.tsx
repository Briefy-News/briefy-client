import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import notFound from 'src/assets/lottie/notfound.json';
import Lottie from 'react-lottie-player';
import { Button } from 'briefy-design';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <meta property="og:description" content="페이지를 찾을 수 없습니다" />
        <title>Briefy :: 페이지를 찾을 수 없습니다</title>
      </Helmet>
      <FadeInLayout>
        <DefaultLayout>
          <div className="flex flex-col items-center pt-[200px]">
            <Lottie className="max-w-[1000px]" loop animationData={notFound} play />
            <div className="w-[80px] md:w-[131px] pb-[50px]">
              <Button
                onClick={() => navigate('/')}
                title="홈으로"
                size="extraSmall"
                mode="blue"
                fontSize="1.185rem"
              />
            </div>
          </div>
        </DefaultLayout>
      </FadeInLayout>
    </>
  );
}

export default NotFoundPage;

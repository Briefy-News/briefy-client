import DefaultLayout from 'src/components/Layout/DefaultLayout';
import notFound from 'src/assets/lottie/notfound.json';
import Lottie from 'react-lottie-player';
import { Button } from 'briefy-design';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
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
  );
}

export default NotFoundPage;

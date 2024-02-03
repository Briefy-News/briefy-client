import Lottie from 'react-lottie-player';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import loading from 'src/assets/lottie/loading.json';

function LoadingLottie() {
  return (
    <FadeInLayout>
      <div className="w-full flex justify-center pt-7">
        <Lottie className="w-[120px]" loop animationData={loading} play />
      </div>
    </FadeInLayout>
  );
}

export default LoadingLottie;

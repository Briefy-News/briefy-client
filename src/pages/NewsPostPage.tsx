import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import NewsSubscribe from 'src/components/NewsPost/NewsSubscribe';
import NextUploadDate from 'src/components/NewsPost/NextUploadDate';
import PublishCycleCalendar from 'src/components/NewsPost/PublishCycleCalendar';

function NewsPostPage() {
  return (
    <FadeInLayout>
      <DefaultLayout>
        <div className="min-w769-max-w1180:block lg:flex gap-6 pt-[24px] md:pt-[60px] pb-[40px] md:pb-[56px]">
          <NewsSubscribe />
          <div className="w-full">
            <NextUploadDate />
            <PublishCycleCalendar />
          </div>
        </div>
      </DefaultLayout>
    </FadeInLayout>
  );
}

export default NewsPostPage;

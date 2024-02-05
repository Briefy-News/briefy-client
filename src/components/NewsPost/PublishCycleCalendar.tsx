import DownTriangleIcon from 'src/assets/icons/DownTriangleIcon';
import Calendar from 'src/components/NewsPost/Calendar';

function PublishCycleCalendar() {
  return (
    <>
      <div className="md:hidden min-w769-max-w1180:mt-[16px] mb-[16px] h-[38px] md:h-[48px] pl-[16px] pr-[10px] flex justify-between items-center w-full rounded-[8px] md:rounded-[14px] border-[1px] border-black300 bg-black100">
        <p className="text-black900 text-sm font-semibold">발행 주기</p>
        <div className="flex items-center">
          <p className="text-sm text-primary font-semibold">
            매주 화요일
          </p>
          <DownTriangleIcon />
        </div>
      </div>
      <Calendar />
    </>
  );
}

export default PublishCycleCalendar;

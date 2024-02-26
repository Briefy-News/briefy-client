import { useState } from 'react';
import DownTriangleIcon from 'src/assets/icons/DownTriangleIcon';
import Calendar from 'src/components/NewsPost/Calendar';
import { motion } from 'framer-motion';

function PublishCycleCalendar() {
  const [showCalendar, setShowCalendar] = useState<boolean>();

  return (
    <div className="block md:hidden">
      <button onClick={() => setShowCalendar(!showCalendar)} className="md:hidden min-w769-max-w1180:mt-[16px] mb-[16px] h-[38px] md:h-[48px] pl-[16px] pr-[10px] flex justify-between items-center w-full rounded-[8px] md:rounded-[14px] border-[1px] border-black300 bg-black100">
        <p className="text-black900 text-sm font-semibold">발행 주기</p>
        <div className="flex items-center">
          <p className="text-sm text-primary font-semibold">
            매주 화요일
          </p>
          <div className={`${showCalendar ? 'rotate-180' : 'rotate-0'} text-primary transition-all duration-250 ease-in-out`}>
            <DownTriangleIcon />
          </div>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={showCalendar ? 'open' : 'closed'}
      >
        <motion.div
          variants={{
            open: {
              height: 'auto',
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              height: 0,
              clipPath: 'inset(10% 50% 90% 50% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
        >
          <Calendar />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PublishCycleCalendar;

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import _ from 'lodash';
import { getYear, getMonth } from 'date-fns';
import ReftTriangleIcon from 'src/assets/icons/ReftTriangleIcon';
import RightTriangleIcon from 'src/assets/icons/RightTriangleIcon';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  function addDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
  }
  const tempDates = [addDays(new Date(), 3), addDays(new Date(), 10), addDays(new Date(), 17)];

  return (
    <CalendarBlock>
      <DatePicker
        renderCustomHeader={({
          monthDate,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => {
          const isMatch = (getMonth(new Date()) === (getMonth(monthDate)) && getYear(new Date()) === getYear(monthDate));
          return (
            <div className="gap-[13px] flex justify-center">
              <button className={isMatch ? 'text-black300' : 'text-black700'} onClick={decreaseMonth} disabled={prevMonthButtonDisabled || isMatch}>
                <ReftTriangleIcon />
              </button>
              <span className="year-month text-[1.25rem] text-black900 font-semibold flex items-center">
                {getYear(monthDate)}.{getMonth(monthDate)}
              </span>
              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                <RightTriangleIcon />
              </button>
            </div>
          );
        }}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        highlightDates={tempDates}
        locale={ko}
        inline
      />
    </CalendarBlock>
  );
}

export default Calendar;

const CalendarBlock = styled.div`
  height: 352px;
  .react-datepicker {
    width: 100%;
    height: 352px;
    border-radius: 14px;
    border: 1px solid var(--black-300);
    overflow: hidden;
  }
  .react-datepicker__month-container {
    width: 100%;
    border-radius: 14px;
    background-color: var(--black-100);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    padding-top: 23.5px;
    height: 104px;
    border-bottom: none;
    background-color: var(--black-100);
  }
  .react-datepicker__day-name {
    width: 28px;
    height: 28px;
    margin: 0;
    color: var(--balck-500);
    font-size: 0.875rem;
    font-weight: 300;
  }
  .react-datepicker__day-names {
    margin-top: 18px;
    display: flex;
    justify-content: center;
    gap: 19px;
  }
  .react-datepicker__month {
    height: 248px;
    margin: 8.5px 0 23.5px 0;
    display: flex;
    flex-direction: column;
    gap: 19px;
  }
  .react-datepicker__day {
    width: 28px;
    height: 28px;
    color: var(--black-900);
    font-size: 0.875rem;
    margin: 0;
    border-radius: 50%;
  }
  .react-datepicker__week {
    display: flex;
    justify-content: center;
    gap: 19px;
  }
  .react-datepicker__day--selected {
    color: var(--black-700);
    border: 1px solid var(--black-700);
    background-color: var(--black-100);
    transition: opacity 0.15s ease-in-out;

    &:hover {
      opacity: 70%
    }
  }
  .react-datepicker__day--highlighted {
    color: var(--primary);
    border: 1px solid var(--primary);
    background-color: var(--black-100);
    transition: opacity 0.15s ease-in-out;

    &:hover {
      opacity: 70%
    }
  }
  .react-datepicker__day--outside-month {
    color: var(--black-300);
  }
  .react-datepicker__day--keyboard-selected {
    background-color: var(--black-300);
  }
  .year-month {
    font-size: 20px;
  }
  .react-datepicker__day--selected .react-datepicker__day--outside-month {
    border: 1px solid var(--black-300);
  }

  @media all and (max-width: 767px) {
    height: auto;
    .react-datepicker__day-names {
      gap: 13px;
    }
    .react-datepicker__month {
      gap: 13px;
    }
    .react-datepicker__week {
      gap: 13px;
    }
    .react-datepicker {
      height: auto;
    }
    .react-datepicker__month {
      height: auto;
    }
  }
`;

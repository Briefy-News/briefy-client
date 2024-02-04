import { Dispatch, SetStateAction } from 'react';
import { Interest } from 'briefy-design';

interface Props {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}

function InterestList({ selected, setSelected } : Props) {
  const handleClick = (title: string) => {
    const isSelected = selected.includes(title);
    if (isSelected) {
      const newSelected = selected.filter((item) => item !== title);
      setSelected(newSelected);
      return;
    }
    setSelected([...selected, title]);
  };
  const interestList = ['비즈니스', '기술', '건강', '엔터테이먼트', '스포츠', '환경', '과학', '여행', '미디어', '푸드'];

  return (
    <>
      {interestList.map((item, idx) => (
        <Interest
          key={idx}
          title={item}
          onClick={(title: string) => handleClick(title)}
          selected={selected.includes(item)}
        />
      ))}
    </>
  );
}

export default InterestList;

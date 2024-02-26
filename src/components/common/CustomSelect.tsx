import { Select, SelectItem } from '@nextui-org/select';
import { useWindowSize } from '@reactuses/core';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import DownArrowIcon from 'src/assets/icons/DownArrowIcon';

interface Props {
  orderBy: string;
  setOrderBy: Dispatch<SetStateAction<string>>
  list: { value: string; label: string; }[];
}

function CustomSelect({ orderBy, setOrderBy, list }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);
  }, [width]);

  return (
    <Select
      aria-label={orderBy}
      className="w-[118px] md:w-[140px]"
      variant="bordered"
      onChange={(e) => setOrderBy(e.target.value)}
      selectedKeys={[orderBy]}
      style={{ height: `${isMobile ? '32px' : '40px'}` }}
      classNames={{
        trigger: 'min-h-[32px] md:min-h-[40px] text-sm rounded-[6px] pl-[12px] pr-[8px] py-0 border-[1px] border-black300',
        value: 'text-black900 text-sm font-light',
        popoverContent: 'rounded-[10px]',
        selectorIcon: `${isMobile ? 'top-[4px]' : 'top-[8px]'} w-auto h-auto origin-center absolute right-[8px] md:right-[13px] md:right-[17px] text-black500`,
      }}
      selectorIcon={<div><DownArrowIcon /></div>}
    >
      {list.map((item) => (
        <SelectItem
          key={item.value}
          value={item.value}
        >
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
}

export default CustomSelect;

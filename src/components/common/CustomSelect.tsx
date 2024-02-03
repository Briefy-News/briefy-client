import { Select, SelectItem } from '@nextui-org/select';
import { Dispatch, SetStateAction } from 'react';
import DownArrowIcon from 'src/assets/icons/DownArrowIcon';

interface Props {
  orderBy: string;
  setOrderBy: Dispatch<SetStateAction<string>>
  list: { value: string; label: string; }[];

}

function CustomSelect({ orderBy, setOrderBy, list }: Props) {
  return (
    <Select
      aria-label={orderBy}
      className="w-[118px] md:w-[140px]"
      variant="bordered"
      onChange={(e) => setOrderBy(e.target.value)}
      selectedKeys={[orderBy]}
      style={{ height: '40px' }}
      classNames={{
        trigger: 'min-h-[32px] md:min-h-[40px] text-sm rounded-[6px] px-[12px] py-0 border-[1px] border-black300',
        value: 'text-black900 text-sm',
        popoverContent: 'rounded-[10px]',
        selectorIcon: ' w-auto h-auto origin-center absolute right-[13px] top-[8px] md:right-[17px] text-black500',
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

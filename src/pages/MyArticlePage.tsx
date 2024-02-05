import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import CustomSelect from 'src/components/common/CustomSelect';
import InfiniteArticle from 'src/components/common/InfiniteArticle';

function MyArticlePage() {
  const [orderBy, setOrderBy] = useState('latest');
  const orderByList = [
    { value: 'subscribers', label: '구독 많은순' },
    { value: 'latest', label: '최신순' },
    { value: 'oldest', label: '오래된순' },
    { value: 'alphabet', label: '가나다순' },
  ];
  const customSelectProps = { orderBy, setOrderBy, list: orderByList };

  const [title, setTitle] = useState('');
  const { state } = useParams();
  const linkData = [
    { id: 1, name: '전체', path: 'all' },
    { id: 2, name: '읽음', path: 'read' },
    { id: 3, name: '읽지않음', path: 'unread' },
  ];
  useEffect(() => {
    let text;
    switch (state) {
      case 'all':
        text = '모든 아티클';
        break;
      case 'read':
        text = '읽은 아티클';
        break;
      case 'unread':
        text = '안 읽은 아티클';
        break;
      default:
        text = '내 아티클';
    }
    setTitle(text);
  }, [state]);

  return (
    <FadeInLayout>
      <h2 className="mt-[16px] md:mt-[40px] flex items-center h-[44px] md:h-[64px] text-base md:text-2xl text-black900 font-semibold">
        {title}
      </h2>

      <div className="flex justify-end md:justify-between mt-0 md:mt-[8px] h-[40px]">
        <div className="hidden md:flex gap-[8px]">
          {linkData.map(({ id, name, path }) => (
            <NavLink
              key={id}
              to={`/profile/article/${path}`}
              className={`${state === path ? 'text-white bg-black900' : 'border-black300 text-black500 bg-white'}
                text-sm  px-[16px] h-[40px] rounded-[6px] font-light border-[1px] flex justify-center items-center transition-all duration-100`}
            >
              {name}
            </NavLink>
          ))}
        </div>
        <CustomSelect {...customSelectProps} />
      </div>

      <div className="pt-[16px] md:pt-[24px] pb-[36px] md:pb-[132px]">
        <InfiniteArticle />
      </div>
    </FadeInLayout>
  );
}

export default MyArticlePage;

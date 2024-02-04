import { NavLink } from 'react-router-dom';

function MyNewsInfo() {
  const newsInfo = [
    { id: 1, title: '안 읽은 아티클', num: '00', path: 'article/unread' },
    { id: 2, title: '마이 뉴스레터', num: '00', path: 'newsletter' },
    { id: 3, title: '저장된 아티클', num: '00', path: 'saved' },
  ];

  return (
    <div className="w-full pt-[24px] md:pt-[40px] ">
      <div className="py-[20px] md:py-0 px-[19px] min-w769-max-w1080:px-[45px] lg:pl-[60px] lg:pr-[82px] h-[150px] md:h-[136px] bg-black100 border-[1px] border-black300
            flex md:items-center justify-between flex-col md:flex-row w-full rounded-xl md:rounded-2xl"
      >
        <div>
          <div className="flex items-center">
            <span className="text-black900 text-base md:text-2xl font-semibold">홍길동</span>
            <NavLink to="/profile/edit" className="ml-[4px] text-black500 text-xs md:text-sm underline">내 정보</NavLink>
          </div>
          <div className="mt-[2px] md:mt-[4px] text-black700 text-sm font-light">news.gildong@briefy.shop</div>
        </div>

        <ul className="flex">
          {newsInfo.map(({ id, title, num, path }) => (
            <li key={id} className="flex justify-between items-center">
              <NavLink to={`/profile/${path}`}>
                <div className="w-full min-w769-max-w1080:w-[120px] lg:w-[132px]  flex flex-col justify-between">
                  <span className="text-black500 text-sm md:text-base">
                    {title}
                  </span>
                  <span className="mt-[4px] md:mt-[8px] text-black900 text-base md:text-2xl font-semibold">
                    {num}
                  </span>
                </div>
              </NavLink>
              {id !== newsInfo.length && <hr className="mx-[10px] min-w769-max-w1080:mx-[20px] lg:mx-[60px] w-[1px] h-[40px] bg-black300" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyNewsInfo;

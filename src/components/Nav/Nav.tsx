import AllIcon from 'src/assets/icons/nav/AllIcon';
import BusinessIcon from 'src/assets/icons/nav/BusinessIcon';
import TechniqueIcon from 'src/assets/icons/nav/TechniqueIcon';
import HealthIcon from 'src/assets/icons/nav/HealthIcon';
import EntertainmentIcon from 'src/assets/icons/nav/EntertainmentIcon';
import SportsIcon from 'src/assets/icons/nav/SportsIcon';
import EnvironmentIcon from 'src/assets/icons/nav/EnvironmentIcon';
import ScienceIcon from 'src/assets/icons/nav/ScienceIcon';
import TravelIcon from 'src/assets/icons/nav/TravelIcon';
import MediaIcon from 'src/assets/icons/nav/MediaIcon';
import FoodIcon from 'src/assets/icons/nav/FoodIcon';
import { NavLink, useLocation } from 'react-router-dom';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from 'src/components/Nav/Arrow';

function Nav() {
  const { pathname } = useLocation();
  const isInterestPage = pathname === '/interest';

  const menu = [
    { name: '전체', path: 'all', icon: <AllIcon /> },
    { name: '비지니스', path: 'business', icon: <BusinessIcon /> },
    { name: '기술', path: 'technique', icon: <TechniqueIcon /> },
    { name: '건강', path: 'health', icon: <HealthIcon /> },
    { name: '엔터테이먼트', path: 'entertainment', icon: <EntertainmentIcon /> },
    { name: '스포츠', path: 'sports', icon: <SportsIcon /> },
    { name: '환경', path: 'environment', icon: <EnvironmentIcon /> },
    { name: '과학', path: 'science', icon: <ScienceIcon /> },
    { name: '여행', path: 'travel', icon: <TravelIcon /> },
    { name: '미디어', path: 'media', icon: <MediaIcon /> },
    { name: '푸드', path: 'food', icon: <FoodIcon /> },
  ];

  return (
    <>
      {!isInterestPage && (
        <nav>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            <ul className="px-[13.5px] py-[8px] flex flex-wrap gap-3 items-center w-full rounded-[16px] bg-black100">
              {menu.map((item, idx) => (
                <NavLink itemID={(idx).toString()} key={idx} to={`/${item.path}`}>
                  <li
                    className={`${pathname === `/${item.path}` ? 'text-primary bg-secondary' : 'text-black500 bg-black100'}
                  relative flex items-center gap-[6px] px-[16px] h-[44px] rounded-[12px] hover:opacity-80 duration-200 transition-all ease-in-out`}
                  >
                    <div className="w-[24px] h-[24px]">
                      {item.icon}
                    </div>
                    <span className="text-sm">
                      {item.name}
                    </span>
                  </li>
                </NavLink>
              ))}
            </ul>
          </ScrollMenu>
        </nav>
      )}
    </>
  );
}

export default Nav;

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
import { useRef, useState, WheelEvent } from 'react';
import styled from 'styled-components';
import { smoothScroll } from 'src/utils/smoothScroll';

function Nav() {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { pathname } = useLocation();
  const isInterestPage = pathname === '/interest';

  const menu = [
    { id: '1', name: '전체', path: 'all', icon: <AllIcon /> },
    { id: '2', name: '비지니스', path: 'business', icon: <BusinessIcon /> },
    { id: '3', name: '기술', path: 'technique', icon: <TechniqueIcon /> },
    { id: '4', name: '건강', path: 'health', icon: <HealthIcon /> },
    { id: '5', name: '엔터테이먼트', path: 'entertainment', icon: <EntertainmentIcon /> },
    { id: '6', name: '스포츠', path: 'sports', icon: <SportsIcon /> },
    { id: '7', name: '환경', path: 'environment', icon: <EnvironmentIcon /> },
    { id: '8', name: '과학', path: 'science', icon: <ScienceIcon /> },
    { id: '9', name: '여행', path: 'travel', icon: <TravelIcon /> },
    { id: '10', name: '미디어', path: 'media', icon: <MediaIcon /> },
    { id: '11', name: '푸드', path: 'food', icon: <FoodIcon /> },
  ];

  const handleWheel = (e: WheelEvent) => {
    if (!e || !scrollRef.current) return;
    const delta = e.deltaY || e.detail;
    if (delta !== 0) {
      e.preventDefault();
      const newScrollLeft = scrollLeft + delta;

      smoothScroll(scrollRef, newScrollLeft, 300);
      setScrollLeft(newScrollLeft);
    }
  };

  return (
    <>
      {!isInterestPage && (
        <StyledNav>
          <StyledUl
            ref={scrollRef}
            onWheel={handleWheel}
            className="max-w-full overflow-x-auto px-[13.5px] py-[8px] flex gap-3 items-center rounded-[16px] bg-black100"
          >
            <div className="w-[300px] flex gap-3">
              {menu.map((item) => (
                <NavLink className="flex flex-shrink-0 " key={item.id} to={`/${item.path}`}>
                  <div
                    className={`${pathname === `/${item.path}` ? 'text-primary bg-secondary' : 'text-black500 bg-black100'}
                      flex items-center gap-[6px] px-[16px] h-[44px] rounded-[12px] hover:opacity-80 duration-200 transition-all ease-in-out`}
                  >
                    <div className="w-[24px] h-[24px]">
                      {item.icon}
                    </div>
                    <span className="text-sm">
                      {item.name}
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>
          </StyledUl>
        </StyledNav>
      )}
    </>
  );
}

export default Nav;

const StyledUl = styled.ul`
  &::-webkit-scrollbar {
    display: none;
  }

  & {
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const StyledNav = styled.nav`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 25px;
    height: 44px;
    background: linear-gradient(to left, transparent, var(--black-100));
  }

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 8px;
    width: 25px;
    height: 44px;
    background: linear-gradient(to right, transparent, var(--black-100));
  }
`;

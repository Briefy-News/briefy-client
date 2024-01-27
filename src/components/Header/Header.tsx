import { NavLink, useLocation } from 'react-router-dom';
import Logo from 'src/components/icons/Logo';
import { useWindowSize } from '@reactuses/core';
import { useState } from 'react';

import User from 'src/components/Header/User';
import Search from 'src/components/Header/Search';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const { width } = useWindowSize();
  const { pathname } = useLocation();
  const isInterestPage = pathname === '/interest';

  return (
    <>
      <header className="w-full h-[66px] sm:h-[120px] flex justify-between items-center">
        {!showSearch && (
          <>
            {width > 767 && <div className="w-[75px] h-[22px]" />}

            <NavLink to="/">
              <div className="w-[80px] h-[24px] sm:w-[112px] sm:h-[35px]">
                <Logo />
              </div>
            </NavLink>
          </>
        )}

        <div className={`flex items-center h-[22px] ${showSearch ? 'w-full' : 'w-[75px] justify-between'}`}>
          {(!showSearch && !isInterestPage) && <User />}
          {!isInterestPage && <Search showSearch={showSearch} setShowSearch={setShowSearch} />}
        </div>
      </header>
    </>
  );
}

export default Header;

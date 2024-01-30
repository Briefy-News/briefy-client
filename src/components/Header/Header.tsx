import { NavLink, useLocation } from 'react-router-dom';
import Logo from 'src/assets/icons/Logo';
import { useState } from 'react';

import User from 'src/components/Header/User';
import Search from 'src/components/Header/Search';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const { pathname } = useLocation();
  const isInterestPage = pathname === '/interest';

  return (
    <>
      <header className="w-full h-[66px] sm:h-[120px] flex justify-between items-center">
        {!showSearch && (
          <>
            <div className="hidden md:block w-[75px] h-[22px]" />

            <NavLink to="/">
              <Logo />
            </NavLink>
          </>
        )}

        <div className={`flex items-center h-[22px] ${showSearch ? 'w-full' : 'flex gap-[17px] md:gap-[34px]'}`}>
          {(!showSearch && !isInterestPage) && <User />}
          {!isInterestPage && <Search showSearch={showSearch} setShowSearch={setShowSearch} />}
        </div>
      </header>
    </>
  );
}

export default Header;

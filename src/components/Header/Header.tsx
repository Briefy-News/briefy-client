import { NavLink, useMatch } from 'react-router-dom';
import Logo from 'src/assets/icons/Logo';
import { useState } from 'react';

import User from 'src/components/Header/User';
import Search from 'src/components/Header/Search';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const isInterestPage = useMatch('/interest');

  return (
    <>
      <header className="flex w-full h-[66px] sm:h-[120px] justify-center items-center z-40
                sticky top-0 backdrop-blur-lg backdrop-saturate-150 bg-background/70"
      >
        <div className={`${isInterestPage ? 'justify-center' : 'justify-between'} flex w-[1240px] px-5`}>
          {!showSearch && (
            <>
              {!isInterestPage && <div className="hidden md:block w-[75px] h-[22px]" />}

              <NavLink to="/" className="text-primary">
                <Logo />
              </NavLink>
            </>
          )}

          <div className={`flex items-center h-[22px] ${showSearch ? 'w-full' : 'flex gap-[17px] md:gap-[34px]'}`}>
            {(!showSearch && !isInterestPage) && <User />}
            {!isInterestPage && <Search showSearch={showSearch} setShowSearch={setShowSearch} />}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

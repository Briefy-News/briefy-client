import Logo from 'src/assets/icons/Logo';

function Footer() {
  return (
    <div className="flex justify-center w-full bg-black300">
      <div className="w-[1240px] px-5 py-[45px] md:py-[60px]">
        <div className="text-black700">
          <Logo />
        </div>
        <div className="mt-[10px] md:mt-[15px] text-sm md:text-base text-black500">
          ⓒ 2024 Briefy Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;

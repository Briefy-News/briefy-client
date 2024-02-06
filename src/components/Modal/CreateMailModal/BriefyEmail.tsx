import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Input } from 'briefy-design';
import { motion } from 'framer-motion';

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

function BriefyEmail({ email, setEmail } : Props) {
  return (
    <div className="relative flex justify-center gap-[12px] items-center pt-[20px] md:pt-[40px] pb-[84px] md:pb-[58px]">
      <p className="text-black900 text-base md:text-xl font-light">news.</p>
      <div className="w-[164px] md:w-[280px]">
        <Input
          type="text"
          mode="gray"
          placeholder="gildong"
          height="40px"
          mobileHeight="32px"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
      </div>
      {email.trim().length === 0
        && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute top-[60px] left-[44px] md:top-[20px] md:left-[118px] text-black500 text-xs font-light"
          > 홍길동님의 로그인 정보를 참고해 아이디를 추천해드려요.
          </motion.p>
        )}
      <p className="text-black900 text-base md:text-xl font-light">@briefy.shop</p>
    </div>
  );
}

export default BriefyEmail;

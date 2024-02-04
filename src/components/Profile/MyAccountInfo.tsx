import { Input } from 'briefy-design';

function MyAccountInfo() {
  const profileInfo = [
    { id: 1, label: '회원명', value: '홍길동' },
    { id: 2, label: '이메일', value: 'gildong@gmail.com', desc: '구글 간편 가입 이메일' },
  ];

  return (
    <div className="md:pt-[60px] pb-[16px] md:pb-[40px]">
      <h2 className="flex items-center h-[44px] md:h-[64px] text-base md:text-2xl text-black900 font-semibold">
        나의 계정 정보
      </h2>
      <div className="pt-[16px] md:pt-[40px] pb-[36px] md:pb-[68px] gap-[24px] md:gap-0 px-[16px] md:pl-[40px] md:pr-[160px] border-[1px] border-black300 rounded-[12px] md:rounded-[16px]
            flex-col min-w769-max-w1180:gap-[20px] min-w769-max-w1180:flex-col lg:flex-row flex md:justify-between mt-[12px] md:mt-[8px]"
      >
        {profileInfo.map(({ id, label, value, desc }) => (
          <div key={id} className="block md:flex gap-[8px] md:gap-[40px]">
            <div className="md:h-[48px] flex items-center mb-[8px] md:mb-0 text-sm md:text-base text-black500 font-semibold">{label}</div>
            <div className="relative">
              <Input type="text" mode="gray2" value={value} />
              {desc && <p className="absolute left-0 text-black500 text-sm mt-[4px] md:mt-[8px] font-light">{desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAccountInfo;

import Logo from 'src/assets/icons/Logo';

interface Props {
  isEmailCreated: boolean;
}

function LogoAndDesc({ isEmailCreated }: Props) {
  const descList = [
    { id: 1, label: 'STEP 1.', value: '이메일로 사용할 아이디를 입력해주세요.' },
    { id: 2, label: 'STEP 2.', value: '생성된 이메일로 뉴스레터를 구독할 수 있어요.' },
    { id: 3, label: 'STEP 3.', value: '구독하기 버튼을 클릭하면 회원님의 이메일이 자동으로 복사, 입력돼요!' },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-primary">
          <Logo />
        </div>
        {!isEmailCreated && (
          <h3 className="block md:flex mt-[16px] md:mt-[8px] text-sm text-black700 font-light">
            <div className="text-center"><span className="font-semibold">3초</span>&nbsp;만에 이메일 만들고,</div> 뉴스레터 편하게 관리하세요.
          </h3>
        )}
      </div>

      {!isEmailCreated && (
        <div className="pt-[37px] md:pt-[48px] pb-[40px] md:pb-[34px] border-b-1 border-black300 flex justify-center">
          <div className="flex flex-col gap-[16px] md:gap-[20px]">
            {descList.map(({ id, label, value }) => (
              <div key={id} className="flex items-center gap-[8px] md:gap-[10px]">
                <div className="flex h-full">
                  <div className="min-w-[64px] h-[24px] rounded-[100px] border-[1px] border-primary text-primary font-semibold text-xs flex justify-center items-center">
                    {label}
                  </div>
                </div>
                <p className="text-sm text-black900 font-light">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default LogoAndDesc;

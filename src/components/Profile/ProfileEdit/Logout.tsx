import { Button } from 'briefy-design';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="flex justify-center pb-[36px] md:pb-[120px]">
      <div className="w-full md:w-[358px]">
        <Button
          onClick={handleLogout}
          title="로그아웃"
          size="big"
          mode="lineBlue"
          mobileHeight="38px"
        />
      </div>
    </div>
  );
}

export default Logout;

import { useDisclosure } from '@nextui-org/modal';
import UserIcon from 'src/assets/icons/UserIcon';
import { useNavigate } from 'react-router-dom';
import SignInModal from 'src/components/Modal/SignInModal';

function User() {
  const { isOpen, onOpenChange } = useDisclosure();
  const modalProps = { isOpen, onOpenChange };
  const navigate = useNavigate();

  return (
    <>
      {/* <div onClick={onOpen} className="cursor-pointer w-[18px] h-[22px] text-balck900"> */}
      <div onClick={() => navigate('/profile/article/all')} className="cursor-pointer w-[18px] h-[22px] text-balck900">
        <UserIcon />
      </div>

      <SignInModal {...modalProps} />
    </>
  );
}

export default User;

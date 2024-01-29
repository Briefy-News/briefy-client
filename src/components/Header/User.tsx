import { useDisclosure } from '@nextui-org/modal';
import UserIcon from 'src/assets/icons/UserIcon';
import SignInModal from '../Modal/SignInModal';

function User() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const modalProps = { isOpen, onOpenChange };

  return (
    <>
      <div onClick={onOpen} className="cursor-pointer w-[18px] h-[22px] text-balck900">
        <UserIcon />
      </div>

      <SignInModal {...modalProps} />
    </>
  );
}

export default User;

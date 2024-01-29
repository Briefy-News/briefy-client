import GoogleIcon from 'src/assets/icons/GoogleIcon';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ContinueGoogleIcon from '../../assets/icons/ContinueGoogleIcon';

function ContinueGoogle() {
  return (
    <GoogleNavLink
      to="/interest"
      className="flex gap-3 justify-center items-center w-full border-2 border-indigo-600
        h-[40px] sm:h-[48px] rounded-[6px] sm:rounded-[10px]"
    >
      <GoogleIcon />
      <ContinueGoogleIcon />
    </GoogleNavLink>
  );
}

export default ContinueGoogle;

const GoogleNavLink = styled(NavLink)`
  border: 1px solid var(--black-300)
`;

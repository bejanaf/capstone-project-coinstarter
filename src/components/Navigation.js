import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NewsIcon from '../image/news-icon.svg';
import BitcoinIcon from '../image/btc-icon.svg';
import WalletIcon from '../image/wallet.svg';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavLink exact to="/" className="navButton">
        <NavigationIcons src={NewsIcon} alt="Icon for News" />
      </NavLink>

      <NavLink to="/bookmarks" className="navButton">
        <NavigationIcons src={BitcoinIcon} alt="Icon of a Bitcoin" />
      </NavLink>

      <NavLink to="/wallet" className="navButton">
        <NavigationIcons src={WalletIcon} alt="Icon of a Wallet" />
      </NavLink>
    </NavigationWrapper>
  );
}

const NavigationIcons = styled.img`
  width: 2rem;
`;

const NavigationWrapper = styled.div`
  border: 3px solid black;
  width: 90vw;
`;

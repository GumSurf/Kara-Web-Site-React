import Logo from './Logo';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="kasa-header">
    <Logo />
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

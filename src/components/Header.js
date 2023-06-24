import ImgLogo from '../assets/LOGO.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="kasa-header">
            <Link to="/">
                <img className="header-logo" src={ImgLogo} alt="Logo Kasa" />
            </Link>
            <ul className="header-links">
                <li>
                    <Link className="header-link-accueil" to="/">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link className="header-link-a-propos" to="/about">
                        A propos
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
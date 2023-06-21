import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import NotFound from './NotFound';

function NavLink() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/notfound">NotFound</Link>
                </li>
                <li>
                    <Link to="/about">À propos</Link>
                </li>
            </ul>

            <Routes>
                <Route exact path="/notfound" element={<NotFound />} />
                <Route exact path="/about" element={<About />} />
            </Routes>
        </nav>
    );
}

export default NavLink;
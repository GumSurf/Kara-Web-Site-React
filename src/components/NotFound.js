import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Accueil</Link>
        </div>
    )
}

export default NotFound;
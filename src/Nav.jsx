import './App.css'
import {Link} from 'react-router-dom';
function Nav() {


    return (
        <nav>
            <h3>
                logo
            </h3>

            <ul>
            <Link to={"/"}> <span>home</span> </Link>
            <Link to={"about"}> <span>about</span> </Link>
            <Link to={"shop"}> <span>shop</span> </Link>
            </ul>
        </nav>
    )
}

export default Nav

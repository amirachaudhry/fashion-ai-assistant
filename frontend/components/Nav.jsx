import { NavLink } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
    return (
        <div className='mainNavBar'>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/saved">Saved Suggestions</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
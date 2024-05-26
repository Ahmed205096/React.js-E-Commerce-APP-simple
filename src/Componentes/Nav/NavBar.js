import './NavBarStyling.css'
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <div className="NavBar">
            <Link to='/'>Logo</Link>
            <div className='menu-items'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            </div>
        </div>
    );
}
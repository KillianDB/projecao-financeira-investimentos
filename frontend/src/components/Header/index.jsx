import './header.css';
import { NavLink } from 'react-router-dom';

function Header({title}){
    return(
        <header>
            <h1>{title}</h1>
            <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/projecao'>Calcular projeção</NavLink>
            <NavLink className='link' to='/login'>Login</NavLink>
        </header>
    );
};

export default Header;
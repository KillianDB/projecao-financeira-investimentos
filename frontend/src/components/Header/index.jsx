import './header.css';
import { NavLink } from 'react-router-dom';

function Header({title}){
    return(
        <header>
            <h1>{title}</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/projecao'>Calcular projeção</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </header>
    );
};

export default Header;
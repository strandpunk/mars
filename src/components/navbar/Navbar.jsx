import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';

function Navbar() {
  return (

    <nav className={classes.navbar}>

      <NavLink to='/main'>Mission</NavLink><br />
      <NavLink to='/model_perseverance'>Perseverance</NavLink><br />
      <NavLink to='/model_ingenuity'>Ingenuity</NavLink><br />
      <NavLink to='/cost'>Cost</NavLink>

    </nav>

  );
}

export default Navbar;

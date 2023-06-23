import classes from './Header.module.css';
import logo from './Mars_2020_NASA_insignia.png';

function Header() {
  return (

    <header className={classes.header}>
      <div><img id="logo" src={logo} alt="Logo" /></div>
      <div><h1>Mars 2020</h1></div>
    </header>

  );
}

export default Header;

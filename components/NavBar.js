import NavButton from "./NavButton";
import style from '../pages/styles/navbar.module.css'
  
  const NavBar = (props) => (
    <div className={style.NavBar} >
      {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
    </div>
  );
  
  export default NavBar;
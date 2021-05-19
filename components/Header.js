import NavButtons from './NavButton'
import {appTitle} from './Layout'
import style from '../pages/styles/header.module.css'
import Link from 'next/link'

const Header = (props) => (
    <div className={style.Header}>
      <Link href='/'>{appTitle}</Link>
      
      {/* <div>{props.navButtons.filter(1).map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}</div> */}
    </div>
);
  
export default Header;
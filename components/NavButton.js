import Link from "next/link";
import styles from "../styles/NavButton.module.css";
import { withRouter } from "next/router";

const NavButton = (props) => (
  <>
    <Link href={props.path}>
      <div
        className={`${styles.NavButton} ${
          props.router.pathname === props.path ? "active" : ""
        }`}
      >
        <div className={styles.Icon}>{props.icon}</div>
      </div>
    </Link>
  </>
);

export default withRouter(NavButton);

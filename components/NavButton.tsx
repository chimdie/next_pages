import Link from "next/link";
import styles from "../styles/NavButton.module.css";
import { withRouter } from "next/router";
import Image from "next/image";
import cat1 from "../img/cat1.jpeg";

const NavButton = (props: any) => (
  <Link href={props.path}>
    <div
      className={`${styles.NavButton} ${
        props.router.pathname === props.path ? "active" : ""
      }`}
    >
      <div className={styles.Icon}>
        <Image
          sizes="sm"
          src={props.icon}
          alt=""
          // width="150px"
          // height="150px"
        />
      </div>
    </div>
  </Link>
);

export default withRouter(NavButton);

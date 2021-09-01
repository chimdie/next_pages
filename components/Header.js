import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavButtons from "./NavButton";
import { appTitle } from "./Layout";
import style from "../styles/header.module.css";

const Header = (props) => {
  const [isNav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", resize);
  }, []);

  const resize = () => {
    setNav(window.innerWidth <= 760);
  };

  return (
    <div className={style.Header}>
      <Link href="/">{appTitle}</Link>

    </div>
  );
};

export default Header;

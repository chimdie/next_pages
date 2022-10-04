import { useEffect, useState } from "react";
import { NavBar, Footer } from "../components";
import Head from "next/head";
import navButtons from "../configs/buttonConfig";

export const appTitle = "next|pages";

const Layout = ({ children }: any): JSX.Element => {
  const [isNav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", resize);
  }, []);

  const resize = () => {
    setNav(window.innerWidth <= 760);
  };

  return (
    <div className="Layout">
      <Head>
        <title>{appTitle}</title>
      </Head>
      {/* <Header appTitle={appTitle} /> */}
      <div className="Content">{children}</div>
      {isNav ? <NavBar navButtons={navButtons} /> : <Footer />}
    </div>
  );
};
export default Layout;

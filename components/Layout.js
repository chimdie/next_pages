import Header from "./Header";
import NavBar from "./NavBar";
import Head from "next/head";
import navButtons from "../config/button";

export const appTitle = "next pages";
const Layout = (props, children) => {
  return (
    <div className="Layout">
      <Head>
        <title>{appTitle}</title>
      </Head>
      <Header appTitle={appTitle} />
      <div className="Content">{props.children}</div>
      <NavBar navButtons={navButtons} />
    </div>
  );
};
export default Layout;

import NavButton from "./NavButton";

const NavBar = (props: { navButtons: any[] }) => (
  <div className="NavBar">
    {props.navButtons.map((button) => (
      <NavButton
        key={button.path}
        icon={button.icon}
        path={button.path}
        label={button.label}
      />
    ))}
  </div>
);

export default NavBar;

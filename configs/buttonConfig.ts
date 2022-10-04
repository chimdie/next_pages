import { AiOutlineHome, AiOutlineCompass } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BsCartCheck } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const navButtons = [
  {
    label: "Home",
    path: "/",
    icon: AiOutlineHome,
  },
  {
    label: "Explore",
    path: "/explore",
    icon: AiOutlineCompass,
  },
  {
    label: "Near Me",
    path: "/nearme",
    icon: GrLocation,
  },
  {
    label: "My Cart",
    path: "/mycart",
    icon: BsCartCheck,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: BiUser,
  },
];

export default navButtons;

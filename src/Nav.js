import { NavLink, Outlet } from "react-router-dom";

const navLinks = ["Home", "Popular", "Battle"];
const Nav = () => {
  return (
    <>
      <ul className="nav">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link === "Home" ? "/" : link.toLocaleLowerCase()}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Nav;

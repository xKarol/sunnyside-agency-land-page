import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav className="footer__links">
      <NavLink text={"About"} />
      <NavLink text={"Services"} />
      <NavLink text={"Projects"} />
    </nav>
  );
}

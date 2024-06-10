import Link from "next/link";
import "./index.scss";

interface INavItem {
  text: string;
  href: string;
  active?: boolean;
  type?: "primary" | "secondary" | "tertiary";
  blank?: boolean;
}

const NavItem = ({ text, href, active, type, blank }: INavItem) => {
  return (
    <Link
      className={`portfolio-navitem ${type} ${active ? "active" : ""}`}
      href={href}
      target={blank ? "_blank" : ""}
    >
      {text}
    </Link>
  );
};

export default NavItem;

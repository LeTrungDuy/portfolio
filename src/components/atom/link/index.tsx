import Link from "next/link";
import "./index.scss";

interface INavItem {
  text: string;
  href: string;
  active?: boolean;
  type?: "primary" | "secondary";
}

const NavItem = ({ text, href, active, type }: INavItem) => {
  return (
    <Link
      className={`portfolio-navitem ${type} ${active ? "active" : ""}`}
      href={href}
    >
      {text}
    </Link>
  );
};

export default NavItem;

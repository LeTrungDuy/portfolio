import { ReactNode } from "react";
import "./index.scss";

interface ILayout {
  children: ReactNode;
}

const Layout = ({children}: ILayout) => {
  return (
    <div className="portfolio-layout">
      {children}
    </div>>
  );
};

export default Layout;

import { ReactNode } from "react";
import "./index.scss";

interface ContainerProps {
  children?: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="m-container">{children}</div>;
};

export default Container;

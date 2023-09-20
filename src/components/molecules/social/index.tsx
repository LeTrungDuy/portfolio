import Link from "next/link";
import Icon from "@/components/atom/icon";
import "./index.scss";

interface ISocial {
  href: string;
  iconName: string;
}

const Social = ({ href, iconName }: ISocial) => {
  return (
    <Link className="portfolio-social" href={href} target="_blank">
      <Icon iconName={iconName} />
    </Link>
  );
};

export default Social;

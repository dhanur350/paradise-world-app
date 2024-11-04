import classNames from "classnames";
import { Link } from "react-router-dom";
// import { SvgIcon } from "..";

interface Props {
  isMobile?: boolean;
  options: any[];
}

function MenuBar(props: Props) {
  const { isMobile, options } = props;

  const renderOptions = (item: any, index: number) => {
    return(
      <Link key={index} to={item.path}>
        <span>{item.name}</span>
        {/* <SvgIcon name={item.icon} /> */}
      </Link>
    )
  }

  return (
    <div className={classNames(["menubar-container",],{
      "menubar-container-mobile": isMobile
    })}>{options.map(renderOptions)}</div>
  )
}

export default MenuBar

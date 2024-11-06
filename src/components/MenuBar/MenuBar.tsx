import classNames from "classnames";
import { Link } from "react-router-dom";
import "./MenuBar.scss";
// import { SvgIcon } from "..";

interface Props {
  isMobile?: boolean;
  options: any[];
}

function MenuBar(props: Props) {
  const { isMobile, options } = props;

  const renderOptions = (item: any, index: number) => {

    const redirectToApp = () => {
      if(item.name === 'Services') {
        window.open(import.meta.env.VITE_APP_SERVICE_URL);
      }
    }

    return(
      <Link key={index} to={item.path} className="menubar-links" onClick={redirectToApp}>
        <span className="menubar-link-name">{item.name}</span>
        {/* <SvgIcon name={item.icon} menubar-link-icon /> */}
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

import { MenuBar } from "@/components";
import { menuBarOptions } from "@/utils";
import './Header.scss';

function Header() {
  return (
    <div className="header-container">
      <img src='/logo.jpeg' alt='company logo' className="header-logo" />
      <MenuBar options={menuBarOptions} />
    </div>
  )
}

export default Header;

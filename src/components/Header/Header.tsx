import {CUSTOM_ICON_REF, CustomButton, MenuBar, SvgIcon} from "@/components";
import { menuBarOptions } from "@/utils";
import { useDispatch } from 'react-redux';
import { setToggleMenu } from "@/store/slice";
import './Header.scss';

function Header() {

  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(setToggleMenu())
  }

  return (
    <div className="header-container">
      <img src='/logo.jpeg' alt='company logo' className="header-logo" />
      <MenuBar options={menuBarOptions} />
      <CustomButton noBackground noPadding onClick={handleToggleMenu} baseClassname="header-menu-button">
        <SvgIcon name={CUSTOM_ICON_REF.Burger} size='small' />
      </CustomButton>
    </div>
  )
}

export default Header;

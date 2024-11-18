import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import { paradiseAppSelector } from "@/store/selector";
import { Footer, Header, MenuBar } from "@/components"
import { menuBarOptions } from "@/utils";
import "./Homecontainer.scss";

function HomeContainer() {
  
  const {toggleMenu} = useSelector(paradiseAppSelector);

  return (
    <div className="home-container">
      <Header />
      <div className="outlet-container">
        <Outlet />
        <Footer />
        {toggleMenu && <MenuBar options={menuBarOptions} isMobile />}
      </div>
    </div>
  )
}

export default HomeContainer;

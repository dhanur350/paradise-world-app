import "./Homecontainer.scss";
import { Footer, Header } from "@/components"
import { Outlet } from "react-router-dom"

function HomeContainer() {
  return (
    <div className="home-container">
      <Header />
      <div className="outlet-container">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default HomeContainer;

import {Header} from "@/components"
import { Outlet } from "react-router-dom"

function HomeContainer() {
  return (
    <div>
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  )
}

export default HomeContainer

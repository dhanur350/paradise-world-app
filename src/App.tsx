import { Route, Routes } from "react-router-dom";
import {Home, HomeContainer} from "./containers";
import { URLRoutes } from "./routes";

function App() {

  const {client: {home}} = URLRoutes;

  return (
    <Routes>
      <Route path="/" element={<HomeContainer />}>
        <Route index element={<Home />} />
        <Route path={home} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App

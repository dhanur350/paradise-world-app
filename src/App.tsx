import { About, Home, HomeContainer } from "@/containers";
import { URLRoutes } from "@/routes";
import { Route, Routes } from "react-router-dom";

function App() {

  const {client: {home, about}} = URLRoutes;

  return (
    <Routes>
      <Route path="/" element={<HomeContainer />}>
        <Route index element={<Home />} />
        <Route path={home} element={<Home />} />
        <Route path={about} element={<About />} />
      </Route>
    </Routes>
  )
}

export default App

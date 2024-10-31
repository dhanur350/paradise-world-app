import { Route, Routes } from "react-router-dom";
import {Home, HomeContainer} from "./containers";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeContainer />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App

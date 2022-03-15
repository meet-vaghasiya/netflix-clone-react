import "./App.css";
import * as ROUTE from "./constants/route";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Browse } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTE.HOME} element={<Home />}></Route>
        <Route exact path={ROUTE.BROWSE} element={<Browse />}></Route>
        <Route exact path={ROUTE.SIGN_IN} element={<Login />}></Route>
        <Route exact path={ROUTE.SIGN_UP} element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

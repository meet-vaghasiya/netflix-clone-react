import "./App.css";
import * as ROUTE from "./constants/route";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SignIn, SignUp, Browse } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTE.HOME} element={<Home />}></Route>
        <Route exact path={ROUTE.BROWSE} element={<Browse />}></Route>
        <Route exact path={ROUTE.SIGN_IN} element={<SignIn />}></Route>
        <Route exact path={ROUTE.SIGN_UP} element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import * as ROUTE from "./constants/route";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SignUp, Browse, SignIn } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

function App() {
  const auth = null;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTE.HOME} element={<Home />}></Route>
        <Route
          exact
          path={ROUTE.BROWSE}
          element={<ProtectedRoute Component={<Browse />} />}
        ></Route>
        <Route
          exact
          path={ROUTE.SIGN_IN}
          element={<IsUserRedirect Component={<SignIn />} />}
        ></Route>
        <Route
          exact
          path={ROUTE.SIGN_UP}
          element={<IsUserRedirect Component={<SignUp />} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

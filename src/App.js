import "./App.css";
import { AccordionContainer } from "./containers/Accordion";
import { FooterContainer } from "./containers/Footer";
import { JumbotronContainer } from "./containers/Jumbotron";
import * as ROUTE from "./constants/route";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Browse } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/browse" element={<Browse />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
      </Routes>
      {/* 
      <JumbotronContainer />

      <AccordionContainer />

      <FooterContainer /> */}
    </BrowserRouter>
  );
}

export default App;

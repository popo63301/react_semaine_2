import Home from "./components/Home";
import Statistic from "./components/Statistic";
import Nav from "./components/Nav";
import Description from "./components/Description";

import GlobalStyle from "./Styles/Globals";

import {
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <>
     <GlobalStyle/>
     <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/description" element={<Description />} />
      <Route path="/statistic/:count" element={<Statistic />}/>
    </Routes>
    </>
  );
};

export default App;
import { Navigate, Routes, Route } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import PageGenerique from "./components/PageGenerique";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav>
        <div>une balise pour le fun</div>
      </Nav>
      <hr />
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Navigate to="/page1" />} />
        <Route path="/page/:page_id" element={<PageGenerique />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Erreur 404</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

import Nav from "./components/Nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Article from "./components/Article";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/blog-japonia" element={<HomePage />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

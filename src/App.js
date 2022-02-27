
import Nav from "./components/Nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Article from "./components/Article";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/blog-japonia" element={<HomePage/>}/>
          <Route path="/Article" element={<Article/>}/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

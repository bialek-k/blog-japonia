import About from "./components/About";
import Articles from "./components/Articles";
import Favourite from "./components/Favourite";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Islands from "./components/Islands";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav/>
      <Hero />
      <Islands />
      <Articles />
      <Favourite />
      <About />
      <Footer />
    </div>
  );
}

export default App;

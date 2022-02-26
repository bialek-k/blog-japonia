import About from "./components/About";
import Articles from "./components/Articles";
import Favourite from "./components/Favourite";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Islands from "./components/Islands";

function App() {
  return (
    <div>
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

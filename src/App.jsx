import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./screens/aboutme";
import Contact from "./screens/contact";
import Home from "./screens/home";
import Portfolio from "./screens/portfolio";
const App = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-200">
        <NavBar />
        <Home />
        <AboutMe />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;

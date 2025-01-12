import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./screens/aboutme";
import { Achievement } from "./screens/achievement";
import Home from "./screens/home";
import Portfolio from "./screens/portfolio";
const App = () => {
  return (
    <div className="flex flex-col bg-slate-50">
      <NavBar />
      <Home />
      <div className="px-4">
        <AboutMe />
        <Portfolio />
        <Achievement />
        <Footer />
      </div>
    </div>
  );
};

export default App;

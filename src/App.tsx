import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./screens/aboutme";
import { Achievement } from "./screens/achievement";
import Portfolio from "./screens/portfolio";
const App = () => {
  return (
    <div className="flex flex-col bg-slate-50">
      <div className="px-4">
        <NavBar />
        <AboutMe />
        <Portfolio />
        <Achievement />
        <Footer />
      </div>
    </div>
  );
};

export default App;

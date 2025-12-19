import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./screens/aboutme";
import { Achievement } from "./screens/achievement";
import Home from "./screens/home";
import Portfolio from "./screens/portfolio";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <NavBar />
      <main className="flex flex-col">
        <Home />
        <AboutMe />
        <Portfolio />
        <Achievement />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import Snowfall from "react-snowfall";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./screens/aboutme";
import { Achievement } from "./screens/achievement";
import Home from "./screens/home";
import { Playground } from "./screens/playground";
import Portfolio from "./screens/portfolio";
import { isDecember } from "./utils/isdecember";

const App = () => {
  const isDecemberMonth = isDecember();
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 transition-colors duration-300">
      {isDecemberMonth && (
        <Snowfall
          snowflakeCount={100}
          speed={[0.5, 1.5]}
          wind={[-0.5, 0.5]}
          radius={[0.5, 2]}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        />
      )}
      <NavBar />
      <main className="flex flex-col">
        <Home />
        <AboutMe />
        <Portfolio />
        <Playground />
        <Achievement />
      </main>
      <Footer />
    </div>
  );
};

export default App;

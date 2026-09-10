import { MotionConfig } from "framer-motion";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./screens/about";
import { Achievements } from "./screens/achievements";
import Contact from "./screens/contact";
import Home from "./screens/home";
import { Playground } from "./screens/playground";
import Skills from "./screens/skills";
import Work from "./screens/work";

const App = () => (
  // Respect the user's reduced-motion setting across the app.
  <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-surface text-body">
      <Nav />
      <main>
        <Home />
        <About />
        <Skills />
        <Work />
        <Playground />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  </MotionConfig>
);

export default App;

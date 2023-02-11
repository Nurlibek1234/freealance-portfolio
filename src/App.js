import "./style/main.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "../src/pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contact";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Switch>
          <Route path="/project/:id">
            <Project />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

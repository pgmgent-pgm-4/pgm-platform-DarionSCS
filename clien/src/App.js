import logo from "./logo.svg";
import "./App.css";
import { ROUTES } from "./routes/routes";
import Home from "./pages/Home";
import Blog from "./pages/blog/Blog";
import Curriculum from "./pages/curriculum/Curriculum";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Team from "./pages/team/Team";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.home.path} element={<Home />} />
        <Route path={ROUTES.blog.path} element={<Blog />} />
        <Route path={ROUTES.curriculum.path} element={<Curriculum />} />
        <Route path={ROUTES.portfolio.path} element={<Portfolio />} />
        <Route path={ROUTES.services.path} element={<Services />} />
        <Route path={ROUTES.team.path} element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;

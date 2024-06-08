import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// route imports
import { ROUTES } from "./routes/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages for routing
import Home from "./pages/Home";
import Opleiding from "./pages/opleiding/Opleiding";
import Blog from "./pages/blog/Blog";
import Curriculum from "./pages/curriculum/Curriculum";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Team from "./pages/team/Team";

// detail pages
import ServiceDetail from "./components/detail/ServicesDetail";
import PortfolioDetail from "./components/detail/PortfolioDetail";
import TeamDetail from "./components/detail/TeamDetail";
import BlogDetail from "./components/detail/BlogDetail";

// components that are visible on ALL pages only
import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
          <Header />
          <Routes>
            <Route path={ROUTES.home.path} element={<Home />} />
            <Route path={ROUTES.opleiding.path} element={<Opleiding />} />
            <Route path={ROUTES.blog.path} element={<Blog />} />
            <Route path={`${ROUTES.blog.path}/:id`} element={<BlogDetail />} />
            <Route path={ROUTES.curriculum.path} element={<Curriculum />} />
            <Route path={ROUTES.portfolio.path} element={<Portfolio />} />
            <Route
              path={`${ROUTES.portfolio.path}/:id`}
              element={<PortfolioDetail />}
            />
            <Route path={ROUTES.services.path} element={<Services />} />
            <Route
              path={`${ROUTES.services.path}/:id`}
              element={<ServiceDetail />}
            />
            <Route path={ROUTES.team.path} element={<Team />} />
            <Route path={`${ROUTES.team.path}/:id`} element={<TeamDetail />} />
          </Routes>
          <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </Router>
  );
}

export default App;

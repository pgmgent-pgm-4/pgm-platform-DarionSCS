import logo from "./logo.svg";
import "./App.css";

//routes
import { ROUTES } from "./routes/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";

// pages
import Home from "./pages/Home";
import Blog from "./pages/blog/Blog";
import Curriculum from "./pages/curriculum/Curriculum";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Team from "./pages/team/Team";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path={ROUTES.home.path} element={<Home />} />
          <Route path={ROUTES.blog.path} element={<Blog />} />
          <Route path={ROUTES.curriculum.path} element={<Curriculum />} />
          <Route path={ROUTES.portfolio.path} element={<Portfolio />} />
          <Route path={ROUTES.services.path} element={<Services />} />
          <Route path={ROUTES.team.path} element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;

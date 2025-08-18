import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Accomplishments from "./components/Accomplishments";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTop";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/contact";
  const hideBackToTop = location.pathname === "/contact";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <About />
              <Accomplishments />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!hideBackToTop && <BackToTopButton />}
    </>
  );
}

function App() {
  return (
    <div className="w-full min-h-screen">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;

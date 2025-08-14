import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./components/Landing";
import About from "./components/about";
import Accomplishments from "./components/Accomplishments";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTop"; // import button
import { useEffect } from "react";

function Layout() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/contact"; // hides navbar in contact
  const hideBackToTop = location.pathname === "/contact"; // hides back to top in contact

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

      {/* Show Back to Top button unless on /contact */}
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

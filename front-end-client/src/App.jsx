import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Videography from "./pages/Videography/Videography.jsx";
import Coding from "./pages/Coding/Coding.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Contact from "./pages/Contact/contact.jsx" ; 

function App() {
  return (
    <Router>
      <div className="appLayout">
        <Sidebar />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/videography" element={<Videography />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

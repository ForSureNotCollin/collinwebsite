import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Videography from "./pages/Videography/Videography";
import Coding from "./pages/Coding/Coding";
import Dashboard from "./pages/Dashboard/Dashboard";

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

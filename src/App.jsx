import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Selection from "./Pages/Selection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/selection" element={<Selection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

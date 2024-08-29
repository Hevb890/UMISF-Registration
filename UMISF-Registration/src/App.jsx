import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Selection from "./Pages/Selection";
import AgeRegister from "./Pages/AgeRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/ageregister" element={<AgeRegister />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

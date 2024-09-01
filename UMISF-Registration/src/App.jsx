import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Selection from "./Pages/Selection";
import AgeRegister from "./Pages/AgeRegister";
import RulesandRegulations from "./Pages/RulesandRegulations"
import PastPerformances from "./Pages/PastPerformances";
import Payment from "./Pages/Payment";
import Finishing from "./Pages/Finishing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/ageregister" element={<AgeRegister />} />
          <Route path="/rules" element={<RulesandRegulations />} />
          <Route path="/pastperformance" element={<PastPerformances/>} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/finish" element={<Finishing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

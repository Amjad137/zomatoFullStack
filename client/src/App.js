import HomePage from "./Pages/Home.page";
import { Routes, Route } from "react-router-dom";
import Cindex from "./Components/Master";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:type" element={<Cindex />} />
      </Routes>
    </>
  );
}

export default App;

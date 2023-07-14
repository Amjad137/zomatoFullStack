import { Routes, Route } from "react-router-dom";

//pages
import HomePage from "./Pages/Home.page";
import Delivery from "./Pages/Delivery.page";
import Dining from "./Pages/Dining.page";
import NightLife from "./Pages/NightLife.page";
import SignUp from "./Pages/Signup.page";
import Signin from "./Pages/Signin.page";
//master
import Cindex from "./Components/Master";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/night" element={<NightLife />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/:type" element={<Cindex />} />
      </Routes>
    </>
  );
}

export default App;

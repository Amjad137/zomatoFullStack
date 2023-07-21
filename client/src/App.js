import { Routes, Route } from "react-router-dom";
import axios from "axios";
//pages
import HomePage from "./Pages/Home.page";
import SignUp from "./Pages/Signup.page";
import Signin from "./Pages/Signin.page";
import Restaurants from "./Pages/Restaurants.page";
//master
import Cindex from "./Components/Master";
axios.defaults.baseURL = "http://localhost:5500";
axios.defaults.params = {};
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/:type" element={<Cindex />} />
      </Routes>
    </>
  );
}

export default App;

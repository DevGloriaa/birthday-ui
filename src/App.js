import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AddBirthday from "./pages/AddBirthday";

function App() {
  return (
    <Routes>
  
      <Route path="/" element={<Landing />} />
      
    
      <Route path="/login" element={<Login />} />
      
   
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<AddBirthday />} />
    </Routes>
  );
}

export default App;
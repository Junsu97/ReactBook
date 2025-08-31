import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Profile from "./pages/Profile.tsx";

function App() {
  return (
   <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles" element={<Profile />} /> {/* username 없이 처리 */}
        <Route path="/profiles/:username" element={<Profile />} />
    </Routes>
  )
}

export default App

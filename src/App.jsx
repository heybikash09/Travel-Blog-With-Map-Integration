import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./LandingPage/LandingPage"
import Signup from "./Authentication/Signup"
import "./style.css"
import Login from "./Authentication/Login"
import { DemoContext } from "./DemoContext"
import { useState } from "react"
function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <BrowserRouter>
      <DemoContext.Provider value={{isLogin,setIsLogin}}>
      <Routes>
            <Route  path="/" element={<LandingPage />}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
           
      </DemoContext.Provider>
      </BrowserRouter>
    </>
  )
}
export default App

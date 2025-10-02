import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components/header/Header";
import  Homepage  from "./pages/homepage/Homepage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components/header/Header";
import { HomePage } from "./pages/homepage/Homepage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

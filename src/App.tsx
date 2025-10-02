import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components/header/Header";
import  Homepage  from "./pages/homepage/Homepage";
import MoviesPage from "./pages/moviesPage/MoviesPage"
import SeriesPage from "./pages/seriesPage/SeriesPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

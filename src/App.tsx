import { BrowserRouter, Routes, Route } from "react-router-dom";
import GNB from "./components/GNB";
import Footer from "./components/Footer";

import HomePage from "./page/home/HomePage";
import MovieDetailPage from "./page/movie-detail/MovieDetailPage";

function App() {
  return (
    <BrowserRouter>
      <GNB />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="now-playing" element={<MovieDetailPage />} />
        <Route path="upcoming" element={<div>upcoming</div>} />
        <Route path="top-rated" element={<div>top-rated</div>} />
        <Route path="movie-detail" element={<div>movie-detail</div>} />
        <Route path="search-result" element={<div>search-result</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

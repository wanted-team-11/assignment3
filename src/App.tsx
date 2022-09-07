import { BrowserRouter, Routes, Route } from "react-router-dom";
import GNB from "./components/GNB";
import Footer from "./components/Footer";

import HomePage from "./page/home/HomePage";
import MovieDetailPage from "./page/movie-detail/MovieDetailPage";
import InfiniteTest from "./page/InfiniteTest";
import TopRatePage from "./page/top-rate/TopRatePage";
import NowPlayPage from "./page/now-playing/NowPlayPage";

function App() {
  return (
    <BrowserRouter>
      <GNB />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="now-playing" element={<NowPlayPage />} />
        <Route path="upcoming" element={<div>upcoming</div>} />
        <Route path="top-rated" element={<TopRatePage />} />
        <Route path="movie-detail" element={<MovieDetailPage />} />
        <Route path="movie-detail/:id" element={<MovieDetailPage />} />
        <Route path="search-result" element={<div>search-result</div>} />
        <Route path="test" element={<InfiniteTest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

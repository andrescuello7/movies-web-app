import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InitialPage from './ui/screens/initialPage';
import HomePage from './ui/screens/homePage';
import MoviePage from './ui/screens/moviePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movie" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

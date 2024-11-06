import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home/Home';
function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;

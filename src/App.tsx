import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing";
import HomePage from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
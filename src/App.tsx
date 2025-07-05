import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import LandingPage from "./pages/landing";
import HomePage from "./pages/home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position='top-center'
        theme='system'
        toastOptions={{
          style: {
            border: ".060rem dashed rgb(0, 200, 0)",
            borderRadius: "0rem"
          }
        }}
      />
    </>
  );
};

export default App;

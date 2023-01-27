
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Games from "./Pages/Games";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Review from './Pages/Review';



function App() {
  return (
    <>
   
   <BrowserRouter>
   <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="reviews" element={<Review />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
    </>
  );
}

export default App;

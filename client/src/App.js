import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashbord from "./pages/Dashboard";
import Post from "./pages/Post";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Dashbord />} />
      <Route  path="/posts/:id" element={<Post/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;

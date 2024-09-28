import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import Welcome from "./components/Welcome.jsx"
import Services from "./components/Service.jsx";
import Growth2 from "./components/Growth2.jsx";
import Growth1 from "./components/Growth1.jsx";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs.jsx";
import Direction from "./components/Direction.jsx"
import Clients from "./components/Clients.jsx";
import Succeed from "./components/Succeed.jsx";
import Industries from "./components/Industries.jsx";
function App() {
  return (
    <>
      <div className="w-screen overflow-x-hidden">
        <Navbar />
        <Intro />
        <Welcome/>
        <Services/>
        <Growth1/>
        <Growth2/>
        <Succeed />
        <Industries/>
        <Direction/>
        <Blogs />
        <Clients />
        <Footer />
      </div>
    </>
  );
}

export default App;

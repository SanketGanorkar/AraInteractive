import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Welcome from "./components/Welcome.jsx";
import Services from "./components/Service.jsx";
import Growth2 from "./components/Growth2.jsx";
import Growth1 from "./components/Growth1.jsx";
import Blogs from "./components/Blog.jsx";
import Direction from "./components/Direction.jsx";
import Clients from "./components/Clients.jsx";
import Succeed from "./components/Succeed.jsx";
import Industries from "./components/Industries.jsx";
import Blog1 from "./components/Blogs/Blog1.jsx";
import Blog2 from "./components/Blogs/Blog2.jsx";
import Blog3 from "./components/Blogs/Blog3.jsx";
import Blog4 from "./components/Blogs/Blog4.jsx";
import Blog5 from "./components/Blogs/Blog5.jsx";
import Blog6 from "./components/Blogs/Blog6.jsx";
import Scroll from "./components/Scroll.jsx"
import LandingPage from "./components/LandingPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter basename="/AraInteractive">
        <div className="">
          <Scroll />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/about" element={<Welcome />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/growth1" element={<Growth1 />} />
            <Route exact path="/growth2" element={<Growth2 />} />
            <Route exact path="/succeed" element={<Succeed />} />
            <Route exact path="/industries" element={<Industries />} />
            <Route exact path="/direction" element={<Direction />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/clients" element={<Clients />} />
            <Route exact path="/blogs/Reasons Why New Businesses Fail" element={<Blog1 />} />
            <Route exact path="/blogs/How to Write a Positioning Statement" element={<Blog2 />} />
            <Route exact path="/blogs/Starting a Business: How to Go Prepared" element={<Blog3 />} />
            <Route exact path="/blogs/How to Run a Services Business Successfully" element={<Blog4 />} />
            <Route exact path="/blogs/Understanding Outbound Sales" element={<Blog5 />} />
            <Route exact path="/blogs/Understanding the Difference Between Scale and Growth" element={<Blog6 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

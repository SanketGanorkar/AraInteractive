import Footer from "./Footer.jsx"
import Intro from "./Intro.jsx";
import Welcome from "./Welcome.jsx";
import Services from "./Service.jsx";
import Growth2 from "./Growth2.jsx";
import Growth1 from "./Growth1.jsx";
import Blogs from "./Blog.jsx";
import Direction from "./Direction.jsx";
import Clients from "./Clients.jsx";
import Succeed from "./Succeed.jsx";
import Industries from "./Industries.jsx";
import Ashutosh from "./Ashutosh.jsx";

const LandingPage = () => {
  return (
    <>

      <div id="home" className="flex flex-col items-center overflow-x-hidden">
        <Intro />
        <Welcome />
        <Services />
        {/* <Growth1 /> */}
        <Ashutosh />
        <Growth2 />
        <Succeed />
        <Industries />
        <Direction />
        <Blogs />
        <Clients />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
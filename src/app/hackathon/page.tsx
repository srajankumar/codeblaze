import Footer from "@/components/Footer";
import About from "@/components/hackathon/About";
import Hero from "@/components/hackathon/Hero";
import Navbar from "@/components/hackathon/Navbar";
import Flow from "@/components/hackathon/Flowchart";
import Faq from "@/components/hackathon/Faq";
import Themes from "@/components/hackathon/Themes";
import Contact from "@/components/hackathon/Contact";
import Register from "@/components/hackathon/Register";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const page = () => {
  return (
    <main>
      <div className="lg:px-20 md:px-10">
        <Hero />
        <div id="about">
          <About />
        </div>
        {/* <div id="flow">
          <Flow />
        </div> */}
        <div id="themes">
          <Themes />
        </div>
        <div id="process">
          <Register />
        </div>
        <div id="faq">
          <Faq />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <div className="md:hidden">
        <ScrollToTopButton />
      </div>
      <Navbar />
      <Footer />
    </main>
  );
};

export default page;

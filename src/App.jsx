import About from "./componens/About";
import Contact from "./componens/Contact";
import Footer from "./componens/Footer";
import Header from "./componens/Header";
import Hero from "./componens/Hero";
import Skill from "./componens/Skill";
import Work from "./componens/Work";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((ele) => {
      gsap.to(ele, {
        scrollTrigger: {
          trigger: ele,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;

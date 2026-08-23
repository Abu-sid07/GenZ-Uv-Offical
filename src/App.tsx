import { useReveal } from "./lib/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Work from "./components/Work";
import Crew from "./components/Crew";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//importing the aos
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init({
  duration: 800, // Animation duration in milliseconds
  once: false,    // Whether animation should happen only once
});

export default function App() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-ink text-emerald-50">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <Process />
        <Work />
        <Crew />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

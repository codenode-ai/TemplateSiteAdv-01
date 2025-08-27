import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import PracticeAreas from "../components/PracticeAreas";
import LawyerProfile from "../components/LawyerProfile";
import Differentials from "../components/Differentials";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <div className="bg-graphite text-white font-sans min-h-screen">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <LawyerProfile />
      <Differentials />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

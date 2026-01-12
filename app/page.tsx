import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Product";
import Process from "@/components/Process";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Process />
      <Sustainability />
      <Footer />
    </>
  );
}

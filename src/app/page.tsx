import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Practice from "@/components/Practice";
import Team from "@/components/Team";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Practice />
        <Team />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

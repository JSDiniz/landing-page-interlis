import Hero from "@/components/sections/Hero";
import InterfaceShowcase from "@/components/sections/InterfaceShowcase";
import Features from "@/components/sections/Features";
import Fluidity from "@/components/sections/Fluidity";
import Platform from "@/components/sections/Platform";
import Integration from "@/components/sections/Integration";
import Advantages from "@/components/sections/Advantages";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <InterfaceShowcase />
      <Features />
      <Fluidity />
      <Platform />
      <Integration />
      <Advantages />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}
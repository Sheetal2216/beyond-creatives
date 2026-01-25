import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Stats from "../components/Stats";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Stats />
       <Clients />
      <CTA />
      <Footer />
    </>
  );
}

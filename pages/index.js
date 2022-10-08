import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MiddleSec from "../components/MiddleSec";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import TopClientPartner from "../components/TopClientPartner";

export default function Home() {
  const partnerImg = [
    "/Mask41.svg",
    "/Mask43.svg",
    "/Mask44.png",
    "/Mask42.png",
    "/Mask34.png",
    "/Mask39.png",
  ];
  const clientImg = ["/Dream11.png", "/Mask64.svg", "/RummyCircle.png"];

  return (
    <div>
      <Navbar />
      <Hero />
      <MiddleSec />
      <TopClientPartner imgArry={partnerImg} className="top-partner-sec" />
      <TopClientPartner imgArry={clientImg} className="top-client-sec" />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

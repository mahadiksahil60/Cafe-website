import Image from "next/image";
import Navbar from "@/components/Navbar";
import Carousal from "@/components/Carousal";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Carousal/>
<Hero/>
<Footer/>
    </>
  );
}

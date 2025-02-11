import Image from "next/image";
import Navbar from "./Components/Navbar";
import SliderBar from "./Components/SliderBar";
import ProductSection from "./Components/ProductSection";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <SliderBar/>
      <ProductSection/>
      <Footer/>
 
    </>
  );
}

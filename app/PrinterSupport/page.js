"use client"

// import Head from 'next/head';
// import Header from './components/Header';
// import PrinterGuide from './components/PrinterGuide';
// import PrinterSetup from './components/PrinterSetup';
// import Solutions from './components/Solutions';
// import Support from './components/Support';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
// import './globals.css'

import Head from "next/head";
import Avoid from "../Components/Avoid";
import Chatlink from "./content/Chatlink";
import Digonode from "../Components/Digonode";
import Technicians from "../Components/Technicians";
import Assistance from "../Components/Assistance";
import Helppage from "../Components/Helppage";
import { Support } from "@mui/icons-material";
import Solutions from "./content/Solutions";
import PrinterGuide from "./content/PrinterGuide";
import Navbar from "../Components/Navbar";
import SecNavbar from "../Components/SEcNavbar";
import Header from "../Components/Header";
import PrinterSetup from "./content/PrinterSetup";
import SupportOptions from "../Components/SupportOptions";
import SupportPage from "../Components/SupportPage";
import Wrapper from "../Components/Wrapper";
import HpSupportSection from "../Components/HpSupportSection";
import FooterSection from "../Components/FooterSection";
import JivoChat from "../Jivochat";

// import Head from "next/head";
// import PrinterGuide from "./content/PrinterGuide";
// import PrinterSetup from "./content/PrinterSetup";
// import Solutions from "./content/Solutions";
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import Support from "./content/Support";
// import Chatlink from "./content/Chatlink";
// import Avoid from "../components/Avoid";
// import Digonode from "../components/Digonode";
// import Technicians from "../components/Technicians";
// import Assistance from "../components/Assistance";
// import Helppage from "../components/Helppage";
// import ChatSection from "../components/ChatSection";

// import './globals.css'
function Home() {
  return (
    <>
      <SecNavbar/>
      <Header/>
        <PrinterSetup/>
        <SupportOptions/>
        <SupportPage/>
      <Digonode/>
      {/* <ChatSection/> */}
      {/* <Technicians/>
      <Assistance/> */}
      <Avoid/>
      <Wrapper/>
     
      {/* <Solutions /> */}
      {/* <PrinterGuide/> */}
      <FooterSection/>
      <JivoChat/>
     
    </>
  );
}

export default Home;
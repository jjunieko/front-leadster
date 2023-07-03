"use client";
import GlobalFonts from "@/core/globalStyles";
import NavContainer from "@/Layout/NavContainer";
import SubContainer from "@/Layout/SubContainer";
import VideosContainer from "@/Layout/Videos";
import InfosContainer from "@/Layout/InfosContainer";
import Footer from "@/Layout/Footer";

import '@/app/page.module.css';
import "@fortawesome/fontawesome-svg-core/styles.css";


export default function App() {
  return (
    <>
    <GlobalFonts />
    <NavContainer />
    <SubContainer />
    <VideosContainer />
    <InfosContainer />
    <Footer />
    </>
  );
}

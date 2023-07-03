"use client";
import GlobalFonts from "@/core/globalStyles";
import '@/app/page.module.css';
import NavContainer from "@/Layout/NavContainer";
import SubContainer from "@/Layout/SubContainer";
import VideosContainer from "@/Layout/Videos";
import InfosContainer from "@/Layout/InfosContainer";
import FooterContainer from "@/Layout/Footer";



export default function App() {
  return (
    <>
    <GlobalFonts />
    <NavContainer />
    <SubContainer />
    <VideosContainer />
    <InfosContainer />
    <FooterContainer />
    </>
  );
}

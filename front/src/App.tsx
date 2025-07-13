import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import ReactFullpage from '@fullpage/react-fullpage';
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        width: "100vw",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <DarkModeToggle />
      <Navbar />
      <ReactFullpage
        anchors={["hero", "about", "services", "ourwork", "testimonials", "contact"]}
        navigation
        navigationTooltips={["Hero", "About", "Services", "Our Work", "Testimonials", "Contact"]}
        scrollingSpeed={700}
        easing="easeInOutCubic"
        credits={{ enabled: true, label: 'Made with fullPage.js', position: 'right' }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section"><Hero /></div>
              <div className="section"><About /></div>
              <div className="section"><Services /></div>
              <div className="section"><Portfolio /></div>
              <div className="section"><Testimonials /></div>
              <div className="section"><Contact /></div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;

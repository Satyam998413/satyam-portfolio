// app/page.jsx
"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import MyCV from "./components/MyCV";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      <Experience />
        <Projects />
        <MyCV/>
        <Education />
        <Interests />
        <Blogs/>
      </main>
      <Footer />
    </>
  );
}

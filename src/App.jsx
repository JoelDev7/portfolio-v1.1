import ContentWrapper from "./components/ContentWrapper";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export function App() {
  return (
    <ContentWrapper>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </ContentWrapper>
  );
}

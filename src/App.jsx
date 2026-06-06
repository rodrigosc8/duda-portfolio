import { useEffect, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FunSection } from "./components/FunSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectModal } from "./components/ProjectModal";
import { SelectedWorkSection } from "./components/SelectedWorkSection";
import { WhyCreateSection } from "./components/WhyCreateSection";
import { WorkSection } from "./components/WorkSection";
import { projects } from "./data/projects";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    document.documentElement.lang = "pt-PT";
  }, []);

  const selectedWork = projects.filter((project) => project.selected);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-gradient-to-b from-[#fffefe]/75 via-white/30 to-transparent" />

      <Navbar />

      <main>
        <HeroSection />
        <SelectedWorkSection projects={selectedWork} onOpen={setSelectedProject} />
        <AboutSection />
        <WhyCreateSection />
        <FunSection />
        <WorkSection projects={projects} onOpen={setSelectedProject} />
        <ContactSection />
      </main>

      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;

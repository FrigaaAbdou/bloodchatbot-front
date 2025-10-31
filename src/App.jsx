import { useEffect, useState } from "react";
import { Hero } from "./components/Hero.jsx";
import { Features } from "./components/Features.jsx";
import { ChatPreview } from "./components/ChatPreview.jsx";
import { HowItWorks } from "./components/HowItWorks.jsx";
import { FAQ } from "./components/FAQ.jsx";
import { CTA } from "./components/CTA.jsx";
import { Footer } from "./components/Footer.jsx";
import { FloatingChatButton } from "./components/FloatingChatButton.jsx";
import { ChatWidget } from "./components/ChatWidget.jsx";
import { AnimatedSection } from "./components/AnimatedSection.jsx";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);
  const toggleChat = () => setIsChatOpen((prev) => !prev);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.scrollBehavior = "smooth";
    }
    return () => {
      if (html) {
        html.style.scrollBehavior = "";
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-100">
      <Hero onPrimaryAction={openChat} />
      <AnimatedSection variant="fadeIn" delay={0.2}>
        <Features />
      </AnimatedSection>
      <AnimatedSection variant="slideUp" delay={0.35}>
        <ChatPreview />
      </AnimatedSection>
      <AnimatedSection variant="fadeIn" delay={0.45}>
        <HowItWorks />
      </AnimatedSection>
      <AnimatedSection variant="slideUp" delay={0.55}>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection variant="fadeDown" delay={0.65}>
        <CTA onPrimaryAction={openChat} />
      </AnimatedSection>
      <AnimatedSection as="footer" variant="fadeIn" delay={0.75}>
        <Footer />
      </AnimatedSection>
      <FloatingChatButton onClick={toggleChat} />
      {isChatOpen && <ChatWidget onClose={closeChat} />}
    </div>
  );
}

export default App;

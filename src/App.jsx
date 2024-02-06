import styles from "./style";
import {
  AboutUs,
  Participat,
  Footer,
  Navbar,
  Sponser,
  Hero,
  Event,
  Team,
  Mentor,
  FAQ,
  Timer,
  TimelineSection,
} from "./components";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";

import "aos/dist/aos.css";
import Community from "./components/Community";
import Faculty from "./components/Faculty";

const App = () => {
  AOS.init();
  return (
    <div className="bg-primary w-full overflow-hidden">
      <AnimatedCursor
        innerSize={15}
        outerSize={20}
        color="125, 231, 235"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutUs />
          <Participat />
          <Event />
          <TimelineSection />
          <Timer />
          <Faculty />
          <Team />
          <Mentor />
          <Sponser />
          <Community />
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Team,
  FAQ,
  Timer,
  TimelineSection,
} from "./components";

import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

const App = () => {
  AOS.init();
  return (
    <div className="bg-primary w-full overflow-hidden">
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
          <Stats />
          <Billing />
          <Business />
          {/* <CardDeal /> */}
          {/* <Testimonials /> */}
          {/* <Clients /> */}
          <TimelineSection />
          <Timer />
          <Team />
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

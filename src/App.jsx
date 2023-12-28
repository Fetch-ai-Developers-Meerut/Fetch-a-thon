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
  Timeline,
} from "./components";

const App = () => (
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
        <CardDeal />
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        <Timer />
        <Timeline />
        <Team />
        <FAQ />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

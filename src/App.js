import "./App.css";
import styles from "./style";
import {
  Navbar,
  Header,
  Service,
  Feature1,
  Feature2,
  CTA,
  Footer,
} from "./components";

export default function App() {
  return (
    <div className="w-full overflow-hidden">
      <div
        className={`fixed top-0  ${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth} dark:bg-slate-700`}
      >
        <Navbar />
      </div>
      <div className={` ${styles.flexCenter} ${styles.boxWidth} dark:bg-slate-800`}>
        <Header />
      </div>
      <div className="dark:bg-slate-800">
        <Service />
        <Feature1 />
        <Feature2 />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

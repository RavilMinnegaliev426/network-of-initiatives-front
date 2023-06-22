import { Searcher } from "../components/ui/Searcher/Searcher";
import { Answer } from "../components/ui/answer/Answer";
import { HeaderText } from "../components/ui/header-text/HeaderText";
import { Header } from "../components/ui/header/Header";
import InitiativeSection from "../components/ui/sections/initiatives-section/InitiativeSection";
import styles from "./home.module.scss";
export default function Home() {
  return (
    <div className={styles.GlobalContainer}>
      <div className={styles.wrapper}>
        <Header />
        <HeaderText />
        <Searcher />
        <InitiativeSection />
        <Answer />
      </div>
    </div>
  );
}

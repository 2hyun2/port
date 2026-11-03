import { AboutMe } from "@/components/about-me";

import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={`inner ${styles.page}`} data-page="about">
      <AboutMe />
    </main>
  );
}

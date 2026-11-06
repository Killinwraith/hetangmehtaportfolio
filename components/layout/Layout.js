import { site } from "@/content/site";
import { Chrome } from "./Chrome";
import styles from "./Layout.module.css";

export const Layout = ({ center, children }) => (
  <>
    <Chrome center={center} />
    <main id="main">{children}</main>
    <footer className={styles.footer}>
      <p>© 2026 {site.name}</p>
    </footer>
  </>
);

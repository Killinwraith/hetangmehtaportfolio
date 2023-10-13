import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton onClick={() => window.open("/Hetang_Mehta_Resume_Soft_ENG_V7.pdf")}>
        My resume
      </OutlineButton>
    </header>
  );
};

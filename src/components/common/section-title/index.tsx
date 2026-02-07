import Image from "next/image";
import styles from "./section-title.module.css";
import sporeIcon from "@/assets/images/icons/spore.svg";
import sporeWhiteIcon from "@/assets/images/icons/spore-white.svg";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  white?: boolean;
};

export default function SectionTitle({
  children,
  className,
  white = false,
}: SectionTitleProps) {
  const icon = white ? sporeWhiteIcon : sporeIcon;

  return (
    <div
      className={`${styles.titleRow} ${white ? styles.titleRowWhite : ""} ${
        className ?? ""
      }`.trim()}
    >
      <Image className={styles.titleIcon} src={icon} alt="" />
      <h2 className={styles.title}>{children}</h2>
      <Image className={`${styles.titleIcon} ${styles.titleIconMirrored}`} src={icon} alt="" />
    </div>
  );
}

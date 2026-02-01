import Image from "next/image";
import styles from "./section-title.module.css";
import sporeIcon from "@/assets/images/icons/spore.svg";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <div className={`${styles.titleRow} ${className ?? ""}`.trim()}>
      <Image className={styles.titleIcon} src={sporeIcon} alt="" />
      <h2 className={styles.title}>{children}</h2>
      <Image
        className={`${styles.titleIcon} ${styles.titleIconMirrored}`}
        src={sporeIcon}
        alt=""
      />
    </div>
  );
}

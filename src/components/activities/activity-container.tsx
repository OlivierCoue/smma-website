import Image, { StaticImageData } from "next/image";
import styles from "./activity-container.module.css";

type ActivityContainerProps = {
  icon: StaticImageData;
  text: string;
};

export default function ActivityContainer({
  icon,
  text,
}: ActivityContainerProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <Image className={styles.icon} src={icon} alt="" />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

import styles from "./partner-card.module.css";

type PartnerCardProps = {
  images: string[];
  text: string;
};

export default function PartnerCard({ images, text }: PartnerCardProps) {
  return (
    <article className={styles.card}>
      <div className={`${styles.logoWrap} ${images.length > 1 ? styles.logoWrapMultiple : ""}`}>
        {images.map((image) => (
          <img className={styles.logo} key={image} src={image} alt="" loading="lazy" />
        ))}
      </div>
      <p className={styles.body}>{text}</p>
    </article>
  );
}

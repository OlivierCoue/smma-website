"use client";

import Image from "next/image";
import { useT } from "../../i18n/locale-context";
import SectionTitle from "../common/section-title";
import styles from "./who-are-we.module.css";

import imageMain from "@/assets/images/who-are-we/who-are-we-1.jpg";
import imageSide from "@/assets/images/who-are-we/who-are-we-2.jpg";

export default function WhoAreWe() {
  const t = useT();

  return (
    <section className={styles.section} id="qui-sommes-nous">
      <SectionTitle>{t("who.title")}</SectionTitle>
      <div className={`container ${styles.layout}`}>
        <div className={styles.imageMain}>
          <Image src={imageMain} alt="" sizes="60vw" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.subtitle}>{t("who.subtitle")}</h3>
          <p className={styles.text}>{t("who.body")}</p>
          <div className={styles.imageSide}>
            <Image src={imageSide} alt="" sizes="40vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

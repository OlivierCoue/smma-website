"use client";

import Image from "next/image";
import SectionTitle from "../common/section-title";
import { useT } from "../../i18n/locale-context";
import styles from "./gallery.module.css";
import galleryImage1 from "@/assets/images/gallery/gallery-1.jpg";
import galleryImage2 from "@/assets/images/gallery/gallery-2.jpg";

const GALLERY_URL =
  "https://drive.google.com/drive/folders/11bgXE8QiVgH9UjHjbaD_feJ8g9yVYMNI";

export default function Gallery() {
  const t = useT();

  return (
    <section className={styles.section} id="notre-galerie">
      <div className={`container ${styles.inner}`}>
        <SectionTitle>{t("gallery.title")}</SectionTitle>
        <div className={styles.layout}>
          <div className={styles.leftImageWrap}>
            <Image className={styles.leftImage} src={galleryImage1} alt="" sizes="30vw" />
          </div>
          <div className={styles.centerImageWrap}>
            <Image className={styles.centerImage} src={galleryImage2} alt="" sizes="55vw" />
          </div>
          <aside className={styles.sideContent}>
            <p className={styles.text}>
              {t("gallery.body.beforeBold")}
              <strong>{t("gallery.body.bold")}</strong>
              {t("gallery.body.afterBold")}
            </p>
            <a href={GALLERY_URL} target="_blank" rel="noreferrer" className={styles.button}>
              {t("gallery.cta")}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import SectionTitle from "../common/section-title";
import { useT } from "../../i18n/locale-context";
import styles from "./region.module.css";
import regionMap from "@/assets/images/region/region.png";

export default function Region() {
  const t = useT();

  return (
    <section className={styles.section} id="notre-region">
      <SectionTitle>{t("region.title")}</SectionTitle>
      <div className={`container ${styles.layout}`}>
        <div className={styles.textCol}>
          <h3 className={styles.heading}>{t("region.heading")}</h3>
          <p className={styles.body}>{t("region.body")}</p>
        </div>
        <div className={styles.imageCol}>
          <Image
            src={regionMap}
            alt=""
            sizes="50vw"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

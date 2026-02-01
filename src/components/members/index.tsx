"use client";

import Image from "next/image";
import SectionTitle from "../common/section-title";
import { useT } from "../../i18n/locale-context";
import styles from "./members.module.css";
import membersImage from "@/assets/images/members/members.jpg";

export default function Members() {
  const t = useT();

  return (
    <section className={styles.section} id="nos-membres">
      <SectionTitle>{t("members.title")}</SectionTitle>
      <div className={`container ${styles.layout}`}>
        <div className={styles.imageCol}>
          <Image src={membersImage} alt="" sizes="60vw" />
        </div>
        <div className={styles.content}>
          <div className={styles.stats}>
            <div className={styles.bigNumber}>{t("members.count")}</div>
            <h3 className={styles.heading}>{t("members.heading")}</h3>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.body}>
              {t("members.body1.start")}{" "}
              <strong>{t("members.body1.bold1")}</strong>
              {t("members.body1.middle")}
              {t("members.body1.after")}{" "}
              {t("members.body1.linksPrefix")}
              <a
                className={styles.link}
                href={t("members.body1.link1")}
                target="_blank"
                rel="noreferrer"
              >
                {t("members.body1.link1Label")}
              </a>
              ,{" "}
              <a
                className={styles.link}
                href={t("members.body1.link2")}
                target="_blank"
                rel="noreferrer"
              >
                {t("members.body1.link2Label")}
              </a>
              {t("members.body1.linksSuffix")}
            </p>
            <p className={styles.body}>
              {t("members.body2.start")}{" "}
              <strong>{t("members.body2.bold1")}</strong>{" "}
              {t("members.body2.middle")}{" "}
              <strong>{t("members.body2.bold2")}</strong>{" "}
              {t("members.body2.after")}{" "}
              <strong>{t("members.body2.bold3")}</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

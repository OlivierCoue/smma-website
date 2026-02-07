"use client";

import Image from "next/image";
import SectionTitle from "../common/section-title";
import { useT } from "../../i18n/locale-context";
import styles from "./partners.module.css";
import PartnerCard from "./partner-card";
import backgroundImage from "@/assets/images/partners/partners-background.png";
import officeNationalDesForetsLogo from "@/assets/images/partners/office-national-des-forets.png";
import reNatureLogo from "@/assets/images/partners/re-nature.png";
import cbnLogo from "@/assets/images/partners/cbn.png";
import praillesLogo from "@/assets/images/partners/prailles.png";
import marignyLogo from "@/assets/images/partners/marigny.png";

export default function Partners() {
  const t = useT();

  return (
    <section className={styles.section} id="nos-partenaires">
      <Image
        className={styles.backgroundImage}
        src={backgroundImage}
        alt=""
        fill
        sizes="100vw"
      />
      <div className={styles.backgroundOverlay} />
      <div className={`container ${styles.inner}`}>
        <SectionTitle className={styles.sectionTitle} white>
          {t("partners.title")}
        </SectionTitle>
        <div className={styles.grid}>
          <PartnerCard
            images={[officeNationalDesForetsLogo.src]}
            text={t("partners.onf.body")}
          />
          <PartnerCard images={[reNatureLogo.src]} text={t("partners.reNature.body")} />
          <PartnerCard images={[cbnLogo.src]} text={t("partners.cbn.body")} />
          <PartnerCard
            images={[praillesLogo.src, marignyLogo.src]}
            text={t("partners.communes.body")}
          />
        </div>
      </div>
    </section>
  );
}

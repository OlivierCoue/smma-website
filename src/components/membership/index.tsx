"use client";

import Image from "next/image";
import { useT } from "../../i18n/locale-context";
import styles from "./membership.module.css";
import famoLogo from "@/assets/images/membership/famo.png";
import societeMycologiqueFranceLogo from "@/assets/images/membership/societe-mycologique-france.png";
import reNatureLogo from "@/assets/images/membership/re-nature.png";
import deuxSevresNatureEnvironnementLogo from "@/assets/images/membership/deux-sevres-nature-environnement.png";
import ascomyceteLogo from "@/assets/images/membership/ascomycete.png";
import fongiFranceLogo from "@/assets/images/membership/fongifrance.png";

export default function Membership() {
  const t = useT();

  return (
    <section className={styles.section} id="membership">
      <div className={styles.inner}>
        <h2 className={styles.title}>{t("membership.title")}</h2>
        <div className={styles.logoRow}>
          <div className={styles.logoColumn}>
            <a href="https://www.famo.fr/" target="_blank" rel="noopener noreferrer">
              <Image className={styles.logoFamo} src={famoLogo} alt="" />
            </a>
          </div>
          <div className={styles.logoColumn}>
            <a href="https://www.mycofrance.fr/" target="_blank" rel="noopener noreferrer">
              <Image className={styles.logoSmf} src={societeMycologiqueFranceLogo} alt="" />
            </a>
          </div>
          <div className={styles.logoColumn}>
            <a href="https://www.renatureenvironnement.fr/" target="_blank" rel="noopener noreferrer">
              <Image className={styles.logoReNature} src={reNatureLogo} alt="" />
            </a>
          </div>
          <div className={`${styles.logoColumn} ${styles.logoColumnDouble}`}>
            <a href="https://dsne.org/" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.logoDeuxSevres}
                src={deuxSevresNatureEnvironnementLogo}
                alt=""
              />
            </a>
            <a href="https://fongibase.fongifrance.fr/" target="_blank" rel="noopener noreferrer">
              <Image className={styles.logoFongiFrance} src={fongiFranceLogo} alt="" />
            </a>
          </div>
          <div className={styles.logoColumn}>
            <a href="https://ascomycete.org/" target="_blank" rel="noopener noreferrer">
              <Image className={styles.logoAscomycete} src={ascomyceteLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

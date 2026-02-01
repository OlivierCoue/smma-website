"use client";

import { useLocale, useSetLocale, useT } from "../../i18n/locale-context";
import styles from "./header.module.css";

const navLinks = [
  { href: "#qui-sommes-nous", key: "header.link.about" },
  { href: "#notre-region", key: "header.link.region" },
  { href: "#nos-activites", key: "header.link.activities" },
  { href: "#nos-membres", key: "header.link.members" },
  { href: "#nos-partenaires", key: "header.link.partners" },
  { href: "#notre-galerie", key: "header.link.gallery" },
] as const;

const languageOptions = [
  { value: "fr", label: "FR" },
  { value: "en", label: "EN" },
] as const;

export default function Header() {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const t = useT();

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <div className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true" />
          <span className={styles.brandName}>{t("header.brand")}</span>
        </div>
        <nav className={styles.headerNav} aria-label="Navigation principale">
          {navLinks.map((link, index) => (
            <span className={styles.navItem} key={link.href}>
              <a href={link.href}>{t(link.key)}</a>
              {index < navLinks.length - 1 && (
                <span className={styles.navSep} aria-hidden="true" />
              )}
            </span>
          ))}
          <a className={styles.headerCta} href="#adherer">
            {t("header.cta.join")}
          </a>
          <div className={styles.langSwitch} aria-label="Sélecteur de langue">
            {languageOptions.map((option, index) => {
              const isActive = locale === option.value;
              return (
                <span className={styles.langItem} key={option.value}>
                  <button
                    className={`${styles.langButton} ${
                      isActive ? styles.langButtonActive : ""
                    }`}
                    type="button"
                    onClick={() => setLocale(option.value)}
                  >
                    {option.label}
                  </button>
                  {index < languageOptions.length - 1 && (
                    <span className={styles.langSep} aria-hidden="true">
                      |
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}

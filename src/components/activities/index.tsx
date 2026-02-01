"use client";

import SectionTitle from "../common/section-title";
import { useT } from "../../i18n/locale-context";
import ActivityContainer from "./activity-container";
import styles from "./activities.module.css";

import hikingIcon from "@/assets/images/icons/hiking.svg";
import mushroomIcon from "@/assets/images/icons/mushroom.svg";
import forumIcon from "@/assets/images/icons/forum.svg";
import bulletinIcon from "@/assets/images/icons/bulletin.svg";
import libraryIcon from "@/assets/images/icons/library.svg";
import inventoryIcon from "@/assets/images/icons/inventory.svg";
import databaseIcon from "@/assets/images/icons/database.svg";
import pedagoIcon from "@/assets/images/icons/pedago.svg";

const activityItems = [
  { icon: hikingIcon, key: "activities.item.hiking" },
  { icon: mushroomIcon, key: "activities.item.exhibition" },
  { icon: forumIcon, key: "activities.item.forum" },
  { icon: bulletinIcon, key: "activities.item.bulletin" },
  { icon: libraryIcon, key: "activities.item.library" },
  { icon: inventoryIcon, key: "activities.item.inventory" },
  { icon: databaseIcon, key: "activities.item.database" },
  { icon: pedagoIcon, key: "activities.item.pedago" },
] as const;

export default function Activities() {
  const t = useT();

  return (
    <section className={styles.section} id="nos-activites">
      <SectionTitle>{t("activities.title")}</SectionTitle>
      <div className={`container ${styles.grid}`}>
        {activityItems.map((item) => (
          <ActivityContainer
            key={item.key}
            icon={item.icon}
            text={t(item.key)}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useT } from "../../i18n/locale-context";
import styles from "./carousel.module.css";

import image1 from "@/assets/images/carousel/carousel-1.png";
import image2 from "@/assets/images/carousel/carousel-2.png";
import image3 from "@/assets/images/carousel/carousel-3.png";
import image4 from "@/assets/images/carousel/carousel-4.png";
import maskImage from "@/assets/images/carousel/mask-carousel.png";

const images = [image1, image2, image3, image4] as const;

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const t = useT();

  useEffect(() => {
    const id = window.setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, [activeIndex]);

  return (
    <section className={styles.carousel}>
      <div className={styles.viewport}>
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === prevIndex;
          const className = [
            styles.slide,
            isActive ? styles.slideActive : "",
            isPrev ? styles.slidePrev : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div className={className} key={image.src}>
              <Image
                src={image}
                alt=""
                fill
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          );
        })}
        <div className={styles.overlay} />
        <Image
          className={styles.mask}
          src={maskImage}
          alt=""
          sizes="100vw"
          priority
        />
        <div className={styles.contentWrap}>
          <div className={styles.content}>
            <h1>{t("hero.title")}</h1>
          </div>
        </div>
        <div className={styles.dots} aria-hidden="true">
          {images.map((_, index) => (
            <span
              className={`${styles.dot} ${
                index === activeIndex ? styles.dotActive : ""
              }`}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

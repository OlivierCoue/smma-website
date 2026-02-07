"use client";

import { useT } from "../../i18n/locale-context";
import useJoiningForm from "./use-joining-form";
import styles from "./joining.module.css";

export default function Joining() {
  const t = useT();
  const { form, copyStatus, setField, setWantsToJoin, setPaymentMethod, copyFormToClipboard } =
    useJoiningForm();

  return (
    <section className={styles.section} id="adherer">
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>{t("joining.title")}</h2>
        <div className={styles.layout}>
          <div className={styles.leftCol}>
            <p className={styles.intro}>{t("joining.intro")}</p>

            <article className={styles.infoCard}>
              <p className={styles.price}>{t("joining.price.amount")}</p>
              <p className={styles.infoText}>
                {t("joining.price.beforeBold")}
                <strong>{t("joining.price.bold")}</strong>
                {t("joining.price.afterBold")}
              </p>
            </article>

            <article className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{t("joining.contacts.title")}</h3>
              <p className={styles.infoText}>
                {t("joining.contacts.intro")}
                <br />
                {t("joining.contacts.presidentLabel")}{" "}
                <a href={`mailto:${t("joining.contacts.presidentEmail")}`}>
                  {t("joining.contacts.presidentEmail")}
                </a>
                <br />
                {t("joining.contacts.secretaryLabel")}{" "}
                <a href={`mailto:${t("joining.contacts.secretaryEmail")}`}>
                  {t("joining.contacts.secretaryEmail")}
                </a>
              </p>
            </article>
          </div>

          <div className={styles.formCard}>
            <p className={styles.formIntro}>
              {t("joining.form.intro.beforeBold")}
              <strong>{t("joining.form.intro.bold")}</strong>
              {t("joining.form.intro.afterBold")}{" "}
              <a href={`mailto:${t("joining.form.email")}`}>{t("joining.form.email")}</a>
            </p>

            <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
              <div className={styles.fieldsCol}>
                <input
                  className={styles.input}
                  placeholder={t("joining.form.field.lastName")}
                  value={form.lastName}
                  onChange={(event) => setField("lastName", event.target.value)}
                />
                <input
                  className={styles.input}
                  placeholder={t("joining.form.field.firstName")}
                  value={form.firstName}
                  onChange={(event) => setField("firstName", event.target.value)}
                />
                <input
                  className={styles.input}
                  placeholder={t("joining.form.field.address")}
                  value={form.postalAddress}
                  onChange={(event) => setField("postalAddress", event.target.value)}
                />
                <input
                  className={styles.input}
                  placeholder={t("joining.form.field.email")}
                  value={form.email}
                  onChange={(event) => setField("email", event.target.value)}
                />
              </div>

              <div className={styles.controlsCol}>
                <input
                  className={styles.input}
                  placeholder={t("joining.form.field.phone")}
                  value={form.phone}
                  onChange={(event) => setField("phone", event.target.value)}
                />

                <div className={styles.choiceRow}>
                  <span className={styles.choiceLabel}>{t("joining.form.wantsJoin.label")}</span>
                  <div className={styles.segmentedControl}>
                    <button
                      className={`${styles.segmentButton} ${
                        form.wantsToJoin ? styles.segmentButtonActive : ""
                      }`}
                      type="button"
                      onClick={() => setWantsToJoin(true)}
                    >
                      {t("joining.form.wantsJoin.yes")}
                    </button>
                    <button
                      className={`${styles.segmentButton} ${
                        !form.wantsToJoin ? styles.segmentButtonActive : ""
                      }`}
                      type="button"
                      onClick={() => setWantsToJoin(false)}
                    >
                      {t("joining.form.wantsJoin.no")}
                    </button>
                  </div>
                </div>

                <div className={styles.choiceRow}>
                  <span className={styles.choiceLabel}>{t("joining.form.payment.label")}</span>
                  <div className={styles.segmentedControl}>
                    <button
                      className={`${styles.segmentButton} ${
                        form.paymentMethod === "cheque" ? styles.segmentButtonActive : ""
                      }`}
                      type="button"
                      onClick={() => setPaymentMethod("cheque")}
                    >
                      {t("joining.form.payment.cheque")}
                    </button>
                    <button
                      className={`${styles.segmentButton} ${
                        form.paymentMethod === "transfer" ? styles.segmentButtonActive : ""
                      }`}
                      type="button"
                      onClick={() => setPaymentMethod("transfer")}
                    >
                      {t("joining.form.payment.transfer")}
                    </button>
                  </div>
                </div>

                <button
                  className={`${styles.copyButton} ${
                    copyStatus === "success"
                      ? styles.copyButtonSuccess
                      : copyStatus === "error"
                      ? styles.copyButtonError
                      : ""
                  }`}
                  type="button"
                  onClick={() => {
                    void copyFormToClipboard();
                  }}
                >
                  {copyStatus === "success"
                    ? t("joining.form.copied")
                    : copyStatus === "error"
                    ? t("joining.form.copyError")
                    : t("joining.form.copy")}
                </button>
                <p className={styles.copyFeedback} aria-live="polite">
                  {copyStatus === "success"
                    ? t("joining.form.copiedHint")
                    : copyStatus === "error"
                    ? t("joining.form.copyErrorHint")
                    : ""}
                </p>
              </div>
            </form>

            <div className={styles.paymentBlocks}>
              <div>
                <p className={styles.paymentText}>{t("joining.payment.transferText")}</p>
                <div className={styles.paymentBox}>
                  <strong>{t("joining.payment.transfer.boxTitle")}</strong>
                  <br />
                  {t("joining.payment.transfer.ibanLabel")}{" "}
                  <strong>{t("joining.payment.transfer.ibanValue")}</strong>
                  <br />
                  {t("joining.payment.transfer.bicLabel")}{" "}
                  <strong>{t("joining.payment.transfer.bicValue")}</strong>
                </div>
              </div>
              <div>
                <p className={styles.paymentText}>{t("joining.payment.chequeText")}</p>
                <div className={styles.paymentBox}>
                  <strong>{t("joining.payment.cheque.name")}</strong>
                  <br />
                  <strong>{t("joining.payment.cheque.address1")}</strong>
                  <br />
                  <strong>{t("joining.payment.cheque.address2")}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

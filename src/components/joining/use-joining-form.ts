import { useEffect, useRef, useState } from "react";

export type JoiningPaymentMethod = "cheque" | "transfer";

export type JoiningFormState = {
  lastName: string;
  firstName: string;
  postalAddress: string;
  email: string;
  phone: string;
  wantsToJoin: boolean;
  paymentMethod: JoiningPaymentMethod;
};

const initialState: JoiningFormState = {
  lastName: "",
  firstName: "",
  postalAddress: "",
  email: "",
  phone: "",
  wantsToJoin: true,
  paymentMethod: "cheque",
};

type JoiningFieldName = "lastName" | "firstName" | "postalAddress" | "email" | "phone";
type CopyStatus = "idle" | "success" | "error";

export default function useJoiningForm() {
  const [form, setForm] = useState<JoiningFormState>(initialState);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setField = (name: JoiningFieldName, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const setWantsToJoin = (value: boolean) => {
    setForm((prev) => ({ ...prev, wantsToJoin: value }));
  };

  const setPaymentMethod = (value: JoiningPaymentMethod) => {
    setForm((prev) => ({ ...prev, paymentMethod: value }));
  };

  const resetForm = () => {
    setForm(initialState);
  };

  const copyFormToClipboard = async () => {
    const content = [
      "Nom: " + (form.lastName || "-"),
      "Prénom: " + (form.firstName || "-"),
      "Adresse postale: " + (form.postalAddress || "-"),
      "Adresse mail: " + (form.email || "-"),
      "Numéro de téléphone: " + (form.phone || "-"),
      "Je souhaite m'inscrire: " + (form.wantsToJoin ? "Oui" : "Non"),
      "Mode de règlement: " + (form.paymentMethod === "cheque" ? "Chèque" : "Virement"),
    ].join("\n");

    if (typeof window === "undefined") {
      setCopyStatus("error");
      return false;
    }

    try {
      await navigator.clipboard.writeText(content);
      setCopyStatus("success");
      return true;
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = content;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopyStatus(success ? "success" : "error");
      return success;
    } finally {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = setTimeout(() => {
        setCopyStatus("idle");
      }, 2200);
    }
  };

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  return {
    form,
    copyStatus,
    setField,
    setWantsToJoin,
    setPaymentMethod,
    resetForm,
    copyFormToClipboard,
  };
}

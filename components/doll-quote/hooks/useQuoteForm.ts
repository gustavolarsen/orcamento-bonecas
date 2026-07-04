import { useState } from "react";
import { initialForm, type QuoteFormData } from "../types/quote";
import { formatQuoteSummary } from "../utils/formatQuoteSummary";
import { validateInstagramUrl } from "../utils/validateInstagramUrl";
import { useClipboard } from "./useClipboard";

const LAST_STEP = 9;

export function useQuoteForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<QuoteFormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const { copied, copy: copyToClipboard } = useClipboard(1800);

  const update = <K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) =>
    setForm((old) => ({ ...old, [key]: value }));

  const validate = () => {
    const next: Record<string, string> = {};
    if (step === 1) {
      if (!form.name.trim()) next.name = "Conte para a gente como podemos chamar voc?.";
      if (!/^\S+@\S+.\S+$/.test(form.email)) next.email = "Digite um e-mail v?lido.";
      if (form.phone.replace(/\D/g, "").length < 10) next.phone = "Digite um WhatsApp com DDD.";
    }
    if (step === 2 && !form.dollType) next.dollType = "Escolha uma op??o para continuar.";
    if (step === 3 && !form.customized) next.customized = "Escolha uma op??o para continuar.";
    if (step === 4 && !form.services.length) next.services = "Selecione pelo menos um servi?o.";
    if (step === 6) {
      form.refs.forEach((ref, i) => {
        if (!validateInstagramUrl(ref)) next["ref" + i] = "Cole um link v?lido de uma postagem do Instagram.";
      });
    }
    if (step === 7 && !form.photos.front) next.front = "A foto de frente ?necess?ria para avaliar a boneca.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const next = () => { if (!validate()) return; setErrors({}); setStep((s) => Math.min(s + 1, LAST_STEP)); scrollTop(); };
  const back = () => { setErrors({}); setStep((s) => Math.max(0, s - 1)); scrollTop(); };
  const goToStep = (value: number) => { setErrors({}); setStep(value); scrollTop(); };
  const toggle = (key: "services" | "currentDetails", value: string) =>
    update(key, form[key].includes(value) ?form[key].filter((x) => x !== value) : [...form[key], value]);
  const copySummary = () => copyToClipboard(formatQuoteSummary(form));
  const reset = () => { setSubmitted(false); setStep(0); setForm(initialForm); setErrors({}); };
  const submit = () => setSubmitted(true);

  return { step, form, errors, submitted, copied, update, next, back, goToStep, toggle, copySummary, reset, submit };
}

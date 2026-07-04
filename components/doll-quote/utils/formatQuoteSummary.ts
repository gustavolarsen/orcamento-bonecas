import type { QuoteFormData } from "../types/quote";

export function formatQuoteSummary(form: QuoteFormData) {
  return [
    "Pedido de or?amento ??By Ivi",
    "Cliente: " + form.name,
    "Boneca: " + form.dollType,
    "Servi?os: " + form.services.join(", "),
    "Observa??es: " + form.notes,
  ].join("\n");
}

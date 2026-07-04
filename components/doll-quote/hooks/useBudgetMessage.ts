import { useMemo } from "react";
import type { Order } from "../types/order";

export function useBudgetMessage({ order, value, deadline, internal }: { order: Order; value: string; deadline: string; internal: string }) {
  return useMemo(
    () => [
      "Oi, " + order.name.split(" ")[0] + "! Recebi seu pedido de or?amento.",
      "",
      "Pelo que voc?selecionou:",
      "??" + order.services.join("\n??"),
      "",
      "Analisei as fotos e refer?ncias enviadas.",
      "O valor estimado ficou em R$ " + value + ".",
      "O prazo aproximado ?de " + deadline + ".",
      "",
      "Antes de confirmar, preciso validar:",
      internal,
      "",
      "Obrigada!",
    ].join("\n"),
    [order, value, deadline, internal],
  );
}

import { useMemo } from "react";
import { orders } from "../data/mockOrders";

export function useAdminOrders({ query, filter }: { query: string; filter: string }) {
  return useMemo(
    () => orders.filter((order) => (filter === "Todos" || order.status === filter) && (order.name + " " + order.id + " " + order.doll).toLowerCase().includes(query.toLowerCase())),
    [filter, query],
  );
}

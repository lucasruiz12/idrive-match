// src/utils/compare.js
export const compareField = (vehiculoValue, userValue, labels) => {
  if (userValue === undefined) return { icon: "N/A", tooltip: "Opción no respondida" };
  const match = vehiculoValue === userValue;
  return {
    icon: match ? "✅" : "❌",
    tooltip: match
      ? `Coincide con tu elección: ${labels[userValue] ?? userValue}`
      : `No coincide: ${labels[vehiculoValue] ?? vehiculoValue}`,
  };
};

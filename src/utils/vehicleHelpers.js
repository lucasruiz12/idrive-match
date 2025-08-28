// src/utils/vehicleHelpers.js

export const TERRAIN_MAP = {
  1: "Ciudad",
  2: "Ruta",
  3: "Rural",
  4: "Camino Difícil",
};

export const CONDITION_MAP = {
  N: "Nuevo",
  U: "Usado",
};

export const GAMMA_MAP = {
  A: "Alta",
  M: "Media",
  B: "Baja",
};

export const REVENTA_MAP = {
  A: "Alta",
  M: "Media",
  B: "Baja",
};

/**
 * Devuelve un array de objetos con la info del vehículo y si coincide con la respuesta del usuario
 * @param {object} vehicle - objeto vehículo
 * @param {object} answers - respuestas del usuario
 * @returns {Array} campos dinámicos
 */
export const getVehicleFields = (vehicle, answers) => {
  return [
    {
      label: "Terreno",
      value: vehicle.terrenos.map((t) => TERRAIN_MAP[t]).join(", "),
      match: answers.terreno ? vehicle.terrenos.includes(answers.terreno) : null,
      userChoice: answers.terreno,
    },
    {
      label: "Plazas",
      value: vehicle.plazasMax,
      match: answers.plazas ? vehicle.plazasMax === answers.plazas : null,
      userChoice: answers.plazas,
    },
    {
      label: "Valor",
      value: `$${vehicle.valor}k`,
      match: answers.valor ? vehicle.valor === answers.valor : null,
      userChoice: answers.valor,
    },
    {
      label: "Condición",
      value: CONDITION_MAP[vehicle.condicion],
      match: answers.condicion ? vehicle.condicion === answers.condicion : null,
      userChoice: answers.condicion ? CONDITION_MAP[answers.condicion] : null,
    },
    {
      label: "Gama",
      value: GAMMA_MAP[vehicle.gama],
      match: answers.gama ? vehicle.gama === answers.gama : null,
      userChoice: answers.gama ? GAMMA_MAP[answers.gama] : null,
    },
    {
      label: "Reventa",
      value: REVENTA_MAP[vehicle.reventa],
      match: answers.reventa ? vehicle.reventa === answers.reventa : null,
      userChoice: answers.reventa ? REVENTA_MAP[answers.reventa] : null,
    },
  ];
};

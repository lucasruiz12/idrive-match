export const questions = [
  {
    id: "q1",
    pregunta: "¿Qué uso le vas a dar al vehículo?",
    tipoFiltro: "tipo",
    opciones: [
      { id: "transporte-mercaderias", texto: "Transporte de Mercaderías", valor: [7, 8, 9, 10, 11] },
      { id: "transporte-personas", texto: "Transporte de Personas", valor: [1, 3, 5, 6, 8, 10, 11] },
      { id: "uso-personal-familiar", texto: "Uso Personal Familiar", valor: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12] }
    ]
  },
  {
    id: "q2",
    pregunta: "¿Terrenos por los que vas a circular?",
    tipoFiltro: "terrenos",
    opciones: [
      { id: "urbano", texto: "Urbano", valor: [1] },
      { id: "ruta", texto: "Ruta / Autopista", valor: [2] },
      { id: "rural", texto: "Rural", valor: [3] },
      { id: "caminos-dificiles", texto: "Caminos Dificiles", valor: [4] }
    ]
  },
  {
    id: "q3",
    pregunta: "¿Cantidad de pasajeros que van a usarlo? (Incluido el conductor)",
    tipoFiltro: "plazasMax",
    opciones: [
      { id: "1", texto: "1", valor: 2 },
      { id: "2", texto: "2", valor: 4 },
      { id: "3", texto: "3", valor: 5 },
      { id: "4", texto: "4", valor: 5 },
      { id: "5", texto: "5", valor: 5 },
      { id: "6", texto: "6", valor: 7 },
      { id: "7", texto: "7", valor: 7 },
      { id: "mas-7", texto: "+ de 7", valor: 8 }
    ]
  },
  {
    id: "q4",
    pregunta: "¿Presupuesto a invertir en el vehículo? (Expresado en miles de dólares)",
    tipoFiltro: "valor",
    opciones: [
      { id: "minimo", texto: "Mínimo: Hasta $5", valor: 1 },
      { id: "bajo", texto: "Bajo: de $6 a $10", valor: 2 },
      { id: "medio", texto: "Medio: de $11 a $20", valor: 3 },
      { id: "medio-alto", texto: "Medio Alto: de $21 a $40", valor: 4 },
      { id: "alto", texto: "Alto: de $41 a $110", valor: 5 },
      { id: "muy-alto", texto: "Muy Alto: de $110 a $300", valor: 6 },
      { id: "ilimitado", texto: "Ilimitado: desde $301", valor: 7 }
    ]
  },
  {
    id: "q5",
    pregunta: "¿En qué condición querés el vehículo?",
    tipoFiltro: "condicion",
    opciones: [
      { id: "nuevo", texto: "Nuevo", valor: "N" },
      { id: "usado", texto: "Usado", valor: "U" }
    ]
  },
  {
    id: "q6",
    pregunta: "¿Qué significa el vehículo para vos?",
    tipoFiltro: "gama",
    opciones: [
      { id: "medio", texto: "Me representa, el vehículo representa estatus", valor: "A" },
      { id: "seguro", texto: "Me interesa viajar seguro", valor: "M" },
      { id: "medio-transporte", texto: "Un mero medio de transporte", valor: "B" }
    ]
  },
  {
    id: "q7",
    pregunta: "¿Te importa la futura reventa del vehículo que comprás?",
    tipoFiltro: "reventa",
    opciones: [
      { id: "siempre", texto: "Siempre", valor: "A" },
      { id: "un-poco", texto: "Un poco", valor: "M" },
      { id: "no-me-importa", texto: "No me importa", valor: "B" }
    ]
  }
];

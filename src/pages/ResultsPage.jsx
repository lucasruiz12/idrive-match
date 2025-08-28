// src/pages/ResultsPage.jsx
import React, { useMemo } from "react";
import { Container, Typography, Grid } from "@mui/material";
import VehicleCard from "../components/VehicleCard";
import { vehicles } from "../data/vehicles";
import { useQuestionnaire } from "../context/AppContext";

const ResultsPage = () => {
  const { answers } = useQuestionnaire();

  // Filtrado flexible: devuelve vehículos que coincidan con la mayor cantidad de respuestas posibles
const filteredVehicles = useMemo(() => {
  return vehicles
    .map((vehicle) => {
      let score = 0;

      // Pregunta 1: Tipo de Vehículo
      if (answers["q1"]) {
        if (answers["q1"] && vehicle.tipo === answers["q1"].value) score++;
      }

      // Pregunta 2: Terrenos
      if (answers["q2"]) {
        const terrenos = answers["q2"].value;
        if (vehicle.terrenos.some((t) => terrenos.includes(t))) score++;
      }

      // Pregunta 3: Plazas
      if (answers["q3"]) {
        if (vehicle.plazasMax >= answers["q3"].value) score++;
      }

      // Pregunta 4: Valor
      if (answers["q4"]) {
        if (vehicle.valor <= answers["q4"].value) score++;
      }

      // Pregunta 5: Condición
      if (answers["q5"]) {
        if (vehicle.condicion === answers["q5"].value) score++;
      }

      // Pregunta 6: Gama
      if (answers["q6"]) {
        if (vehicle.gama === answers["q6"].value) score++;
      }

      // Pregunta 7: Reventa
      if (answers["q7"]) {
        if (vehicle.reventa === answers["q7"].value) score++;
      }

      return { ...vehicle, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}, [answers]);


  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, textAlign: "center" }}>
        Tenemos estos vehículos recomendados para vos:
      </Typography>

      <Grid container justifyContent="center" spacing={2}>
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </Grid>
    </Container>
  );
};

export default ResultsPage;

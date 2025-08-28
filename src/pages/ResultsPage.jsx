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

        // Ejemplo de lógica de coincidencia flexible:
        if (answers["q1"]) {
          const tipo = answers["q1"];
          if (Array.isArray(vehicle["Tipo de Vehículo"])) {
            if (vehicle["Tipo de Vehículo"].includes(tipo)) score++;
          } else if (vehicle["Tipo de Vehículo"] === tipo) score++;
        }

        if (answers["q2"] && Array.isArray(answers["q2"])) {
          const terrenos = answers["q2"];
          const match = vehicle.Terreno.some((t) => terrenos.includes(t));
          if (match) score++;
        }

        if (answers["q3"] && Array.isArray(answers["q3"])) {
          const plazas = answers["q3"];
          if (plazas.includes(vehicle["Habitabilidad en plazas máximas"])) score++;
        }

        if (answers["q4"] && vehicle.Valor <= answers["q4"]) score++;
        if (answers["q5"] && vehicle.Condicion === answers["q5"]) score++;
        if (answers["q6"] && vehicle.Gama === answers["q6"]) score++;
        if (answers["q7"] && vehicle.Reventa === answers["q7"]) score++;

        return { ...vehicle, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3); // solo los 3 mejores
  }, [answers]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Vehículos recomendados
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

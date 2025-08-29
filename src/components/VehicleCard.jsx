// src/components/VehicleCard.jsx
import {
  Card,
  CardContent,
  Typography,
  Button,
  Tooltip,
} from "@mui/material";
import { useQuestionnaire } from "../context/AppContext";
import theme from "../theme";

// ==== Diccionarios de mapeo ====
const TERRAIN_MAP = {
  1: "Ciudad",
  2: "Ruta",
  3: "Rural",
  4: "Camino Difícil",
};

const CONDITION_MAP = {
  N: "Nuevo",
  U: "Usado",
};

const GAMA_MAP = {
  A: "Alta",
  M: "Media",
  B: "Baja",
};

const REVENTA_MAP = {
  A: "Alta",
  M: "Media",
  B: "Baja",
};

// ==== Helper universal para comparar cualquier campo ====
const compareField = (fieldName, vehicleValue, userValue) => {
  if (userValue === undefined || userValue === null) {
    return {
      icon: "❔",
      tooltip: "No seleccionaste una preferencia en el cuestionario",
    };
  }

  let match = false;
  let tooltip = "";

  switch (fieldName) {
    case "terrenos":
      // usuario y vehículo son arrays
      match = vehicleValue.some((t) => userValue.includes(t));
      tooltip = match
        ? `Coincide con tu elección: ${userValue.map((t) => TERRAIN_MAP[t]).join(", ")}`
        : `No coincide en terreno (Vehículo: ${vehicleValue.map((t) => TERRAIN_MAP[t]).join(", ")}, Tu elección: ${userValue.map((t) => TERRAIN_MAP[t]).join(", ")})`;
      break;

    case "plazasMax":
      match = vehicleValue >= userValue;
      tooltip = match
        ? `Coincide con tu elección: ${userValue} plazas`
        : `No coincide (Vehículo: ${vehicleValue} plazas, Tu elección: ${userValue} plazas)`;
      break;

    case "valor":
      match = vehicleValue <= userValue;
      tooltip = match
        ? `Coincide con tu presupuesto máximo: $${userValue}k`
        : `No coincide en valor máximo (Vehículo: $${vehicleValue}k, Tu elección: $${userValue}k)`;
      break;

    case "condicion":
      match = vehicleValue === userValue;
      tooltip = match
        ? `Coincide con tu elección: ${CONDITION_MAP[userValue] ?? userValue}`
        : `No coincide en condición (Vehículo: ${CONDITION_MAP[vehicleValue] ?? vehicleValue}, Tu elección: ${CONDITION_MAP[userValue] ?? userValue})`;
      break;

    case "gama":
      match = vehicleValue === userValue;
      tooltip = match
        ? `Coincide con tu elección: ${GAMA_MAP[userValue] ?? userValue}`
        : `No coincide en gama (Vehículo: ${GAMA_MAP[vehicleValue] ?? vehicleValue}, Tu elección: ${GAMA_MAP[userValue] ?? userValue})`;
      break;

    case "reventa":
      match = vehicleValue === userValue;
      tooltip = match
        ? `Coincide con tu elección: ${REVENTA_MAP[userValue] ?? userValue}`
        : `No coincide en reventa (Vehículo: ${REVENTA_MAP[vehicleValue] ?? vehicleValue}, Tu elección: ${REVENTA_MAP[userValue] ?? userValue})`;
      break;

    default:
      // fallback
      match = vehicleValue === userValue;
      tooltip = match
        ? `Coincide con tu elección: ${userValue}`
        : `No coincide (Vehículo: ${vehicleValue}, Tu elección: ${userValue})`;
  }

  return {
    icon: match ? "✅" : "❌",
    tooltip,
  };
};

const VehicleCard = ({ vehicle }) => {
  const { answers } = useQuestionnaire();

  // Comparaciones
  const terrenosStatus = compareField("terrenos", vehicle.terrenos, answers?.q2?.value);
  const plazasStatus = compareField("plazasMax", vehicle.plazasMax, answers?.q3?.value);
  const valorStatus = compareField("valor", vehicle.valor, answers?.q4?.value);
  const condicionStatus = compareField("condicion", vehicle.condicion, answers?.q5?.value);
  const gamaStatus = compareField("gama", vehicle.gama, answers?.q6?.value);
  const reventaStatus = compareField("reventa", vehicle.reventa, answers?.q7?.value);

  const terrenosDisplay = vehicle.terrenos
    ?.map((t) => TERRAIN_MAP[t] || t)
    .join(", ");

  return (
    <Card
      sx={{
        width: 400,
        m: 2,
        borderRadius: 3,
        boxShadow: 4,
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {vehicle.modelo} - {vehicle.marca}
        </Typography>

        <Tooltip title={terrenosStatus.tooltip}>
          <span>
            <Typography variant="body2">
              Terreno: {terrenosDisplay} {terrenosStatus.icon}
            </Typography>
          </span>
        </Tooltip>

        <Tooltip title={plazasStatus.tooltip}>
          <span>
            <Typography variant="body2">
              Plazas: {vehicle.plazasMax} {plazasStatus.icon}
            </Typography>
          </span>
        </Tooltip>

        <Tooltip title={valorStatus.tooltip}>
          <span>
            <Typography variant="body2">
              Valor: ${vehicle.valor}k {valorStatus.icon}
            </Typography>
          </span>
        </Tooltip>

        <Tooltip title={condicionStatus.tooltip}>
          <span>
            <Typography variant="body2">
              Condición: {CONDITION_MAP[vehicle.condicion] ?? vehicle.condicion} {condicionStatus.icon}
            </Typography>
          </span>
        </Tooltip>

        <Tooltip title={gamaStatus.tooltip}>
          <span>
            <Typography variant="body2">
              Gama: {GAMA_MAP[vehicle.gama] ?? vehicle.gama} {gamaStatus.icon}
            </Typography>
          </span>
        </Tooltip>

        <Tooltip title={reventaStatus.tooltip}>
          <span>
            <Typography variant="body2">
              Reventa: {REVENTA_MAP[vehicle.reventa] ?? vehicle.reventa} {reventaStatus.icon}
            </Typography>
          </span>
        </Tooltip>
      </CardContent>

      <Button
        variant="contained"
        component="a"
        href={`https://wa.me/5492364687971?text=Hola! Me interesa el ${vehicle.modelo} - ${vehicle.marca}. ¿Podrías darme más información?`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: 2,
          bgcolor: "#1f7a1f",
          "&:hover": { bgcolor: "#145214" },
          borderRadius: 2,
          fontWeight: "bold",
        }}
      >
        CONSULTAR POR WHATSAPP
      </Button>

    </Card>
  );
};

export default VehicleCard;

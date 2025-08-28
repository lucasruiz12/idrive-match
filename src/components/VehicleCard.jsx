// src/components/VehicleCard.jsx
import { Card, CardContent, Typography, Box, Button, Stack, Tooltip } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useQuestionnaire } from "../context/AppContext";
import { getVehicleFields } from "../utils/vehicleHelpers";

const VehicleCard = ({ vehicle }) => {
    const { answers } = useQuestionnaire();
    const fields = getVehicleFields(vehicle, answers);

    return (
        <Card
            sx={{
                width: 300,
                m: 2,
                borderRadius: 3,
                boxShadow: 4,
                p: 2,
            }}
        >
            <CardContent>
                <Typography variant="h6" fontWeight="bold">
                    {vehicle.modelo} - {vehicle.marca}
                </Typography>

                <Stack spacing={1} sx={{ mt: 1 }}>
                    {fields.map((f) => (
                        <Tooltip key={f.label} title={`Opción elegida: ${f.userChoice || "N/A"}`}>
                            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                {f.label}: {f.value}{" "}
                                {f.match === null ? null : f.match ? (
                                    <CheckCircleOutlineIcon color="success" fontSize="small" />
                                ) : (
                                    <CancelOutlinedIcon color="error" fontSize="small" />
                                )}
                            </Typography>
                        </Tooltip>
                    ))}
                </Stack>

                <Box sx={{ mt: 2, textAlign: "center" }}>
                    <Button
                        variant="contained"
                        color="success"
                        href={`https://wa.me/5492364687971?text=Hola!%20Quiero%20consultar%20más%20información%20sobre%20el%20siguiente%20vehículo:%20*${encodeURIComponent(vehicle.marca + " " + vehicle.modelo)}*`}
                        target="_blank"
                    >
                        Consultar por WhatsApp
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default VehicleCard;
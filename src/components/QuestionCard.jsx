// src/components/QuestionCard.jsx
import { Box, Typography, Button, Stack } from "@mui/material";
import { useQuestionnaire } from "../context/AppContext";

const QuestionCard = ({ pregunta, opciones, selectedOption }) => {
  const { selectOption } = useQuestionnaire();

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: "background.paper",
        width: "100%",
        maxWidth: 600,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        {pregunta}
      </Typography>

      <Stack spacing={2}>
        {opciones.map((opcion) => (
          <Button
            key={opcion.id}
            variant={selectedOption === opcion.id ? "contained" : "outlined"}
            color="primary"
            onClick={() => selectOption(opcion.id)}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              py: 1.5,
              fontSize: "1rem",
            }}
          >
            {opcion.texto}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default QuestionCard;

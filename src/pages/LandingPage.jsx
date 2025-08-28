// src/pages/LandingPage.jsx
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/cuestionario");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "background.default",
        p: 2,
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Bienvenido a IDrive-Match
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Responde unas preguntas rápidas y te ayudaremos a encontrar el
          vehículo ideal para vos.
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleStart}
        sx={{
          px: 4,
          py: 1.5,
          fontSize: "1.2rem",
          borderRadius: 2,
          "&:hover": { transform: "scale(1.05)" },
          transition: "all 0.3s ease",
        }}
      >
        Comenzar
      </Button>
    </Container>
  );
};

export default LandingPage;

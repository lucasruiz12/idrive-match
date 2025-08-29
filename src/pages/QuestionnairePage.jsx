import { Container, Box, Button } from "@mui/material";
import QuestionCard from "../components/QuestionCard";
import { useQuestionnaire } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

const QuestionnairePage = () => {
  const {
    currentQuestion,
    answers,
    nextQuestion,
    prevQuestion,
  } = useQuestionnaire();

  const navigate = useNavigate();

  const handleNext = () => {
    const hasNext = nextQuestion();
    if (!hasNext) {
      // Cuando se terminan las preguntas, redirigir a resultados
      navigate("/resultados");
    }
  };

  const question = questions[currentQuestion];

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <QuestionCard
        pregunta={question.pregunta}
        opciones={question.opciones}
        selectedOption={answers[question.id]?.keyAnswer}
        questionId={question.id}
      />

      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
        >
          Atrás
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleNext}
          disabled={!answers[question.id]}
        >
          {currentQuestion < questions.length - 1
            ? "Siguiente"
            : "Ver Resultados"}
        </Button>
      </Box>
    </Container>
  );
};

export default QuestionnairePage;

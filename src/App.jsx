import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuestionnairePage from "./pages/QuestionnairePage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cuestionario" element={<QuestionnairePage />} />
        <Route path="/resultados" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

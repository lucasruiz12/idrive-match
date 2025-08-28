// src/context/AppContext.jsx
import React, { createContext, useState, useContext } from "react";
import { questions } from "../data/questions";

const AppContext = createContext();
export const useQuestionnaire = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const selectOption = (optionId) => {
    const question = questions[currentQuestion];
    const questionId = questions[currentQuestion].id;
    const option = question.opciones.find((opt) => opt.id === optionId);
    if (!option) return;
    setAnswers((prev) => ({ ...prev, [questionId]: { keyAnswer: option.id, value: option.valor } }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      return true;
    }
    return false;
  };

  const resetQuestionnaire = () => {
    setCurrentQuestion(0);
    setAnswers({});
  };

  return (
    <AppContext.Provider
      value={{
        currentQuestion,
        answers,
        selectOption,
        nextQuestion,
        resetQuestionnaire,
        totalQuestions: questions.length,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

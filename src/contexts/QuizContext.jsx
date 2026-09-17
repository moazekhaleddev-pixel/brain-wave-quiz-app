import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { apiFetch } from "../services/apiFetch";
import { useNavigate } from "react-router-dom";

const QuizContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "catigories/fetched":
      return {
        ...state,
        catigories: action.payload,
        isLoading: false,
      };
    case "quiz/fetched":
      return {
        ...state,
        isLoading: false,
        selectedQuiz: action.payload,
        secoundsRemaining: action.payload.length * 20,
      };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload.answer,
        userAnswers: [...state.userAnswers, action.payload],
        score: action.payload.isCorrect ? state.score + 1 : state.score,
      };
    case "next/question":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "reset/quiz":
      return {
        ...state,
        index: 0,
        answer: null,
        userAnswers: [],
        score: 0,
        secoundsRemaining: 0,
        selectedQuiz: [],
      };
    case "dec/secounds":
      return {
        ...state,
        secoundsRemaining:
          state.secoundsRemaining > 0
            ? state.secoundsRemaining - 1
            : state.secoundsRemaining,
      };
    case "fetch/faild":
      return {
        ...state,
        err: action.payload,
        isLoading: false,
      };
    case "reset/error":
      return {
        ...state,
        err: null,
      };
    default:
      throw new Error("unknown action type");
  }
}
const initialState = {
  catigories: [],
  isLoading: false,
  err: null,
  selectedQuiz: [],
  index: 0,
  answer: null,
  userAnswers: [],
  score: 0,
  secoundsRemaining: 0,
};

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    catigories,
    isLoading,
    err,
    selectedQuiz,
    index,
    answer,
    score,
    userAnswers,
    secoundsRemaining,
  } = state;

  const availableCatigories = catigories.length;
  const totalQuestions = selectedQuiz?.length;
  const isAnswerd = !!answer;
  const currentQuestion = selectedQuiz[index] || {};
  const navigate = useNavigate();

  useEffect(() => {
    const controler = new AbortController();
    async function getCatigories() {
      const signal = controler.signal;
      try {
        dispatch({ type: "loading" });
        const data = await apiFetch("https://opentdb.com/api_category.php", {
          signal,
        });
        dispatch({
          type: "catigories/fetched",
          payload: data["trivia_categories"],
        });
      } catch (e) {
        if (e.name === "AbortError") return;
        dispatch({ type: "fetch/faild", payload: e.message });
      }
    }
    getCatigories();
    return () => {
      controler.abort();
    };
  }, []);
  const getQuiz = useCallback(async (id, params, signal) => {
    dispatch({ type: "reset/error" });
    const type = params.get("type");
    const difficulty = params.get("difficulty");
    const amount = params.get("amount");
    const category = id === "random" ? "" : id;

    try {
      dispatch({ type: "loading" });
      const data = await apiFetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`,
        { signal },
      );
      if (data.results.length === 0)
        throw new Error("There is no Quizes matches this setup");
      dispatch({ type: "quiz/fetched", payload: data.results });
    } catch (error) {
      if (error.name === "AbortError") return;
      dispatch({ type: "fetch/faild", payload: error.message });
    }
  }, []);

  function handleAnswer(answer, isCorrect) {
    dispatch({ type: "newAnswer", payload: { answer, isCorrect } });
  }

  function handleNext(id, params) {
    if (!params) return;
    if (index + 1 === totalQuestions) {
      const type = params?.get("type");
      const difficulty = params?.get("difficulty");
      const amount = params?.get("amount");
      const category = id;
      navigate(
        `/app/results?category=${category}&difficulty=${difficulty}&type=${type}&amount=${amount}`,
      );
      return;
    }
    dispatch({ type: "next/question" });
  }
  function handleBackToCatrgories() {
    dispatch({ type: "reset/error" });
    navigate("/app");
  }

  const decSecounds = useCallback(() => {
    dispatch({ type: "dec/secounds" });
  }, []);

  return (
    <QuizContext.Provider
      value={{
        catigories,
        isLoading,
        err,
        availableCatigories,
        selectedQuiz,
        index,
        score,
        answer,
        userAnswers,
        totalQuestions,
        isAnswerd,
        currentQuestion,
        secoundsRemaining,
        getQuiz,
        handleAnswer,
        handleNext,
        dispatch,
        decSecounds,
        handleBackToCatrgories,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("the quiz context was used outside the provider");
  return context;
}

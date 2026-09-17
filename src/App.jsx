import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginForm from "./components/Login/LoginForm";
import SignUpForm from "./components/Login/SignUpForm";
import AppLayout from "./pages/AppLayout";
import Categories from "./pages/Categories";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import QuizSetupModal from "./components/App/categories/QuizSetupModal";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRouter";
import { QuizProvider } from "./contexts/QuizContext";
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <GuestRoute>
                <Home />
              </GuestRoute>
            }
          />
          <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          >
            <Route index element={<Navigate to="log-in" replace />} />
            <Route path="log-in" element={<LoginForm />} />
            <Route path="sign-up" element={<SignUpForm />} />
          </Route>
          <Route
            path="/app"
            element={
              <QuizProvider>
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              </QuizProvider>
            }
          >
            <Route index element={<Navigate to="categories" replace />} />
            <Route path="categories" element={<Categories />}>
              <Route path=":categoryId/setup" element={<QuizSetupModal />} />
            </Route>
            <Route path="quiz/:categoryId" element={<Quiz />} />
            <Route path="results" element={<Results />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

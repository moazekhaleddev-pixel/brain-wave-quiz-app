import { createContext, useContext, useEffect, useReducer } from "react";
import { apiFetch } from "../services/apiFetch";
const AuthContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
        err: null,
      };
    case "sessionFound":
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "logout":
      return initialState;
    case "rejected":
      return {
        ...initialState,
        err: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}
const BASE_URL = "https://cimascope-auth-server.vercel.app/api";
const initialState = {
  user: {},
  isAuthenticated: false,
  isLoading: false,
  err: null,
};

export function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, err }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  useEffect(() => {
    async function checkSesion() {
      try {
        dispatch({ type: "loading" });
        const data = await apiFetch(`${BASE_URL}/auth/me`, {
          method: "GET",
          credentials: "include",
        });
        dispatch({ type: "sessionFound", payload: data.user });
      } catch (error) {
        if (error.message === "guest_user") {
          dispatch({ type: "logout" });
        } else {
          dispatch({ type: "rejected", payload: error.message });
        }
      }
    }
    checkSesion();
  }, []);

  async function login(email, password) {
    if (!email && !password) return;
    try {
      dispatch({ type: "loading" });
      const data = await apiFetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password }),
        credentials: "include",
      });
      dispatch({ type: "login", payload: data.user });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  async function logout() {
    try {
      dispatch({ type: "loading" });
      const data = await apiFetch(`${BASE_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });
      dispatch({ type: "logout" });
      console.log(data);
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        err,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Auth context was used outSide the auth provider");
  return context;
}

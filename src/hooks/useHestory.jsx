import { useEffect } from "react";

export default function useHestory() {
  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname + window.location.search);

    const handleBackButton = () => {
      window.history.pushState(null, null, window.location.pathname + window.location.search);
      alert("you should finish the quiz".toUpperCase());
    };
    window.addEventListener("popstate", handleBackButton);

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
}
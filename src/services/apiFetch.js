export async function apiFetch(url, options = {}) {
  try {
    const res = await fetch(url, options);

    if (res.ok) {
      return await res.json();
    }

    let errorMessage = "An unexpected error occurred";

    try {
      const errorData = await res.json();
      if (errorData.message) {
        errorMessage = errorData.message;
      }
    } catch {
      /* ignore */
    }

    if (res.status === 401 && url.includes("/auth/me")) {
      throw new Error("guest_user");
    }

    switch (res.status) {
      case 400:
        errorMessage =
          errorMessage !== "An unexpected error occurred"
            ? errorMessage
            : "Invalid request";
        break;
      case 401:
        errorMessage =
          errorMessage !== "An unexpected error occurred"
            ? errorMessage
            : "Unauthorized access";
        break;
      case 403:
        errorMessage = "Forbidden access";
        break;
      case 404:
        errorMessage = "Resource not found";
        break;
      case 500:
        errorMessage = "Internal server error";
        break;
      case 429:
        errorMessage = "to many requests";
        break;
    }

    throw new Error(errorMessage);
  } catch (error) {
    if (error.message === "guest_user") {
      throw error;
    }
    if (error.name === "TypeError") {
      throw new Error("Network connection failed", { cause: error });
    }
    throw error;
  }
}

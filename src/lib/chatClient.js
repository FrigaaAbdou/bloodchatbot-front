const API_BASE_URL = (() => {
  const raw = import.meta.env.VITE_API_BASE_URL;
  if (raw && raw.trim()) {
    return raw.replace(/\/$/, "");
  }

  if (import.meta.env.DEV) {
    console.warn(
      "VITE_API_BASE_URL is not set. Falling back to http://localhost:3000 for local development.",
    );
    return "http://localhost:3000";
  }

  throw new Error(
    "VITE_API_BASE_URL is required. Define it in your Netlify environment or .env file before building.",
  );
})();

async function request(endpoint, options) {
  const url = `${API_BASE_URL}${endpoint}`;
  let response;

  try {
    response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
  } catch (networkError) {
    throw new Error("Erreur réseau : impossible de contacter le serveur.");
  }

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with ${response.status}`);
  }

  return response.json();
}

export async function sendChatMessage({ message, userId }) {
  return request("/chat", {
    method: "POST",
    body: JSON.stringify({ message, userId }),
  });
}

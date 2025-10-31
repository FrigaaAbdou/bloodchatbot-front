const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

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

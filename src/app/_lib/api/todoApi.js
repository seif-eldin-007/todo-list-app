const API_BASE = "/api/todos";

export async function fetchTodos() {
  const response = await fetch(API_BASE, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
}

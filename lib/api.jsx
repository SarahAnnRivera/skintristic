const PHASE_ONE_API =
  "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne";

export async function submitPhaseOne(name, location) {
  const response = await fetch(PHASE_ONE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      location,
    }),
  });

  const data = await response.json();

  if (!response.ok || data.success === false) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data;
}
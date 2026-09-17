const PHASE_ONE_API =
  "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne";

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

const PHASE_TWO_API =
  "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo";

export async function submitPhaseTwo(image) {
  const response = await fetch(PHASE_TWO_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data;
}
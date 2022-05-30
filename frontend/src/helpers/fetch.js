const baseUrl = import.meta.env.VITE_API_URL;

export const fetchWithoutToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`; // localhost:5000/api/auth

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

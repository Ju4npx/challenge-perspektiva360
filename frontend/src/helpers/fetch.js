const baseURL = import.meta.env.VITE_BACKEND_URL;

export const fetchWithoutToken = (endpoint, data, method = "GET") => {
  const url = `${baseURL}/${endpoint}`; // localhost:5000/api/auth

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

export const fetchWithToken = (endpoint, data, method = "GET") => {
  const url = `${baseURL}/${endpoint}`; // localhost:5000/api/auth
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        "x-token": token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};

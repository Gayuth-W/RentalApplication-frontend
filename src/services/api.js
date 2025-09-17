const API_KEY = "bc0b865b52bb151b3eb8f6c09b5ab709";
const BASE_URL = "https://api.themoviedb.org/3";

export const getRentingRates = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export const searchRates = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
}
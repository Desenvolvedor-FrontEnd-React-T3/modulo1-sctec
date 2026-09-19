export default async function fetchHarryApi() {
  const apiURL = "https://hp-api.onrender.com/api/characters";

  const response = await fetch(apiURL);
  const data = await response.json();

  console.log(data[0]);
}

import axios from "axios";

export default async function apiPluga() {
  try {
    const response = await axios.get("https://rickandmortyapi.com/api/character");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

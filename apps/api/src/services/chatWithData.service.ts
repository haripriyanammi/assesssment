import axios from "axios";

export const chatWithDataService = async (query: string) => {
  const VANNA_URL = process.env.VANNA_API_BASE_URL;

  if (!VANNA_URL) {
    throw new Error("VANNA_API_BASE_URL missing in .env");
  }

  const response = await axios.post(`${VANNA_URL}/ask`, {
    question: query,
  });

  return response.data;
};

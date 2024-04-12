import axios from "axios"

export const BASE_URL = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';

const options = {
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '83ff89b8c7mshf33efdc1063b134p192ed6jsn15b04ed79f9a',
    'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
  },
  data: {
    messages: [
      {
        role: 'user',
        content: {question}
      }
    ],
    system_prompt: '',
    temperature: 0.9,
    top_k: 5,
    top_p: 0.9,
    max_tokens: 256,
    web_access: false
  }
};

export const fetchFromAPI = async () => {
    try {
      const {data} = await axios.post(BASE_URL, options.data, options);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
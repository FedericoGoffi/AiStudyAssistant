import axios from "axios";

const API_URL = "http://127.0.0.1:8000/ask";

export const askAI = async (question: string) => {
    try {
        const response = await axios.post(API_URL, { question });
        return response.data.response;
    } catch (error) {
        console.error("Error en askAI:", error);
        throw error;
    }
};
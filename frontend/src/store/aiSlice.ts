import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { askAI } from '../services/aiService'

interface AiState {
    inputText: string;
    answer: string;
    loading: boolean;
    error: string | null;
}

const initialState: AiState = {
    inputText: "",
    answer: "",
    loading: false,
    error: null,
};

export const fetchAnswer = createAsyncThunk(
    "ai/fetchAnswer",
    async (question: string) => {
        const answer = await askAI(question);
        return answer;
    }
);

const aiSlice = createSlice({
    name: "ai",
    initialState,
    reducers: {
        setInputText: (state, action: PayloadAction<string>) => {
            state.inputText = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnswer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAnswer.fulfilled, (state, action) => {
                state.loading = false;
                state.answer = action.payload;
            })
            .addCase(fetchAnswer.rejected, (state) => {
                state.loading = false;
                state.error = "Error al obtener la respuesta.";
            });
    },
});

export const { setInputText } = aiSlice.actions;
export default aiSlice.reducer;
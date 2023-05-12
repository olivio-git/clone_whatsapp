import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllData = createAsyncThunk('/data/getAllData', async (data)=> {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        return response.data.results;
    } catch (error) {
        return error.message;
    }
});

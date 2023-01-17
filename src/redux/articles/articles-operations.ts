import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3";

export const getArticles = createAsyncThunk(
  "aritcles/getArticles",
  async () => {
    const response = await axios.get(
      'https://api.spaceflightnewsapi.net/v3/articles/'
    );

    return response.data;
  }
);

export const getArticleById = createAsyncThunk(
    "aritcles/getArticleById", 
    async (id: number) => {
        const response = await axios.get(
          `https://api.spaceflightnewsapi.net/v3/articles/${id}`
        );
    
        return response.data;
      }
)
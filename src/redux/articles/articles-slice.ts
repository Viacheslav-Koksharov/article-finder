import { createSlice} from "@reduxjs/toolkit";
import { getArticles, getArticleById} from "./articles-operations";
import { IArticleItem } from '../../interfaces/ArticleItem.interfaces';

interface IState {
    articles: IArticleItem[];
    article:  IArticleItem | null;
   loading: boolean;
   }
   
const initialState: IState = {
    articles: [],
    article: null,
    loading: false,

};

const articlesSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder      
      .addCase(getArticles.pending, (state: IState, _) => {
        state.loading = true;
      })
      .addCase(getArticles.fulfilled, (state: IState, action) => {
        state.articles= action.payload;
        state.loading = true;
      })
      .addCase(getArticles.rejected, (state: IState, _) => {
        state.loading = false;
             
      })

      .addCase(getArticleById.pending, (state: IState) => void (state.loading = true))
      .addCase(getArticleById.fulfilled, (state: IState, action) => {
        state.article = action.payload;
        state.loading = true;
       
      })
      .addCase(getArticleById.rejected, (state: IState) => { state.loading = false })
  },
});

export default articlesSlice.reducer;
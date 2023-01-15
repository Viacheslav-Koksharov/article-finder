import axios from "axios";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3";

const getArticles= () => {
    return axios.get("/articles");
};

const getArticleById= (id) => {
    return axios.get(`/articles/${id}`);
};

export { getArticles, getArticleById};
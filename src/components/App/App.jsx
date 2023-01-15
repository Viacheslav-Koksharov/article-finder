import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "../../views/ArticlePage";
import Homepage from "../../views/HomePage";

const App = () => {
		return (
			<>
			<Routes>
			  <Route path="/" element={<Homepage />} />
			  <Route path="/articles/:id" element={<ArticlePage />} />
			</Routes>
		  </>
	);
};

export default App;
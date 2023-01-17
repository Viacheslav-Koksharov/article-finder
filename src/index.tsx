import {StrictMode} from 'react';
import {createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import 'modern-normalize/modern-normalize.css';
import './sass/main.scss';
import App from './components/App';
import { store} from "./redux/store";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>    
     <BrowserRouter>
     <App />     
     </BrowserRouter>    
     </Provider>   
  </StrictMode>
);
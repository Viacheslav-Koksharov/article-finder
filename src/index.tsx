import {StrictMode} from 'react';
import {createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'modern-normalize/modern-normalize.css';
import './sass/main.scss';
import App from './components/App';

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
     <BrowserRouter>
     <App />
     </BrowserRouter>    
  </StrictMode>
);
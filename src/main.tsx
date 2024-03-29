import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/system';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import 'src/style/global.css';
import 'src/index.css';
import 'swiper/css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App />
        <Toaster />
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

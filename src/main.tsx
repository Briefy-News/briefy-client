import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/system';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import 'src/style/global.css';
import 'src/index.css';
import 'swiper/css';
import RQProvider from 'src/components/provider/RQProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RQProvider>
        <NextUIProvider>
          <App />
          <Toaster />
        </NextUIProvider>
      </RQProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from "react-router-dom";
import router from './Router/Router';
import AuthProvider from './Provider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
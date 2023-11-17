'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/home/page';
import { useState } from 'react';
import Scrap from './pages/scrap/page';
import Footer from './components/layout/Footer';

const queryClient = new QueryClient();

export default function Main() {
  const [page, setPage] = useState<'home' | 'scrap'>('home');

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        {page === 'home' && <Home />}
        {page === 'scrap' && <Scrap />}
      </main>
      <Footer setPage={setPage} />
    </QueryClientProvider>
  );
}

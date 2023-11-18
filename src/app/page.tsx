'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from '../pages/home/Home';
import { useState } from 'react';
import Scrap from '../pages/scrap/Scrap';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from '../components/layout/Footer';
import Header from '@/components/layout/Header';
import styled from 'styled-components';

const queryClient = new QueryClient();

export default function Main() {
  const [page, setPage] = useState<'home' | 'scrap'>('home');

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Header />
      <Container>
        {page === 'home' && <Home />}
        {page === 'scrap' && <Scrap />}
      </Container>
      <Footer page={page} setPage={setPage} />
    </QueryClientProvider>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 60px 0 85px 0;

  display: flex;
  flex-direction: column;
`;

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ArticleFetcher from '../components/article/Fetcher/ArticleFetcher';
import GlobalStyles from '../styles/GlobalStyles';
import Header from '@/components/layout/Header';
import styled from 'styled-components';

const queryClient = new QueryClient();

export default function Main() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Header />
      <Container>
        <ArticleFetcher />
      </Container>
    </QueryClientProvider>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

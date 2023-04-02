import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ToastContainer } from 'react-toastify';

import Image from 'next/image';

import { BaseContainer } from '@/components/Container';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';
import Header from '../components/Header';

import 'react-toastify/dist/ReactToastify.css';

import BGImg from '../assets/bg.png';

import './font.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <BaseContainer>
        <Header />
        <Component {...pageProps} />
      </BaseContainer>

      <Image src={BGImg} alt="Apontador de Estrelas" className="bg" />

      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default MyApp;

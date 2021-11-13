import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useRouter } from 'next/dist/client/router';
import * as ga from '../lib/ga';
import { DocumentHead } from '../components/DocumentHead';
import { ThemeProvider } from '../providers';

import * as React from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Docs from "./components/Docs";
import RegisterDocActions from "./components/Docs/RegisterDocActions";


import { ActionImpl } from "kbar";
import {   
  ActionId,
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  createAction, } from 'kbar';


const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DocumentHead />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;

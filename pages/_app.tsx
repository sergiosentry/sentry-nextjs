import "../modules/sentry";
import React, { ReactNode } from "react";
import type { NextComponentType, NextPageContext } from "next";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { ErrorBoundary } from "@sentry/nextjs";

type NextLayoutComponentType<P = {}> = NextComponentType<
  NextPageContext,
  any,
  P
> & {
  getPageLayout?: (page: ReactNode) => ReactNode;
};

type AppLayoutProps = AppProps & {
  Component: NextLayoutComponentType;
};

const getDefaultPageLayout = (page: ReactNode) => page;

const CustomApp: NextComponentType<
  AppContext,
  AppInitialProps,
  AppLayoutProps
> = ({ Component, pageProps }) => {
  const getPageLayout = Component.getPageLayout || getDefaultPageLayout;

  return (
    <ErrorBoundary>{getPageLayout(<Component {...pageProps} />)}</ErrorBoundary>
  );
};

export default CustomApp;

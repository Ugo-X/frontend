import React, { useMemo, useState } from "react";
import MainLayout from "../src/components/Layout/MainLayout";
import MySorobanReactProvider from "../src/soroban/MySorobanReactProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../src/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, AppContext } from "../src/contexts";
import { Provider } from 'react-redux'
import store from '../src/state'
import { NextPage } from "next";
import { LayoutTypes } from "interfaces/layout";
import BaseLayout from "components/BaseLayout";

const layouts = {
	base: BaseLayout,
	dashboard: MainLayout
};

type NextPageWithLayout = NextPage & {
  layout?: LayoutTypes,
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const layout = Component.layout || 'dashboard'
  const PageLayout = layouts[layout]
  const [isConnectWalletModal, setConnectWalletModal] = useState<boolean>(false)
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: 'light' | 'dark') => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const appContextValues = {
    ConnectWalletModal: {
      isConnectWalletModalOpen: isConnectWalletModal,
      setConnectWalletModalOpen: setConnectWalletModal
    }
  }

  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme(mode)}>
          <CssBaseline />
          <MySorobanReactProvider>
            <AppContext.Provider value={appContextValues}>
              <PageLayout>
                <Component {...pageProps} />
              </PageLayout>
            </AppContext.Provider>
          </MySorobanReactProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  );
}

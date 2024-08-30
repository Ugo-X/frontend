import React from 'react';
import { Protocols } from 'soroswap-router-sdk';
import { PlatformType } from 'state/routing/types';

type ConnectWalletModalType = {
  isConnectWalletModalOpen: boolean;
  setConnectWalletModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export enum SnackbarIconType {
  MINT,
  SWAP,
  ADD_LIQUIDITY,
  REMOVE_LIQUIDITY,
  ERROR,
}

export interface ProtocolsStatus {
  key: Protocols | PlatformType;
  value: boolean;
}

export type SnackbarContextType = {
  openSnackbar: boolean;
  snackbarMessage: string;
  snackbarTitle: string;
  snackbarType: SnackbarIconType;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  setSnackbarMessage: React.Dispatch<React.SetStateAction<string>>;
  setSnackbarTitle: React.Dispatch<React.SetStateAction<string>>;
  setSnackbarType: React.Dispatch<React.SetStateAction<SnackbarIconType>>;
};

export type Settings = {
  maxHops: number;
  setMaxHops: React.Dispatch<React.SetStateAction<number>>;
  protocols: Protocols[];
  setProtocols: React.Dispatch<React.SetStateAction<Protocols[]>>;
  protocolsStatus: ProtocolsStatus[];
  setProtocolsStatus: React.Dispatch<React.SetStateAction<ProtocolsStatus[]>>;
};

export type AppContextType = {
  ConnectWalletModal: ConnectWalletModalType;
  SnackbarContext: SnackbarContextType;
  Settings: Settings;
};

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const AppContext = React.createContext<AppContextType>({
  ConnectWalletModal: {
    isConnectWalletModalOpen: false,
    setConnectWalletModalOpen: () => {},
  },
  SnackbarContext: {
    openSnackbar: false,
    snackbarMessage: '',
    snackbarTitle: '',
    snackbarType: SnackbarIconType.SWAP,
    setOpenSnackbar: () => {},
    setSnackbarMessage: () => {},
    setSnackbarTitle: () => {},
    setSnackbarType: () => {},
  },
  Settings: {
    maxHops: 2,
    setMaxHops: () => {},
    protocols: [],
    setProtocols: () => {},
    protocolsStatus: [],
    setProtocolsStatus: () => {},
  },
});

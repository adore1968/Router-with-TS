import { createContext, useContext } from "react";
import { AppProviderValue } from "../shared/types";

export const AppContext = createContext<AppProviderValue>(
  {} as AppProviderValue
);

export const useAppContext = () => {
  return useContext(AppContext);
};

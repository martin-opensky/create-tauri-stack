import { createContext, ReactNode, useState, useEffect } from 'react';

interface TauriAppContextType {
  isTauriApp: boolean | undefined;
}

export const TauriAppContext = createContext<TauriAppContextType | undefined>(undefined);

export function TauriAppProvider({ children }: { children: ReactNode }) {
  const [isTauriApp, setIsTauriApp] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsTauriApp(!!window?.__TAURI__);
  }, []);

  return <TauriAppContext.Provider value={{ isTauriApp }}>{children}</TauriAppContext.Provider>;
}

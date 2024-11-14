import { useContext } from 'react';
import { TauriAppContext } from '../contexts/TauriAppContext';

export default function useIsTauriApp() {
  const context = useContext(TauriAppContext);

  if (context === undefined) {
    throw new Error('useTauriApp must be used within a TauriAppProvider');
  }

  return context.isTauriApp;
}

import { invoke } from '@tauri-apps/api/core';

export default function useTauriGreeting() {
  const greetWithTauri = async (name: string): Promise<string> => {
    return (await invoke('greet', { name })) as string;
  };

  return { greetWithTauri };
}

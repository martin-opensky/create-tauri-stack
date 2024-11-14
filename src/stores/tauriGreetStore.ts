import { create } from 'zustand';
// import { persist } from 'zustand/middleware'

interface TauriGreetState {
  name: string;
  greetMsg: string;
  setName: (name: string) => void;
  setGreetMsg: (msg: string) => void;
}

const useTauriGreetStore = create<TauriGreetState>()(
  // persist(
  (set) => ({
    name: '',
    greetMsg: '',
    setName: (name) => set({ name }),
    setGreetMsg: (greetMsg) => set({ greetMsg }),
  })
  //   {
  //     name: 'tauri-greet-storage',
  //   }
  // )
);

export default useTauriGreetStore;

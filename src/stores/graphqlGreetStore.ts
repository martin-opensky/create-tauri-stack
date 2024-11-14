import { create } from 'zustand';
// import { persist } from 'zustand/middleware'

interface GraphQLGreetState {
  name: string;
  greetMsg: string;
  setName: (name: string) => void;
  setGreetMsg: (msg: string) => void;
}

const useGraphQLGreetStore = create<GraphQLGreetState>()(
  //persist(
  (set) => ({
    name: '',
    greetMsg: '',
    setName: (name) => set({ name }),
    setGreetMsg: (greetMsg) => set({ greetMsg }),
  })
  // {
  //   name: 'graphql-greet-storage',
  // }
  //)
);

export default useGraphQLGreetStore;

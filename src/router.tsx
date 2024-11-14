import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import App from './App';
import HomePage from './pages/HomePage';
import TauriGreetPage from './pages/TauriGreetPage';
import GraphQLGreetPage from './pages/GraphQLGreetPage';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <App />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const tauriGreetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tauri-greet',
  component: TauriGreetPage,
});

const graphqlGreetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/graphql-greet',
  component: GraphQLGreetPage,
});

const routeTree = rootRoute.addChildren([indexRoute, tauriGreetRoute, graphqlGreetRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

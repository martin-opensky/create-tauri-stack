import { ApolloProvider } from '@apollo/client';
import { Outlet } from '@tanstack/react-router';
import { client } from './graphql/client';
import Navigation from './components/Navigation';
import { TauriAppProvider } from './contexts/TauriAppContext';

function App() {
  return (
    <TauriAppProvider>
      <ApolloProvider client={client}>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <Outlet />
        </div>
      </ApolloProvider>
    </TauriAppProvider>
  );
}

export default App;

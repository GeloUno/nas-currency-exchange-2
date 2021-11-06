import Layout from './layout/layout';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import JoinContextProvider from './store/joinContext';

function App() {
  const queryClient = new QueryClient();
  return (
    <JoinContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col h-full items-center justify-center text-white ">
          <Layout />
        </div>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </JoinContextProvider>
  );
}

export default App;

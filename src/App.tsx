import Layout from './layout/layout';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import AllContextProvider from './store/AllContext';

function App() {
  const queryClient = new QueryClient();
  return (
    <AllContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col h-full items-center justify-center text-white ">
          <Layout />
        </div>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </AllContextProvider>
  );
}

export default App;

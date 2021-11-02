import Layout from './layout/layout';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-full items-center justify-center text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800">
        <Layout />
      </div>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

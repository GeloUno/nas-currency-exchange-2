import Layout from './layout/layout';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CurrencyContextProvider } from './store/currencyContext';
import { ErrorExchangeProvider } from './store/errorContext';
import { HistoryExchangeProvider } from './store/historyContext';

function App() {
  const queryClient = new QueryClient();
  return (
    <CurrencyContextProvider>
      <ErrorExchangeProvider>
        <HistoryExchangeProvider>
          <QueryClientProvider client={queryClient}>
            <div className="flex flex-col h-full items-center justify-center text-white ">
              <Layout />
            </div>
            <ReactQueryDevtools position="bottom-right" />
          </QueryClientProvider>
        </HistoryExchangeProvider>
      </ErrorExchangeProvider>
    </CurrencyContextProvider>
  );
}

export default App;

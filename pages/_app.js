import React from "react";
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistStore } from 'redux-persist';
import store from '../store';
let persistor = persistStore(store);

import '../styles/globals.css'
import {PersistGate} from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
              <PersistGate loading={null} persistor={persistor}>
                  <Component {...pageProps} />
                  <ReactQueryDevtools initialIsOpen={false} />
              </PersistGate>
          </QueryClientProvider>
      </Provider>
  );
}

export default MyApp

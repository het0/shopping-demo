import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { useStore } from '@/redux/store';

import '../styles/globals.css';

function ShoppingApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default ShoppingApp;

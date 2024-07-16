import "../styles/globals.css";
import Head from "next/head";
//redux
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import theme from "../reducers/theme";
//persist
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { getDefaultNormalizer } from "@testing-library/react";
const reducers = combineReducers({ theme });
const persistConfig = { key: "themewars", storage };

// const store = configureStore({
//   reducer: { theme },
// });
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>THEME WARS</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;

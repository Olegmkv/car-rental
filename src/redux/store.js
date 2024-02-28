import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./catalogSlice";
import { filtersReducer } from "./filterSlice";
import { paramsReducer } from "./paramsSlice";
import { favoritsReducer } from "./favoritSlice";

const favoritsPersistConfig = {
  key: 'favorits',
  storage,
  whitelist: ['favorits'],
};

const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        filters: filtersReducer,
        params: paramsReducer,
        favorits: persistReducer(favoritsPersistConfig,favoritsReducer),
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
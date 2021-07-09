import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import formReducer from "./form/form-reducer";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const store = createStore(rootReducer, composeWithDevTools());
const persistConfig = {
  key: "items",
  storage,
  blacklist: ["filter"],
};

const roodReducer = combineReducers({
  contacts: persistReducer(persistConfig, formReducer),
});
const persistedReducer = persistReducer(persistConfig, roodReducer);

const store = configureStore({
  reducer: roodReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);

export default { store, persistor };

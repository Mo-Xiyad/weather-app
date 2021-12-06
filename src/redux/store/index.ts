import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import currentSearchLocationReducer from "../reducers/currentLocation";
import locationListReducer from "../reducers/locationList";
import searchHistoryLocationReducer from "../reducers/dummyLocation";
import { IncurrentSearch } from "../../types/IcurrentSearch";
import { WebStorage, Transform } from "redux-persist/es/types";
// import { EncryptorConfig } from "redux-persist-transform-encrypt";
import { EncryptTransformConfig } from "redux-persist-transform-encrypt";

const workingMiddleware =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface InititalStates {
  locationList: {
    data: Array<IncurrentSearch>;
    isLoading: Boolean;
    isError: Boolean;
  };
  currentSearchLocation: {
    data: IncurrentSearch[];
    isLoading: Boolean;
    isError: Boolean;
    hasData: Boolean;
  };
  searchHistoryLocation: {
    data: IncurrentSearch[];
  };
}

export const initialState: InititalStates = {
  locationList: {
    data: [],
    isLoading: true,
    isError: false,
  },
  currentSearchLocation: {
    data: [],
    isLoading: true,
    isError: false,
    hasData: false,
  },
  searchHistoryLocation: {
    data: [],
  },
};

const mainReducer = combineReducers({
  locationList: locationListReducer,
  currentSearchLocation: currentSearchLocationReducer,
  searchHistoryLocation: searchHistoryLocationReducer,
});

interface Ipresist {
  key: string;

  storage: WebStorage;
  // transforms: any
  transforms: Transform<unknown, string, any, any>[];
}

const persistConfig: Ipresist = {
  key: "root", // this is referring to the entire stor object
  storage, // this is referring to the local storage
  transforms: [
    // this is encrypting the object that gets stored in the local storage so the user cannot manipulate
    encryptTransform({
      secretKey: process.env.REACT_APP_STORE_ENCRYPT_KEY || "", //this key is a key that is stored in the dotEnv file that is in your local machine
    }), // This key can be anything you want it to be
  ],
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const configureStore = createStore(
  persistedReducer,
  initialState,
  workingMiddleware(applyMiddleware(thunk))
);

export default configureStore;
export const persister = persistStore(configureStore);

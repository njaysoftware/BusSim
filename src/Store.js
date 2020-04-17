import {
  configureStore,
} from './configureStore';

const initalState = {};

const {store,} = configureStore(initalState);

export default store;
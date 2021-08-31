import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from './reducer';
import saga from './saga';

function configureStore({ reducer, middlewares = [], initialState = {} }) {
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = composeWithDevTools(middlewareEnhancer)
  const store = createStore(reducer, initialState, enhancers);
  return store;
}

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer,
  middlewares: [sagaMiddleWare],
});

sagaMiddleWare.run(saga);

export default store;
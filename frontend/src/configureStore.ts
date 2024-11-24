import { Store, createStore, applyMiddleware, AnyAction } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// `react-router-redux` is deprecated, so we use `connected-react-router`.
// This provides a Redux middleware which connects to our `react-router` instance.
import { routerMiddleware } from 'connected-react-router';
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it

// If you use react-router, don't forget to pass in your history type.
import { History } from 'history';

// Import the state interface and our combined reducers/sagas.
// import { ApplicationState, createRootReducer, rootSaga } from './store'
import { createRootReducer, IApplicationState } from './store';
import { epics } from './store/epics/epics';

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, IApplicationState>();

export function configureStore(
  history: History,
  initialState: IApplicationState,
): Store<IApplicationState> {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware)),
  );

  epicMiddleware.run(epics);

  return store;
}

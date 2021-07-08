import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {tableReducer} from './reducers/table'
import {sortReducer} from './reducers/sort'



const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const rootReducer = combineReducers({tableReducer, sortReducer})

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
console.log(store.getState());

export default store
import {createStore,compose,applyMiddleware} from 'C:/Users/admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appstore=createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
) )
export default appstore;
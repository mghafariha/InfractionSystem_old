import thunk from 'redux-thunk'
import {item,types,items,fieldsItem} from './reducer'
import {
 combineReducers,
 createStore,
 applyMiddleware

} from 'redux';
const reducer=combineReducers({
    
    item,
    types,
    items,
    fieldsItem
});
const store=createStore(reducer,applyMiddleware(thunk))
export default store
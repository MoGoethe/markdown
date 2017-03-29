import { List , Map,toJS ,fromJS } from "immutable"
import { combineReducers } from 'redux'
import { TOGGLEFULLSCREEN } from "../actions/index.jsx"


const INITIAL_STATE = fromJS({
	isfullScreen :false,
})

const reducer = ( state1=INITIAL_STATE , action)=>{

	return state1
}


const toggleFullsrceen = (state=INITIAL_STATE,action) =>{
	switch(action.type){
		case TOGGLEFULLSCREEN :
			return state.update("isfullScreen", () => !state.get("isfullScreen"));
		default :
			return state;
	}
}

const reducers = combineReducers({
	reducer,
	toggleFullsrceen
})

export default reducers
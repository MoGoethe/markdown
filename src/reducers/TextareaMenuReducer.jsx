import { List , Map,toJS ,fromJS} from "immutable"
import { TOGGLEFULLSCREEN } from "../actions/index.jsx"

/*

state = {
	isfullScreen :fale,
}


*/


const initialState = fromJS({
	isfullScreen :false,
})

const reducer = ( state =initialState, action)=>{
	return state.toJS()
}

export const toggleFullsrceen = (state,action) =>{
	console.log("a");
	switch(action.type){
		case TOGGLEFULLSCREEN :
			state.update("isfullScreen", () =>!state.get("isfullScreen"));
			return state.toJS();
	}
}

export default reducer
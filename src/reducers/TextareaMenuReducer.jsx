import { List , Map,toJS ,fromJS} from "immutable"
import { TOGGLEFULLSCREEN } from "../actions/index.jsx"

/*

state = {
	isfullScreen :fale,
}


*/


const INITIAL_STATE = fromJS({
	isfullScreen :false,
})

const reducer = ( state =INITIAL_STATE, action)=>{

	return state
}



export default reducer
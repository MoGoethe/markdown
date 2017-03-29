import { fromJS } from "immutable"
import { FRESHDOCUMENT } from "../actions/index.jsx"
import { freshDocument } from "./MarkeCore.jsx"

/*


*/
const MDDOCUMENT_STATE = fromJS({
	mdDocument:'',
})

const freshMdDocument = ( state=MDDOCUMENT_STATE , action ) => {
	switch(action.type){
		case FRESHDOCUMENT :
			return freshDocument(action.mdDocument);
		default :
			return state; 
	}
}


export default freshMdDocument
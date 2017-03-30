import { fromJS } from "immutable"
import { FRESHDOCUMENT , GETEDITRODOM } from "../actions/index.jsx"
import { freshDocument ,getEditorDom} from "./MarkeCore.jsx"

/*


*/
const MDDOCUMENT_STATE = fromJS({
	mdDocument:'',
	editorDom:null,
})

const freshMdDocument = ( state=MDDOCUMENT_STATE , action) => {
	switch(action.type){
		case FRESHDOCUMENT :
			return freshDocument(state,action.mdDocument)
		case GETEDITRODOM :
			return getEditorDom(state,action.editorDom)
		default :
			return state
	}
}


export default freshMdDocument
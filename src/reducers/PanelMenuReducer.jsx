import { fromJS } from "immutable"
import { TOGGLEFULLSCREEN,TOGGLEMDMODEL } from "../actions/index.jsx"
import { toggelmdmodel , togglefullscreen } from "./PanelCore.jsx"


const INITIAL_STATE = fromJS({
	isFullScreen :false,
	isEditorModel:false,
	isMixinModel:true,
	isPreviewModel:false,
	model:"md-editor-preview",
})


const toggleFullsrceen = (state=INITIAL_STATE,action) =>{

	switch(action.type){
		case TOGGLEFULLSCREEN :
			return togglefullscreen(state);
		case TOGGLEMDMODEL :
			return toggelmdmodel(state,action.model);
		default :
			return state;
	}
}
export default toggleFullsrceen
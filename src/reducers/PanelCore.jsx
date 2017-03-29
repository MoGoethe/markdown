export const toggelmdmodel = (state,model) =>{
	switch(model){
		case "preview" :
			return state.set("isEditorModel",true).set("isMixinModel",false).set("isPreviewModel",false).set("model","md-editor-preview full-preview");
		case "mixmin" :
			return state.set("isEditorModel",false).set("isMixinModel",true).set("isPreviewModel",false).set("model","md-editor-preview");
		case "editor" :
			return state.set("isEditorModel",false).set("isMixinModel",false).set("isPreviewModel",true).set("model","md-editor-preview full-editor");
		default :
			return state.set("isEditorModel",false).set("isMixinModel",true).set("isPreviewModel",false).set("model","md-editor-preview");
	}
}

export const togglefullscreen = state =>{
	return state.update("isFullScreen", () => !state.get("isFullScreen"));
}
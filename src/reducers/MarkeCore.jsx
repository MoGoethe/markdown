import marked from "marked"

export const freshDocument = (state,newDocument) => {
	return state.set("mdDocument",marked(newDocument))
}

export const getEditorDom = (state,editorDom) => {
	return state.set("editorDom",editorDom)
}
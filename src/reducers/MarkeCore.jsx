import marked from "marked"

export const freshDocument = (state,newDocument) => {
	return state.set("mdDocument",marked(newDocument))
}
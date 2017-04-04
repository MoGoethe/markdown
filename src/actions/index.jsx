export const TOGGLEFULLSCREEN = 'TOGGLEFULLSCREEN'
export const TOGGLEMDMODEL = 'TOGGLEMDMODEL'
export const FRESHDOCUMENT = 'FRESHDOCUMENT'
export const GETEDITRODOM ='GETEDITRODOM'
export const ADDARTICLETAG = 'ADDARTICLETAG'
export const DELETEARTICLETAG = 'DELETEARTICLETAG'


export const toggleFullsrceen = () => dispatch =>{
	dispatch({
		type:TOGGLEFULLSCREEN,
	})
}

export const toggleMDModel = model =>dispatch => {
	dispatch({
		type:TOGGLEMDMODEL,
		model:model,
	})
}

export const addArticleTag = (tagName,dispatch) =>{
	dispatch({
		type: ADDARTICLETAG,
		tagName: tagName,
	})
}

export const deleteArticleTag = (id, dispatch) =>{
	dispatch({
		type:DELETEARTICLETAG,
		id:id,
	})
}

const _preInputText = (text, preStart, preEnd,editorDom) => {
	const start = editorDom.selectionStart
	const end = editorDom.selectionEnd
	const origin = editorDom.value

	if (start !== end) {
		const exist = origin.slice(start, end)
		text = text.slice(0, preStart) + exist + text.slice(preEnd)
		preEnd = preStart + exist.length
	}
	editorDom.value = origin.slice(0, start) + text + origin.slice(end)

	editorDom.setSelectionRange(start + preStart, start + preEnd)
	
	return{
		type:FRESHDOCUMENT,
		mdDocument:editorDom.value,
	}
}

export const boldText = (editorDom ,dispatch )=> {
	dispatch(_preInputText("**加粗文字**", 2, 6 , editorDom))
}

export const italicText = (editorDom ,dispatch ) => {
	dispatch(_preInputText("_斜体文字_", 1, 5 , editorDom))
}

export const linkText = (editorDom ,dispatch ) => {
	dispatch(_preInputText("[链接文本](www.yourlink.com)", 1, 5 , editorDom))
}

export const blockquoteText = (editorDom ,dispatch ) => {
	dispatch(_preInputText("> 引用", 2, 4 , editorDom))
}

export const codeText = (editorDom ,dispatch ) => {
	dispatch(_preInputText("```\ncode block\n```", 4, 14 , editorDom))
}

export const pictureText = (editorDom ,dispatch ) => {
	dispatch(_preInputText("![alt](www.yourlink.com)", 2, 5 , editorDom))
}

export const listUlText = (editorDom ,dispatch ) => {
	dispatch(_preInputText("- 无序列表项0\n- 无序列表项1", 2, 8 , editorDom))
}

export const listOlText = (editorDom ,dispatch ) => {
	dispatch(_preInputText("1. 有序列表项0\n2. 有序列表项1", 3, 9 , editorDom))
}

export const headerText = (editorDom ,dispatch ) => {
	dispatch(_preInputText("## 标题", 3, 5 , editorDom))
}
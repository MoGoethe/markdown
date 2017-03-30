export const TOGGLEFULLSCREEN = 'TOGGLEFULLSCREEN'
export const TOGGLEMDMODEL = 'TOGGLEMDMODEL'
export const FRESHDOCUMENT = 'FRESHDOCUMENT'


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

const _preInputText = (text, preStart, preEnd) => {
	const start = this.textControl.selectionStart
	const end = this.textControl.selectionEnd
	const origin = this.textControl.value

	if (start !== end) {
		const exist = origin.slice(start, end)
		text = text.slice(0, preStart) + exist + text.slice(preEnd)
		preEnd = preStart + exist.length
	}
	this.textControl.value = origin.slice(0, start) + text + origin.slice(end)

	this.textControl.setSelectionRange(start + preStart, start + preEnd)
	this.setState({ result: marked(this.textControl.value) })
}

export const boldText = () => {
	_preInputText("**加粗文字**", 2, 6)
}

export const italicText = () => {
	_preInputText("_斜体文字_", 1, 5)
}

export const linkText = () => {
	_preInputText("[链接文本](www.yourlink.com)", 1, 5)
}

export const blockquoteText = () => {
	_preInputText("> 引用", 2, 4)
}

export const codeText = () => {
	_preInputText("```\ncode block\n```", 4, 14)
}

export const pictureText = () => {
	_preInputText("![alt](www.yourlink.com)", 2, 5)
}

export const listUlText = () => {
	_preInputText("- 无序列表项0\n- 无序列表项1", 2, 8)
}

export const listOlText = () => {
	_preInputText("1. 有序列表项0\n2. 有序列表项1", 3, 9)
}

export const headerText = () => {
	_preInputText("## 标题", 3, 5)
}
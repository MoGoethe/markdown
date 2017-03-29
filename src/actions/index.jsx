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

export const onfresh = (newDocument) => dispatch =>{
	dispatch({
		type:FRESHDOCUMENT,
		mdDocument:newDocument,
	})
}
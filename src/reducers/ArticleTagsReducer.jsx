import { fromJS ,Map } from "immutable"
import { ADDARTICLETAG , DELETEARTICLETAG } from "../actions/index.jsx"

const IINITIAL_STATE = fromJS({
	tags:[],
})

const reducer = (state=IINITIAL_STATE,action) =>{
	const tags = state.get("tags")
	
	switch(action.type){
		case ADDARTICLETAG :
			return state.update("tags",tags=>tags.push(Map({
						id:tags.size,
						tagName:action.tagName,
				   })))
		case DELETEARTICLETAG :
			const index = tags.findIndex(r => r.get("id") === action.id)
			return state.update("tags",tags=>tags.splice(index,1))
		default: return state;
	}
}

export default reducer
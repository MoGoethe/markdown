import { combineReducers } from 'redux'
import PanelMenuReducer from './PanelMenuReducer.jsx'
import MarkeReducer from './MarkeReducer.jsx'
import ArticleTagsReducer from './ArticleTagsReducer.jsx'

const Reducers = combineReducers({
	PanelMenuReducer,
	MarkeReducer,
	ArticleTagsReducer,
})

export default Reducers
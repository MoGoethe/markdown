import { combineReducers } from 'redux'
import PanelMenuReducer from './PanelMenuReducer.jsx'
import TextareaMenuReducer from './TextareaMenuReducer.jsx'

const Reducers = combineReducers({
	PanelMenuReducer,
	TextareaMenuReducer
})

export default Reducers
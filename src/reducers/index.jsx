import { combineReducers } from 'redux'
import PanelMenuReducer from './PanelMenuReducer.jsx'
import TextareaMenuReducer from './TextareaMenuReducer.jsx'
import MarkeReducer from './MarkeReducer.jsx'

const Reducers = combineReducers({
	PanelMenuReducer,
	TextareaMenuReducer,
	MarkeReducer,
})

export default Reducers
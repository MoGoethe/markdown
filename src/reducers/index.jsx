import { combineReducers } from 'redux'
import PanelMenuReducer from './PanelMenuReducer.jsx'
import MarkeReducer from './MarkeReducer.jsx'

const Reducers = combineReducers({
	PanelMenuReducer,
	MarkeReducer,
})

export default Reducers
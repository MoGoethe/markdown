import React , {Component} from 'react'
import {connect} from 'react-redux'
import Redux,{createStore,applyMiddleware} from 'redux'
import {List,Map} from 'immutable'
import ArticleTitle from '../components/ArticleTitle.jsx'
import ArticleTags from '../components/ArticleTags.jsx'
import Marke from '../components/Marke.jsx'
//import {ADD_GOODS,CHECK_OUT} from './action/action.jsx';

const App = state =>{
	return(
		<div>
			<h2>写文章</h2>
			<ArticleTitle />
			<ArticleTags 
				ArticleTagState = {state.ArticleTagState} 
				dispatch={state.dispatch} 
			/>
			<Marke 
				markeState={state.markeState} 
				dispatch={state.dispatch} 
				markePanelState = {state.markePanelState} 
			/>
		</div>
	)
}

const mapStateToProps = state =>{

	return {
		ArticleTagState:state.ArticleTagsReducer,
		markeState:state.MarkeReducer,
		markePanelState:state.PanelMenuReducer,
	}
}

export default connect(mapStateToProps)(App);
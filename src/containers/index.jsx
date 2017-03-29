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
			<ArticleTags />
			<Marke mdState={state} />
		</div>
	)
}

const mapStateToProps = state =>(
	{state:state,}
)

export default connect(mapStateToProps)(App);
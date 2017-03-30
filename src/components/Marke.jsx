import React ,{ Component } from "react"
import { connect } from "react-redux"
import "./Marke.scss"
import PanelMenubar from "./PanelMenubar.jsx"
import TextMenubar from "./TextMenubar.jsx"
import { toJS } from "immutable"
import { FRESHDOCUMENT , GETEDITRODOM } from "../actions/index.jsx"

export default class Marke extends Component{

	_fresh = e =>{
		this.props.mdState.dispatch({
			type:FRESHDOCUMENT,
			mdDocument:this.refs.editor.value,
		})
	}
	componentDidMount () {
		this.props.mdState.dispatch({
			type:GETEDITRODOM,
			editorDom:this.refs.editor,
		})
	}

	render(){
		const state = this.props.mdState.state;
		const modelState = state.PanelMenuReducer.toJS();
		const markeState = state.MarkeReducer.toJS();
		const _dispatch = this.props.mdState.dispatch;
		return(
			<div className={modelState.isFullScreen ? "md-panel md-full-screen" : "md-panel"}>
				<div className="md-menubar">
					<TextMenubar dispatch = { _dispatch } editorDom = { markeState.editorDom } />
					<PanelMenubar />
				</div>
				<div className={modelState.model}>
					<div className="md-editor">
						<textarea id="editor-area" onChange={this._fresh.bind(this)} ref="editor"></textarea>	
					</div>
					<div className="md-preview">
						<div className="markdown" dangerouslySetInnerHTML = {{__html:markeState.mdDocument}}></div>
					</div>
				</div>
			</div>
		)
	}
}

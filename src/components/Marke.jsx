import React ,{ Component } from "react"
import { connect } from "react-redux"
import "./Marke.scss"
import PanelMenubar from "./PanelMenubar.jsx"
import TextMenubar from "./TextMenubar.jsx"
import { toJS } from "immutable"
import { onfresh , FRESHDOCUMENT } from "../actions/index.jsx"

export default class Marke extends Component{

	_fresh = e =>{
		this.props.mdState.dispatch({
			type:FRESHDOCUMENT,
			mdDocument:this.refs.editor.value,
		})
	}

	render(){
		const state = this.props.mdState.state;
		const modelState =state.PanelMenuReducer.toJS();
		const mdDocument = state.MarkeReducer.toJS();
		return(
			<div className={modelState.isFullScreen ? "md-panel md-full-screen" : "md-panel"}>
				<div className="md-menubar">
					<TextMenubar />
					<PanelMenubar />
				</div>
				<div className={modelState.model}>
					<div className="md-editor">
						<textarea id="editor-area" onChange={this._fresh.bind(this)} ref="editor"></textarea>	
					</div>
					<div className="md-preview markdown" dangerouslySetInnerHTML = {{__html:mdDocument.mdDocument}}></div>
				</div>
			</div>
		)
	}
}

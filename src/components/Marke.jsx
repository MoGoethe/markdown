import React from "react"
import { connect } from "react-redux"
import "./Marke.scss"
import PanelMenubar from "./PanelMenubar.jsx"
import TextMenubar from "./TextMenubar.jsx"
import { toJS } from "immutable"
import marked from 'marked'
import { onfresh } from "../reducers/MarkeReducer.jsx"

const Marke = ({modelState,mdDocument,onfresh}) =>{
	console.log(mdDocument);
	return(
		<div className={modelState.isFullScreen ? "md-panel md-full-screen" : "md-panel"}>
			<div className="md-menubar">
				<TextMenubar />
				<PanelMenubar />
			</div>
			<div className={modelState.model}>
				<div className="md-editor">
					<textarea id="editor-area" ></textarea>	
				</div>
				<div className="md-preview markdown" ></div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) =>{
	const modelState =state.PanelMenuReducer.toJS();
	const mdDocument = state.MarkeReducer.toJS();
	return {
		modelState : modelState,
		mdDocument: mdDocument,
	}
}

export default connect( mapStateToProps,{onfresh} )(Marke);
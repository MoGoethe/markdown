import React ,{ Component } from "react"
import { connect } from "react-redux"
import "./Marke.scss"
import PanelMenubar from "./PanelMenubar.jsx"
import TextMenubar from "./TextMenubar.jsx"
import { toJS } from "immutable"
import { FRESHDOCUMENT , GETEDITRODOM } from "../actions/index.jsx"

export default class Marke extends Component{

	_fresh = e =>{
		this.props.dispatch({
			type:FRESHDOCUMENT,
			mdDocument:this.refs.editor.value,
		})
	}
	componentDidMount () {
		this.props.dispatch({
			type:GETEDITRODOM,
			editorDom:this.refs.editor,
		})
	}

	render(){

		const _dispatch = this.props.dispatch
		const mdDocument = this.props.markeState.get("mdDocument")
		const editorDom = this.props.markeState.get("editorDom")
		const isFullScreen = this.props.markePanelState.get("isFullScreen")
		const markeModel = this.props.markePanelState.get("model")
		return(
			<div className={isFullScreen ? "md-panel md-full-screen" : "md-panel"}>
				<div className="md-menubar">
					<TextMenubar dispatch = { _dispatch } editorDom = { editorDom } />
					<PanelMenubar />
				</div>
				<div className={markeModel}>
					<div className="md-editor">
						<textarea id="editor-area" onChange={this._fresh.bind(this)} ref="editor"></textarea>	
					</div>
					<div className="md-preview">
						<div className="markdown" dangerouslySetInnerHTML = {{__html:mdDocument}}></div>
					</div>
				</div>
			</div>
		)
	}
}

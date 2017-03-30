import React from "react"
import { connect } from "react-redux"
import { toggleFullsrceen,toggleMDModel } from "../actions/index.jsx"
import { toJS } from "immutable"

const PanelMenubar = ({ modelState,toggleFullsrceen,toggleMDModel }) =>{
	return(
		<div className="panel-menubar">
			<ul className="menu-list">
				<li className="menu-list-iem" title="全屏" onClick={()=>toggleFullsrceen()}><i className={modelState.isFullScreen ? "fa fa-compress" :"fa fa-arrows-alt"}></i></li>
				<li className="menu-list-iem span-line"></li>
				<li className={modelState.isEditorModel ? "menu-list-iem active" : "menu-list-iem"} title="预览模式" onClick = { ()=>toggleMDModel("preview") }><i className="fa fa-eye"></i></li>
				<li className={modelState.isMixinModel ? "menu-list-iem active" : "menu-list-iem"} title="混合模式" onClick = { ()=>toggleMDModel("mixmin") }><i className="fa fa-columns"></i></li>
				<li className={modelState.isPreviewModel ? "menu-list-iem active" : "menu-list-iem"} title="编辑模式" onClick = { ()=>toggleMDModel("editor") }><i className="fa fa-pencil"></i></li>
			</ul>
		</div>
	)
}

const mapStateToProps = state =>(
	{ modelState:state.PanelMenuReducer.toJS() }
)

export default connect( mapStateToProps , { toggleFullsrceen,toggleMDModel } )( PanelMenubar )
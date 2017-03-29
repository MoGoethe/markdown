import React from "react"
import { connect } from "react-redux"
import "./Marke.scss"
import { toggleFullsrceen } from "../reducers/PanelMenureducer.jsx"


const Marke = ({state,toggleFullsrceen}) =>(
	<div className="md-panel ">
		<div className="md-menubar">
			<div className="text-menubar">
				<ul className="menu-list">
					<li className="menu-list-iem" title="加粗"><i className="fa fa-bold"></i></li>
					<li className="menu-list-iem" title="斜体"><i className="fa fa-italic"></i></li>
					<li className="menu-list-iem span-line"></li>
					<li className="menu-list-iem" title="链接"><i className="fa fa-link"></i></li>
					<li className="menu-list-iem" title="引用"><i className="fa fa-outdent"></i></li>
					<li className="menu-list-iem" title="代码段"><i className="fa fa-code"></i></li>
					<li className="menu-list-iem" title="图片"><i className="fa fa-picture-o"></i></li>
					<li className="menu-list-iem span-line"></li>
					<li className="menu-list-iem" title="有序列表"><i className="fa fa-list-ol"></i></li>
					<li className="menu-list-iem" title="无序列表"><i className="fa fa-list-ul"></i></li>
					<li className="menu-list-iem" title="标题"><i className="fa fa-header"></i></li>
				</ul>
			</div>
			<div className="panel-menubar">
				<ul className="menu-list">
					<li className="menu-list-iem" title="全屏" onClick={()=>toggleFullsrceen()}><i className="fa fa-arrows-alt"></i></li>
					<li className="menu-list-iem span-line"></li>
					<li className="menu-list-iem" title="编辑模式"><i className="fa fa-eye"></i></li>
					<li className="menu-list-iem" title="混合模式"><i className="fa fa-columns"></i></li>
					<li className="menu-list-iem" title="预览模式"><i className="fa fa-pencil"></i></li>
				</ul>
			</div>
		</div>
		<div className="md-editor-preview">
			<div className="md-editor">
				<textarea id="editor-area"></textarea>	
			</div>
			<div className="md-preview markdown"></div>
		</div>
	</div>
)

const mapStateToProps = (state) =>(
	{state:state,}
)

export default connect( mapStateToProps, {toggleFullsrceen} )(Marke);
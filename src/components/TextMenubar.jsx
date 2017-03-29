import React from "react"

const TextMenubar = () => (
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
)

export default TextMenubar
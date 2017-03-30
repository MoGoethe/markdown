import React from "react"
import { connect } from "react-redux"
import {
	boldText,
	italicText,
	linkText,
	blockquoteText,
	codeText,
	pictureText,
	listUlText,
	listOlText,
	headerText
} from "../actions/index.jsx"
import TextMenubarItem from "./TextMenubarItem.jsx"

const menuListData = [
	{
		isItem:true,
		id:"0",
		title:"加粗",
		className:"fa fa-bold",
		functionName:boldText,
	},
	{
		isItem:true,
		id:"1",
		title:"斜体",
		className:"fa fa-italic",
		functionName:italicText,
	},
	{
		isItem:false,
		id:"2",
		title:"",
		className:"",
		functionName:null,
	},
	{
		isItem:true,
		id:"3",
		title:"链接",
		className:"fa fa-link",
		functionName:linkText,
	},
	{
		isItem:true,
		id:"4",
		title:"引用",
		className:"fa fa-outdent",
		functionName:blockquoteText,
	},
	{
		isItem:true,
		id:"5",
		title:"代码段",
		className:"fa fa-code",
		functionName:codeText,
	},
	{
		isItem:true,
		id:"6",
		title:"图片",
		className:"fa fa-picture-o",
		functionName:pictureText,
	},
	{
		isItem:false,
		id:"7",
		title:"",
		className:"",
		functionName:null,
	},
	{
		isItem:true,
		id:"8",
		title:"有序列表",
		className:"fa fa-list-ol",
		functionName:listUlText,
	},
	{
		isItem:true,
		id:"9",
		title:"无序列表",
		className:"fa fa-list-ul",
		functionName:listOlText,
	},
	{
		isItem:true,
		id:"10",
		title:"标题",
		className:"fa fa-header",
		functionName:headerText,
	}
]

const TextMenubar = ({ state}) => {
	console.log(state);
	return(
		<div className="text-menubar">
			<ul className="menu-list">
				{
					menuListData.map(item=>(
						<TextMenubarItem 
							isItem = {item.isItem}
							key = {item.id}
							title = {item.title}
							itemClass ={ item.className}
							onClickAction = {()=>(item.functionName)()}
						 />
					))
				}
			</ul>
		</div>
	)
}

const mapStateToProps = state =>{
	console.log(state);
	return state
}

export default  connect(mapStateToProps)( TextMenubar ) 

import React , { Component }from "react"
import { connect } from "react-redux"
import { toJS } from "immutable"
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
import TextMenubarItem from "./MenubarItem.jsx"

export default class TextMenubar extends Component{
	render(){
		const menuListData = [
			{
				id:"0",
				isItem:true,
				isActive:false,
				title:"加粗",
				className:"fa fa-bold",
				functionName:boldText,
			},
			{
				id:"1",
				isItem:true,
				isActive:false,
				title:"斜体",
				className:"fa fa-italic",
				functionName:italicText,
			},
			{
				id:"2",
				isItem:false,
				isActive:false,
				title:"",
				className:"",
				functionName:null,
			},
			{
				id:"3",
				isItem:true,
				isActive:false,
				title:"链接",
				className:"fa fa-link",
				functionName:linkText,
			},
			{
				id:"4",
				isItem:true,
				isActive:false,
				title:"引用",
				className:"fa fa-outdent",
				functionName:blockquoteText,
			},
			{
				id:"5",
				isItem:true,
				isActive:false,
				title:"代码段",
				className:"fa fa-code",
				functionName:codeText,
			},
			{
				id:"6",
				isItem:true,
				isActive:false,
				title:"图片",
				className:"fa fa-picture-o",
				functionName:pictureText,
			},
			{
				id:"7",
				isItem:false,
				isActive:false,
				title:"",
				className:"",
				functionName:null,
			},
			{
				id:"8",
				isItem:true,
				isActive:false,
				title:"有序列表",
				className:"fa fa-list-ol",
				functionName:listUlText,
			},
			{
				id:"9",
				isItem:true,
				isActive:false,
				title:"无序列表",
				className:"fa fa-list-ul",
				functionName:listOlText,
			},
			{
				id:"10",
				isItem:true,
				isActive:false,
				title:"标题",
				className:"fa fa-header",
				functionName:headerText,
			}
		]
		const editorDom = this.props.editorDom;
		const dispatch = this.props.dispatch;
		return(
			<div className="text-menubar">
				<ul className="menu-list">
					{
						menuListData.map(item=>(
							<TextMenubarItem 
								isItem = {item.isItem}
								key = {item.id}
								isActive = {item.isActive}
								title = {item.title}
								itemClass ={ item.className}
								onClickAction = {()=>(item.functionName)(editorDom,dispatch)}
							 />
						))
					}
				</ul>
			</div>
		)
	}
}



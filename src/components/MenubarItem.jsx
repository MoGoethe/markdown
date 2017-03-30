import React from "react"

const TextMenubarItem = ({isItem,key,title,itemClass,isActive,onClickAction}) => {
	return (
		isItem ? <li key ={key} className={isActive ? "menu-list-iem active" : "menu-list-iem"} title={title} onClick={onClickAction}><i className={itemClass}></i></li> : <li key ={key} className="menu-list-iem span-line" ></li>
	)
}

export default TextMenubarItem
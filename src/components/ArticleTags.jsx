import React from "react"
import  "./ArticleTags.scss"

const ArticleTags = () =>(
	<div className="textbox tag-input" >
		<input type="text" className = "tags-textbox" placeholder="标签，如JavaScript"  />
		<span className="hidden" ></span>
	</div>
)

export default ArticleTags
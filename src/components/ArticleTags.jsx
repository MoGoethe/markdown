import React ,{ Component }from "react"
import { connect } from "react-redux"
import { toJS } from "immutable"
import ArticleTagItem from "./ArticleTagItem.jsx"
import { deleteArticleTag , addArticleTag} from "../actions/index.jsx"
import  "./ArticleTags.scss"

export default class ArticleTags extends Component{

	onEnter = e =>{
		const tagName = e.target.value;
		if(e.keyCode==13 && !!tagName){
			const _dispatch =this.props.dispatch
			addArticleTag(tagName,_dispatch)
			this.refs.tagInput.value = ''
		}
	}

	render(){
		const tags = this.props.ArticleTagState.get("tags").toJS();
		return (
			<div className="textbox tag-input" >
				<span className="tags-container" >
					{
						tags.map(tagItem =>{
							return <ArticleTagItem tagName = {tagItem.tagName} key ={ tagItem.id } deleteArticleTag = {()=>deleteArticleTag(tagItem.id,this.props.dispatch)} />
						})
					}
				</span>
				<input type="text" onKeyDown={this.onEnter.bind(this)} ref="tagInput" className = "tags-textbox" placeholder="标签，如JavaScript"  />
			</div>
		)
	}
}

import React from "react"

const ArticleTagItem = ({tagName,deleteArticleTag}) => {
	return (
		<a className="tags-item" href="javascript:;" onClick={ deleteArticleTag } >
			{ tagName }
			<i className="tag-remove fa fa-times"></i>
		</a>
	)
}

export default ArticleTagItem
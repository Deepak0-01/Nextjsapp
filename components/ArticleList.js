import React from 'react'
import Article from './Article'
import articleStyle from '../styles/Article.module.css';

function ArticleList({articles}) {
    return (
        <div className={articleStyle.grid} >

        {articles.map((article)=>(

            <Article key={article.id} id={article.id} title={article.title}  body={article.body} />



        ))}
            
        </div>
    )
}

export default ArticleList

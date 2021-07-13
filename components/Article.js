import React from 'react'
import articleStyle from '../styles/Article.module.css';
import Link from 'next/link';

function Article({key,id,title,body}) {
    return (

        <Link href={"/article/[id]"} as= {`/article/${id}`}>
        <div className={articleStyle.card}>

        <h2>{title} &rarr;</h2>
        <p >{body}</p>
            
        </div>

        </Link>
    )
}

export default Article

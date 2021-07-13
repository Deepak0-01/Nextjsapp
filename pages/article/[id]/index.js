import React from 'react'

import Link from 'next/link';

function index({article}) {

    console.log(article);

    
    return (
        <div>
        <h1> {article.title}</h1>
        <p>{article.body}</p>
        <br>
        </br>
        <Link href="/">Go back</Link>
            
        </div>
    )
}

export const getStaticProps = async(context)=>{

    const articles = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

    const article = await articles.json();

    return {
        props:{
            article
        }
    }


}

export const getStaticPaths = async()=>{


    const data =  await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await data.json();

    const ids = posts.map((post)=>post.id);

    const paths = ids.map((id)=>({
        params:{id:id.toString()}
    }))


    return{

        paths:paths,
        fallback:false
      
    }
}

export default index

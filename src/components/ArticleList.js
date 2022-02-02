import React from "react";
import Article from "./Article"


function ArticleList(props){
    console.log(ArticleList)
    const ArrPosts = props.posts.map((postObj) => (
        //you can never do props.map (by itiself)
        <Article
            key={postObj.id}
            title={postObj.title} 
            date={postObj.date} 
            preview={postObj.preview} 
            minutes={postObj.minutes}
        />
      ));

return (
    <main>
        {ArrPosts}
    </main>
);
}

export default ArticleList;
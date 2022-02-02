import React from "react";



function Article({title, date='January 1, 1970', preview}){
    return(
        <article>
            <h3> {title} </h3>
            <small>{date}  </small>
            <p> {preview} </p> 
        </article>
    )
}
//when it is HTML u just print the value ex {preview} e quando e component 
//eu coloco preview={preview}
export default Article

//it returnseither  html or childs componets
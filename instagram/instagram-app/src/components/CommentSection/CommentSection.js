import React from 'react';


export default function CommentSection(props){
    console.log(props)
    return(
        <div>
            {props.commentProps.map((commenting, i) => (
                <div key={i}>
                    <p ><strong>{commenting.username}</strong> {commenting.text}</p>
                </div>
            ))}
        
        </div>
    )
}
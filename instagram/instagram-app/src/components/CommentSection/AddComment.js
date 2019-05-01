import React from 'react';
import './commenting.scss'

export default function AddComment(props){
    return(
    <div className="comment">
        <form onSubmit={props.submitProps}>
            <input name="input" type="text" placeholder="Add a comment..." value={props.valueProps} onChange={props.changeProps}></input>
        </form>
        <i className="fas fa-ellipsis-h"></i>
    </div>)
}

// Look into having two input fields on a form
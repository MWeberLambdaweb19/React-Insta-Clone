import React from 'react';
import './commenting.scss'

export default function AddComment(){
    return(
    <div className="comment">
        <form>
            <input type="text" placeholder="Add a comment..."></input>
        </form>
        <i className="fas fa-ellipsis-h"></i>
    </div>)
}
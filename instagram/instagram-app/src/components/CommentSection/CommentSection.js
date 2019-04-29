import React from 'react';
import PropTypes from 'prop-types';

function CommentSection(props){
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
CommentSection.propTypes = {
    commentProps: PropTypes.arrayOf(
        PropTypes.shape({
           username: PropTypes.string.isRequired,
           text: PropTypes.string.isRequired,
        })
    )
}

export default CommentSection;
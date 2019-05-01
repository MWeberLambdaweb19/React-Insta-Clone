import React from 'react'
import CommentSection from '../CommentSection/CommentSection.js'
import './PostContainer.scss'
import PropTypes from 'prop-types';

class PostContainer extends React.Component{
    render(){
    return(
        <div>
            {this.props.webstapost.map(websta => (
                <div className="wholepost" key={websta.timestamp}>
                    <div className="usercontent">
                        <img className="userimage" src={websta.thumbnailUrl} alt={websta.username} ></img>
                        <p><strong>{websta.username}</strong></p>
                    </div>
                    <img src={websta.imageUrl} alt={websta.imageUrl}/>
                    <div className="likes">
                        <div>
                            <i className="far fa-comment fa-lg "></i>
                            <i className="far fa-heart fa-lg"></i>
                        </div>
                        <strong>{websta.likes} likes</strong>
                    </div>
                    <div className="commenter">
                        <CommentSection commentProps={websta.comments}/>
                        <p>{websta.timestamp}</p>
                    </div>
                </div>
            ))}
        </div>
    )
    }
}
PostContainer.propTypes = {
    webstapost: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    )
}

export default PostContainer;
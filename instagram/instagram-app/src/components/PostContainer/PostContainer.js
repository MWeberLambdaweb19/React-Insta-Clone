import React from 'react'
import CommentSection from '../CommentSection/CommentSection.js'
import './PostContainer.scss'
import LikesButton from './LikesButton.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostDiv = styled.div`
    background: white;
`

class PostContainer extends React.Component{
    render(){
    return(
        <PostDiv>
            {this.props.webstapost.map(websta => (
                <div className="wholepost" key={websta.timestamp}>
                    <div className="usercontent">
                        <img className="userimage" src={websta.thumbnailUrl} alt={websta.username} ></img>
                        <p><strong>{websta.username}</strong></p>
                    </div>
                    <img src={websta.imageUrl} alt={websta.imageUrl}/>
                    <div className="likes">
                        <LikesButton likesProps={websta.likes}/>
                    </div>
                    <div className="commenter">
                        <CommentSection commentProps={websta.comments}/>
                        <p>{websta.timestamp}</p>
                    </div>
                </div>
            ))}
        <button onClick={this.handleLogout}>Log out</button>
        </PostDiv>
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
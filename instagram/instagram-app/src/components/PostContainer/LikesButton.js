import React from 'react'
import './PostContainer.scss'

class LikesButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            likes: props.likesProps,
        }
    }

    addLike = (event) => {
        event.preventDefault();
        console.log("CLICK!")
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render(){
        return(
            <div>
                <i className="far fa-heart fa-lg" onClick={this.addLike}></i><br></br>
                <strong>{this.state.likes} Likes</strong>
            </div>
        )}
}

export default LikesButton;
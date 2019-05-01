import React from 'react';
import PropTypes from 'prop-types';
import AddComment from './AddComment';

class CommentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: props.commentProps,
            input: '',
        }
        this.eventHandleSubmit = this.eventHandleSubmit.bind(this)
        this.eventHandleInput = this.eventHandleInput.bind(this)
    }

    eventHandleSubmit(event){
        event.preventDefault();
        console.log("Submit:", this.state.input)
        const newComment = {text: this.state.input, username: "MWeberWeb19"}
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comments, input: ""})
    }

    eventHandleInput(event){
        console.log("Change:", event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
    return(
        <div>
            {this.state.comments.map((commenting, i) => (
                <div key={i}>
                    <p ><strong>{commenting.username}</strong> {commenting.text}</p>
                </div>
            ))}
            <AddComment 
            submitProps={this.eventHandleSubmit}
            valueProps={this.state.input}
            changeProps={this.eventHandleInput}
            />
        </div>
    )
}
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
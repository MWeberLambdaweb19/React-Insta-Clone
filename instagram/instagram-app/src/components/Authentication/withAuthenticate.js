import React from 'react';
import styled from 'styled-components';


const withAuthenticate = PostPage => Login => class extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            loggedIn: false
        }
    }
    componentDidMount(){
        if(!localStorage.getItem(`user`)){
            this.setState({loggedIn: false})
        } else {
            this.setState({loggedIn: true})
        }
    }
    render(){
            if (this.state.loggedIn) return <PostPage />;
            return <Login />;
    }
}

export default withAuthenticate;
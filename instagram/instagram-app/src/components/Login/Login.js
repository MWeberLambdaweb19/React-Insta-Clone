import React from 'react';
import styled from 'styled-components';
import webstagram from '../SearchBar/webstagram.png'

const LoginDiv = styled.div`
    margin: 0 auto;
    width: 600px;
    padding: 50px;
    height: 1000px;
`

const LoginForm = styled.form`
    width: 500px;
    height: 500px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background: red;
    border-radius: 25%;
    margin: 50px;
`
const LoginInput = styled.input`
    width: 100px;
    height: 25px;
    margin: 10px;
    border-radius: 25%;
`
const LoginImg = styled.img`
    border-radius: 25%;
    margin: 10px;
`
const LoginButton = styled.button`
    margin: 10px;
    color: purple;
    font-size: 20px;
    font-weight: bold;
    background: red;
    border: 3px solid purple;
    width: 150px;
    height: 75px;
    border-radius: 25px;
    :hover{
        background: white;
    }
`

class Login extends React.Component {
    constructor(){
        super();
        this.state={
            username: "",
            password: "",
        }
    }
    handleLoginInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleLoginSubmit = () => {
        const user = this.state.username;
        localStorage.setItem(`user`, user)
    }

    render(){
    return(
        <LoginDiv>
            <LoginForm>
                <LoginImg src={webstagram} alt="Webstagram"/>
                <LoginInput type="username" name="username" placeholder="Username!" onChange={this.handleLoginInput} value={this.state.username}></LoginInput>
                <LoginInput type="password" name="password" placeholder="Password!" onChange={this.handleLoginInput} value={this.state.password}></LoginInput>
                <LoginButton onClick={this.handleLoginSubmit}>Log in!</LoginButton>
            </LoginForm>
        </LoginDiv>
    )}
}

export default Login
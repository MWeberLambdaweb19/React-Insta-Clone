import React from 'react';
import './App.scss';
import PostPage from './components/PostContainer/PostPage.js';
import Login from './components/Login/Login'
import withAuthenticate from './components/Authentication/withAuthenticate.js';
import styled from 'styled-components';

const MasterBox = styled.div`
  background: purple;
`

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

class App extends React.Component{
  render(){
    return (
    <MasterBox>
      <ComponentFromWithAuthenticate />
    </MasterBox> 
    )}
}

export default App;

import React from 'react';
import './App.scss';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      data: dummyData
    };
  }
  render(){
    return (
    <div className="container">
      <header>
        <SearchBar />
      </header>
      <PostContainer webstapost={this.state.data}/>
    </div> 
    )}
}

export default App;

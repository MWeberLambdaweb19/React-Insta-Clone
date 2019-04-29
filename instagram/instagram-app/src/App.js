import React from 'react';
import './App.scss';
// import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends React.Component{
  render(){
    return (
    <div className="container">
      <header>
        <SearchBar />
      </header>
    </div> 
    )}
}

export default App;

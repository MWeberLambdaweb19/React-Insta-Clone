import React from 'react';
import './App.scss';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import Footer from './components/FooterSection/footer.js';

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      data: [],
    };
  }
  componentDidMount(){
    console.log(this.state.data, "Mounting!")
    this.setState({
      data: dummyData,
    })
  }
  componentDidUpdate(){
    console.log("Updating!")
  }
  render(){
    console.log(this.state.data, "Bendering!")
    return (
    <div className="container">
      <header>
      <SearchBar />
      </header>
      <PostContainer webstapost={this.state.data}/>
      <Footer />
    </div> 
    )}
}

export default App;

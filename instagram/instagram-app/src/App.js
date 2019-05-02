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
      filteredData: []
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

  searchPostsHandler = event => {
    const dataset = this.state.data.filter(post => {
      if (post.username.include(event.target.value)) {
        return post;
      }
    });
    this.setState({filteredData: dataset})
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

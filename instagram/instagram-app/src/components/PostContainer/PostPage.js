import React from 'react';
import dummyData from '../../dummy-data.js';
import SearchBar from '../SearchBar/SearchBar.js';
import PostContainer from './PostContainer.js';
import Footer from '../FooterSection/footer.js';
import styled from 'styled-components';

const PostDiv = styled.div`
    background: white;
`

class PostPage extends React.Component{
  constructor(){
    super();
    this.state= {
      data: [],
      filteredData: [],
    };
  }

  componentDidMount(){
    this.setState({
      data: dummyData,
    })
  }

  searchPostsHandler = event => { // eslint-disable-next-line
    const dataset = this.state.data.filter(data => {
      if (data.username.includes(event.target.value)) {
        return data;
      }
    });
    this.setState({filteredData: dataset})
  }

  selectDataset = () => {
    if (this.state.filteredData.length > 0){
      return this.state.filteredData;
    } else {
      return this.state.data;
    }
  }

  render(){
    return (
    <PostDiv className="container">
      <SearchBar searchPosts={this.searchPostsHandler}/>
      <PostContainer webstapost={this.selectDataset()} />
      <Footer />
    </PostDiv> 
    )}
}

export default PostPage;

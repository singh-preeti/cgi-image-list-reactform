import logo from './logo.svg';
import './App.css';
import SearchInput from './SearchInput';
import React from 'react'
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: []}

   onSearchSubmit = async (entry) => {
    const  response = await axios.get(`https://pixabay.com/api/?key=21429387-64bb8c861155ab906b139b2ba&q=${entry}&image_type=photo`)
    console.log(response.data.hits)
    this.setState({images:response.data.hits})
  }
  render(){
  return (
    <div className='ui container'  style={{marginTop: '30px'}}>
      <SearchInput  onSearchSubmit={this.onSearchSubmit} />
      We have {this.state.images.length} images 

      <ImageList images={this.state.images} />
    </div>
  );}
}

export default App;

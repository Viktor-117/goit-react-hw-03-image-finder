import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export default class App extends Component {
  state = {
    imgName: '',
  };

  handleFormSubmit = imgName => {
    this.setState({ imgName });
  };
  render() {
    const { imgName } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgName={imgName} />
        <ToastContainer autoClose={3000} theme="colored" />
      </div>
    );
  }
}

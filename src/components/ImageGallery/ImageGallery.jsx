import ImageGalleryItem from '../ImageGalleryItem';
import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.syled';

export default class ImageGallery extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.imgName !== this.props.imgName) {
      console.log('prevProps.imgName: ', prevProps.imgName);
      console.log('this.props.imgName: ', this.props.imgName);
    }
  };

  render() {
    return (
      <ImageGalleryList>
        <ImageGalleryItem />
      </ImageGalleryList>
    );
  }
}

ImageGallery.propTypes = { imgName: PropTypes.string.isRequired };

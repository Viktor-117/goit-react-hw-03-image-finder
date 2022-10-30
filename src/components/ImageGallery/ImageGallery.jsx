import ImageGalleryItem from '../ImageGalleryItem';
import { Component } from 'react';
import * as API from 'components/services/api';
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.syled';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '29668324-2d81c9a891a84ad6e09e5568c';

export default class ImageGallery extends Component {
  state = { images: [], status: 'idle', page: 1 };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgName !== this.props.imgName) {
      this.setState({ status: 'pending' });
      const response = await axios.get(
        `/?q=${this.props.imgName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ images: response.data.hits, status: 'resolved' });
    }
  }

  render() {
    const { images, status } = this.state;
    return (
      <div>
        {status === 'pending' && <p>...Загружаем</p>}
        {status === 'resolved' && (
          <ImageGalleryList>
            {images.map(item => (
              <ImageGalleryItem image={item} key={item.id} />
            ))}
          </ImageGalleryList>
        )}
      </div>
    );
  }
}

ImageGallery.propTypes = { imgName: PropTypes.string.isRequired };

import PropTypes from 'prop-types';
import { ImageItem, ItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = image => {
  const { id, webformatURL, largeImageURL } = image.image;
  return (
    <ImageItem>
      <ItemImage src={webformatURL} alt={id} />
    </ImageItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    image: PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

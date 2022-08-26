import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

const ImageGallery = ({ data, onClick }) => {
        return(
            <>
                <StyledImageGallery >
                   {data?.map(item => (<ImageGalleryItem key={item.id} card={item} onClick={onClick} />) ) }
                </StyledImageGallery>
            </>
        )
}
ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    data:PropTypes.array.isRequired,
};
export default ImageGallery;


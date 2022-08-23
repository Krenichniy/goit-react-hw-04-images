import PropTypes from 'prop-types';
import { StyledGalleryItem, StyledImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ card, onClick }) => {
        const { id, largeImageURL, webformatURL, tags } = card;
        return(
                <StyledGalleryItem key={id} onClick={()=> onClick(largeImageURL)}>
                        <StyledImage src= {webformatURL}  alt={tags}  loading="lazy" />
                </StyledGalleryItem>
        )
}

ImageGalleryItem.protoType = {
    card: PropTypes.object.isRequired, 
    onClick: PropTypes.func.isRequired, 
}
export default ImageGalleryItem;

//test
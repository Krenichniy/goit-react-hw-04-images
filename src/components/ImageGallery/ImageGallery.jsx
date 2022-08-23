import { Component } from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

class ImageGallery extends Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        data:PropTypes.array.isRequired,
    };

    render() {
        const { data, onClick } = this.props;
        return(
            <>
                <StyledImageGallery >
                   {data?.map(item => (<ImageGalleryItem key={item.id} card={item} onClick={onClick} />) ) }
                </StyledImageGallery>
            </>
        )
    } 
}

export default ImageGallery;


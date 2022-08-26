import PropTypes from "prop-types"
import { useEffect } from "react";
import { ModalContainer, ModalOverlay } from './Modal.styled';


const Modal = ({image, onClick}) => {
    useEffect(() => {
        document.addEventListener('keyup', closeByEscape);
        return () => {
            document.removeEventListener('keyup', closeByEscape);
        }
    }, )

    const  closeByEscape = (e) => {
        if (e.key === 'Escape') onClick()
    }
   const closeByBackdrop = (e) => {
        if (e.target === e.currentTarget) onClick()
    }
            return(
        <>
            <ModalOverlay  onClick={closeByBackdrop}>
                <ModalContainer >
                    <img src={image} alt={image} loading='lazy' />
                </ModalContainer>
            </ModalOverlay>
        </>
    )
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired
}
export default Modal;
// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show() 
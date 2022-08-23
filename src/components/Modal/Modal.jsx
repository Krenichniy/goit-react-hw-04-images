import PropTypes from "prop-types"
import { Component } from "react"
import {ModalContainer, ModalOverlay} from './Modal.styled'
class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keyup', this.closeByEscape)
        }
    componentWillUnmount() {
        document.removeEventListener('keyup', this.closeByEscape)
    }
    closeByEscape = (e) => {
        if (e.key === 'Escape') this.props.onClick()
    }
    closeByBackdrop = (e) => {
        if (e.target === e.currentTarget)this.props.onClick()
    }
    render() {
         const {image}=this.props
            return(
        <>
            <ModalOverlay  onClick={this.closeByBackdrop}>
                <ModalContainer >
                    <img src={image} alt={image} loading='lazy' />
                </ModalContainer>
            </ModalOverlay>
        </>
    )
    }
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
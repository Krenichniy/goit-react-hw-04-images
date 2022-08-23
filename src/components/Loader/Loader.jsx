import { ThreeDots } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';
const Loader = () => {
    return (
        <StyledLoader>
            <ThreeDots
                height = "100"
                width = "100"
                radius = "9"
                color='#0382bbba'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
            />
        </StyledLoader>
    )
}
export default Loader;
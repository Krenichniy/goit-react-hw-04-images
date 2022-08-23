const { default: styled } = require('styled-components');

export const StyledGalleryItem = styled.li`
        width:260px;
        margin-right: 30px;
        margin-bottom: 30px;
        border: 1px solid grey;
        border-radius: 4px;
        transition: transform 250ms linear;
        z-index: 1;
        cursor:pointer;

        &:hover{
            box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 14%), 0 2px 1px rgb(0 0 0 / 20%);
            transform: scale(1.1);
            z-index: 999;
        }
`
export const StyledImage = styled.img`
        width: 100%;
        height: 260px;
        object-fit: cover;
        vertical-align: middle;
        border-style: none;
`
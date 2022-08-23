const { default: styled } = require('styled-components');

export const ButtonStyled = styled.button`
        display: block;
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        color: #fff;
        background-color: #007bff;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        line-height: 1.5;
        border-radius: 0.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        border-color: #007bff;

        &:hover, &:focus{
        color: #fff;
        background-color: #0069d9;
        border-color: #0062cc;
        }
`
const { default: styled } = require('styled-components');

export const StyledForm = styled.form`
        display: flex;
        justify-content: center;
        width:100%;
        padding-top: 10px;
        padding-bottom: 10px;
        margin: 0 auto;
        background-color: #295897;
`
export const StyledHeader = styled.header`
        width:100%;
`
export const FormContainer = styled.div`
        display:flex;
        align-items: center;
        background-color: #fff;
        border-radius: 25px;
}
`
export const StyledInput = styled.input`
        padding: 5px 15px;
        font-size: 16px;
        border-radius: 25px;
        border: none;
        width: 350px;
        outline: none;
        line-height: 1.15;
        margin: 0;
`
export const StyledBtn = styled.button`
        display:flex;
        align-items:center;
        justify-content:center;
        padding: 5px 0 5px 15px;
        font-size: 16px;
        border-radius: 25px;
        border: none;
        margin-left: 0;
        background-color: transparent;
        cursor:pointer;
`
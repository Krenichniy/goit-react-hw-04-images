import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { StyledHeader, StyledForm, FormContainer, StyledInput, StyledBtn } from './Searchbar.styled';
import { useState,memo } from 'react';

const SearchBar = ({onSubmit, onValidation}) => {
const [value, setValue] = useState('')    

    const handleImageChange= (event) => {
        setValue(event.currentTarget.value.toLowerCase().trim());
    }  

    const handleSubmit =( event, callback, showMessage)=> {
        event.preventDefault();
        
        if (!value.trim()) return showMessage('Please fill this field');
        callback( value );
        reset();
    }

    const reset = ()=> {
        setValue('')
    }
        return (
        <StyledHeader >
                <StyledForm onSubmit={(event) => handleSubmit(event, onSubmit, onValidation)}>
                    <FormContainer>
                            <StyledBtn type="submit"  >
                            <FiSearch style={{marginRight:8}}/>
                            </StyledBtn>
                            <StyledInput
                            onChange={handleImageChange}
                            type="text"
                            name = 'value'
                            value={value}
                            autoComplete={'off'}
                            autoFocus
                            placeholder="Search images and photos"
                                    />
                    </FormContainer>
            </StyledForm>
        </StyledHeader>
        )
}
SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onValidation: PropTypes.func.isRequired
};
export default memo(SearchBar);


import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { StyledHeader, StyledForm, FormContainer, StyledInput, StyledBtn } from './Searchbar.styled';

class SearchBar extends Component {
    state = {
        imageName: '',
    } 
    
     static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onValidation: PropTypes.func.isRequired
    };

    handleImageChange= (event) => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    }  

    handleSubmit( event, callback, showMessage) {
        event.preventDefault();
        
        const { imageName } = this.state;
        if (!imageName.trim() ) return showMessage('Please fill this field');
         callback({ imageName });
        this.reset();
    }

    reset= ()=> {
        this.setState({ imageName: ''})
    }
    render() {
        // const { name, tel } = this.state;
        const { onSubmit, onValidation } = this.props;
        return (
        <StyledHeader >
                <StyledForm onSubmit={(event) => this.handleSubmit(event, onSubmit, onValidation)}>
                    <FormContainer>
                            <StyledBtn type="submit"  >
                            <FiSearch style={{marginRight:8}}/>
                            </StyledBtn>
                            <StyledInput
                            onChange={this.handleImageChange}
                            type="text"
                            name = 'name'
                            value={this.state.imageName}
                            autoComplete={'off'}
                            autoFocus
                            placeholder="Search images and photos"
                                    />
                    </FormContainer>
            </StyledForm>
        </StyledHeader>
        )
    }
}

export default SearchBar;

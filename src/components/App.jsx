import React, { Component } from 'react';
import SearchBar from './Searchbar';
// import ImageGallery from './ImageGallery';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container } from "./App.stylede";
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import { FetchImagesFromApi } from './FetchData/FetchData';
// import { useState } from 'react';

const PAGE = 1;

class App extends Component {
  state = {
    data:[],
    imageName:'',
    loading:false,
    showBtn: false, 
    pageNumber: 1,
    urlForModalPicture: '',
    isModalOpen: false,
  }

  getSnapshotBeforeUpdate() {
    const { offsetHeight } = document.querySelector('header');
    return window.innerHeight - offsetHeight * 2;
  }

  async componentDidUpdate(prevprops, prevstate, snapshot) {
    if (prevstate.loading) {
      this.setState({loading:false})
    }

        if (this.state.page > 1) {
         window.scrollBy({
        top: snapshot,
        behavior: 'smooth',
      });
   }
}

  showValidationMessage = (message) => {
    Notify.warning(message);
  }

  onSubmitHandler = async ({ imageName }) => {
    this.setState({ loading: true })
    const response = await FetchImagesFromApi(PAGE, imageName);
    if(response.hits.length === 0) Notify.warning('No matches for such request');
    this.setState({ data: response.hits, imageName, pageNumber: this.state.pageNumber, showBtn: this.state.pageNumber < Math.ceil(response.total / 12) })
    this.setState({ loading: false })
  }
  
  increasePage = async () => {
    const { pageNumber, imageName } = this.state;
    this.setState(PrevState => {
      return { pageNumber: PrevState.pageNumber + 1 }
    });
    this.setState({ pageNumber: this.state.pageNumber + 1, loading:true});
    const response = await FetchImagesFromApi(pageNumber + 1, imageName);
    this.setState({ data: [...this.state.data, ...response.hits], showBtn: this.state.pageNumber < Math.ceil(response.total / 12) });
    
  }

  openImageModal=(image)=> {
    this.setState({ isModalOpen: true, urlForModalPicture: image });
    document.documentElement.style.overflow = "hidden"
  }
    closeImageModal = (e) => {
    this.setState({ isModalOpen: false, urlForModalPicture:'' });
    document.documentElement.style.overflow = null
    
  }

  
  render() {
    const { loading, data,  showBtn, isModalOpen, urlForModalPicture } = this.state;
    return (
      <Container>
          <SearchBar onSubmit={this.onSubmitHandler} onValidation = {this.showValidationMessage}/>
          <ImageGallery data={data} onClick={this.openImageModal}  />
          {loading && <Loader />}  
          {showBtn && <Button onClick={this.increasePage} />}
          {isModalOpen && <Modal image={urlForModalPicture} onClick={this.closeImageModal}/>}
        </Container>
    );
  }
 
};

export default App;

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageUR
// page -1
// perpage-12
// cardImages={}
    // query:{
    //   q:null,
    //   page:1,
    //   perpage:12,
    //   id:1,
    //   webformatURL: null,
    //   largeImageURL: null
    // }, 
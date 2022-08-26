import SearchBar from './Searchbar';
// import ImageGallery from './ImageGallery';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container } from "./App.styled";
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import { FetchImagesFromApi } from './FetchData/FetchData';
import { useState, useEffect,useCallback  } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [imageName, setImageName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [urlForModalPicture, setUrlForModalPicture] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!imageName) return;
    const makeFetch = async() => {
      try {
        setLoading(true);
        const response = await FetchImagesFromApi(pageNumber, imageName);
        if (response.hits.length === 0) Notify.warning('No matches for such request');
        setData(data => [...data, ...response.hits]);
        setShowBtn(pageNumber < Math.ceil(response.total / 12))
        setLoading(false)
      }
      catch (error) {
        console.log('error', error)
      }
      finally {
         if (pageNumber > 1) {
          window.scrollBy({
          top: 500,
          behavior: 'smooth',
      });
   }
  }
}
    makeFetch()
  }, [imageName, pageNumber])

  const showValidationMessage = (message) => {
    Notify.warning(message);
  }

  const  onSubmitHandler =  useCallback(({ value }) => {

    setPageNumber(1);
    setShowBtn();
    setImageName(value);
    setData([]);
  }, [imageName])
  // [imageName]
  
  const increasePage = useCallback( async () => {
    setPageNumber(pageNumber + 1);
  }, [pageNumber])

  const openImageModal= useCallback((image)=> {
    setIsModalOpen(true);
    setUrlForModalPicture(image);
    document.documentElement.style.overflow = "hidden"
  }, [])
  
    const closeImageModal = useCallback((e) => {
      setIsModalOpen(false);
      setUrlForModalPicture('');
    document.documentElement.style.overflow = null
  },[])

  

    return (
      <Container>
          <SearchBar onSubmit={onSubmitHandler} onValidation = {showValidationMessage}/>
          <ImageGallery data={data} onClick={openImageModal}  />
          {loading && <Loader />}  
          {showBtn && <Button onClick={increasePage} />}
          {isModalOpen && <Modal image={urlForModalPicture} onClick={closeImageModal}/>}
        </Container>
    );
  
};

export default App;

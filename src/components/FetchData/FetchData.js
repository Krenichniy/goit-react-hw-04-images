import { Notify } from 'notiflix/build/notiflix-notify-aio';
export  const FetchImagesFromApi = async (page, value) => {
    const API_KEY = '27990741-9fab199c60b940a6a95dff2fa';
    const URL = `https://pixabay.com/api/?page=${page}&key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&per_page=12`;
    try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error(response.status);
        const result = await response.json();
        return result;
    }
    catch (error){
        console.log('error', error);
        Notify.failure(error);
    }
}
import axios from 'axios';
// import productsController from './reducer'

export const getAllProducts = function() {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
}
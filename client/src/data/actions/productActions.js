import { FETCH_PRODUCT_DETAIL, FETCH_PRODUCT } from '../CONSTANTS';

import Image1 from '../../asserts/images/main model 3.png';
import Image2 from '../../asserts/images/main model 4.png';
import Image3 from '../../asserts/images/main model 5.png';

const products = [
  {
    id: 1,
    name: 'Phone Case 1',
    price: 399,
    offer: '20%',
    category: 'phonecase',
    mrp: 500,
    imageUrl: Image1,
  },
  {
    id: 2,
    name: 'Phone Case 2',
    price: 399,
    offer: '20%',
    category: 'phonecase',
    mrp: 500,
    imageUrl: Image2,
  },
  {
    id: 3,
    name: 'Phone Case 3',
    price: 399,
    offer: '20%',
    category: 'phonecase',
    mrp: 500,
    imageUrl: Image3,
  },
  {
    id: 4,
    name: 'Phone Case 1',
    price: 399,
    offer: '20%',
    category: 'phonecase',
    mrp: 500,
    imageUrl: Image1,
  },
  {
    id: 5,
    name: 'Phone Case 2',
    price: 399,
    offer: '20%',
    category: 'phonecase',
    mrp: 500,
    imageUrl: Image2,
  },
  {
    id: 6,
    name: 'Phone Case 3',
    price: 399,
    offer: '20%',
    category: 'phonecase',
    mrp: 500,
    imageUrl: Image3,
  },
];

// eslint-disable-next-line import/prefer-default-export


export  const fetchProduct = (payload) => {
  



  

  return {
    type: FETCH_PRODUCT,
    payload,
  };
};


export const fetchProductDetail = (payload) => {
 
 

  return {
    type: FETCH_PRODUCT_DETAIL,
    payload,
  };
};
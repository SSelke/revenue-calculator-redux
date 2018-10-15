import { UPDATE_PRODUCT } from '../actions/index';
import { UPDATE_PACKAGE } from '../actions/index';

function getId () {
    return Math.floor(Math.random() * (10000 - 1) + 1);
}

const initialState = {
    products: [
        { product: 'Authentication Setup', price: 500, rate: 0.25, id: getId(), percentage: 35 },
        { product: 'List Hygiene (100k)', price: 1995, rate: 2, id: getId(), percentage: 25 },
        { product: 'List Hygiene (300k)', price: 3995, rate: 3.5, id: getId(), percentage: 10 },
        { product: 'De-List', price: 199, rate: 0.25, id: 4, percentage: 30 }
    ],
    packages: [
        { product: "Silver", price: 1000, rate: 5, id: getId(), percentage: 35 },
        { product: "Gold", price: 1997, rate: 12, id: getId(), percentage: 55 },
        { product: "Platinum", price: 2995, rate: 20, id: getId(), percentage: 10 }
    ]
};

export default function(state = initialState, action) {
    if(action.error) {
        return state;
    }

   switch(action.type) {
        case UPDATE_PRODUCT:
            return action.payload;
        case UPDATE_PACKAGE:
            return action.payload;
       default:
   }
   return state;
}
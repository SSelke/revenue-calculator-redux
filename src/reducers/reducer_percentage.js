import { UPDATE_PERCENTAGE } from '../actions/index';

const initialState = {
    productsPercentage: 75,
    packagesPercentage: 25,
    projection: 250000,
};

export default function (state = initialState, action) {
    if (action.error) {
        return state;
    }

    switch (action.type) {
        case UPDATE_PERCENTAGE:
            return action.payload;
        default:
    }
    return state;
}
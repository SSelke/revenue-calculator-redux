import { UPDATE_HEADER } from '../actions/index';

// function getId() {
//     return Math.floor(Math.random() * (10000 - 1) + 1);
// }

const initialState = {
    headers: [
        { type: "Profit", value: 367284},
        { type: "Revenue", value: 398880},
        { type: "Expenses", value: 31596},
        { type: "Rate", value: 807}
    ]
};

export default function (state = initialState, action) {
    if (action.error) {
        return state;
    }

    switch (action.type) {
        case UPDATE_HEADER:
            return action.payload;
    }
    return state;
}
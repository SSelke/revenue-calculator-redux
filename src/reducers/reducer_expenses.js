import { UPDATE_EXPENSES } from '../actions/index';

function getId() {
    return Math.floor(Math.random() * (10000 - 1) + 1);
}

const initialState = {
    expenses: [
        { expense: 'Office', category: 'Rent', amount: 1200, id: getId() },
        { expense: 'ATT', category: 'Telecom', amount: 433, id: getId() },
        { expense: 'Accountant', category: 'Taxes', amount: 1000, id: getId() }
    ]
};

export default function (state = initialState, action) {
    if (action.error) {
        return state;
    }

    switch (action.type) {
        case UPDATE_EXPENSES:
            return action.payload;
    }
    return state;
}
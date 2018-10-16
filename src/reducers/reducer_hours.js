import { UPDATE_HOURS } from '../actions/index.js';

const initialState = [
    {type: "Hours/Day", data: 6},
    {type: "Days/Week", data: 4},
    {type: "Vacation", data: 5},
    {type: "Sick", data: 5},
    {type: "Holidays", data: 10},
    {type: "Billable %", data: 75}
];

export default function updateHours(state = initialState, action) {
    switch (action.type) {
        case UPDATE_HOURS:
            return action.payload;
        default:
    }
    return state;
}
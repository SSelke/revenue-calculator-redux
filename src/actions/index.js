export const SET_VISIBILITY = 'SET_VISIBILITY';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PACKAGE = 'UPDATE_PACKAGE';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
export const UPDATE_HOURS = 'UPDATE_HOURS';
export const UPDATE_HEADER = 'UPDATE_HEADER';
export const UPDATE_PERCENTAGE = 'UPDATE_PERCENTAGE';

export function isVisible(name) {
    return {
        type: SET_VISIBILITY,
        payload: name
    }
}

export function updateProduct(data) {
    return {
        type: UPDATE_PRODUCT,
        payload: data
    }
}

export function updatePackage(data) {
    return {
        type: UPDATE_PACKAGE,
        payload: data
    }
}

export function updateExpenses(data) {
    return {
        type: UPDATE_EXPENSES,
        payload: data
    }
}

export function updateHours(data) {
    return {
        type: UPDATE_HOURS,
        payload: data
    }
}

export function updateHeader(data) {
    return {
        type: UPDATE_HEADER,
        payload: data
    }
}

export function updatePercentage(data) {
    return {
        type: UPDATE_PERCENTAGE,
        payload: data
    }
}
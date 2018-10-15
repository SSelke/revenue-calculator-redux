export const SET_VISIBILITY = 'SET_VISIBILITY';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PACKAGE = 'UPDATE_PACKAGE';
export const UPDATE_TOTALS = 'UPDATE_TOTALS';

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

export function updateTotals(data) {
    return {
        type: UPDATE_TOTALS,
        payload: data
    }
}
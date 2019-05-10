import { ADD_TO_CART, 
    CALL_API,
    SAVE_CATEGORY,
    SAVE_RECIPES } from './actionTypes';

import {GET, fetchStatusHandler} from '../../util/apiUtil'
import { from } from 'rxjs';

export const ADD_TO_CART_DISPATCH = cartNumber => {
    return {
        type: "ADD_TO_CART",
        cartNumber
    }
}

export const SAVE_RECIPES_DISPATCH = recipes => {
    return {
        type: "SAVE_RECIPES",
        recipes
    }
}

export const SAVE_CATEGORY_DISPATCH = category => {
    return {
        type: "SAVE_CATEGORY",
        category
    }
}

export const CALL_API_DISPATCH = (url) => {
    return dispatch => {
        GET(url).then(fetchStatusHandler)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            dispatch(SAVE_CATEGORY_DISPATCH(result.categories))
            dispatch(SAVE_RECIPES_DISPATCH(result.recipes))
        })
        .catch(err => {
            console.error(err)
        })
    }
}
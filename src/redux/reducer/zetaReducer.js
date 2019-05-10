export const zetaReducer = (state = [], action) => {
    switch (action.type) {
        case 'DEMO_ACTION':
          return {
            ...state,
              name:action.name
          }
        case 'SAVE_CATEGORY':
          return {
              ...state,
              category: action.category
          }
        case 'SAVE_RECIPES':
          return {
              ...state,
              recipes: action.recipes
          }
        case 'ADD_TO_CART':
          return {
              ...state,
              cartNumber: action.cartNumber
          }
        default:
          return state
    }
}
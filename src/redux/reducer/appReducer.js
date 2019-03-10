import { SELECT_CATEGORY } from '../../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: action.category
            }
        
        default:
            return state;
    }
}

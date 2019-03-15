import { SELECT_CATEGORY, SELECT_COMMODITTY } from '../../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: action.category
            }
        case SELECT_COMMODITTY:
            return {
                ...state,
                commodity: action.commodity
            }
        default:
            return state;
    }
}

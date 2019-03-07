import { SELECT_COUNTRY } from '../../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_COUNTRY:
            return {
                ...state,
                selectedCountry: action.country
            }
        
        default:
            return state;
    }
}

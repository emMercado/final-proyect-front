import { CREATE_PLACES_ACTION, CONFIRMED_GET_PLACES,CONFIRMED_CREATE_PLACES_ACTION  } from '../actions/PlacesActions'


const initialState = {
    places: [],
};

export function PlacesReducer(state = initialState, actions) {

    if (actions.type === CREATE_PLACES_ACTION) {
        const place  = {
            id: '',
            name: '',
            address: '',
            latitude: '',
            longitude: '',
            url: ''
        };

        const places = [...state.places];
        places.push(place);
        return {
            ...state,
            places,
        };
    }

    if(actions.type === CONFIRMED_CREATE_PLACES_ACTION) {
        const places = [...state.places];
        places.push(actions.payload)
        
        return {...state, places}
    }

    if(actions.type === CONFIRMED_GET_PLACES) {
        return {
            ...state,
            places: actions.payload
        }
    }


    return state;

}
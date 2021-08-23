import { CREATE_PLACES_ACTION, 
    CONFIRMED_GET_PLACES,
    CONFIRMED_CREATE_PLACES_ACTION, 
    CONFIRMED_EDIT_PLACE_ACTION,
    CONFIRMED_DELETE_PLACE_ACTION  } 
from '../actions/PlacesActions'

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

    if(actions.type === CONFIRMED_DELETE_PLACE_ACTION){
        console.log(state.places)
        const places = [...state.place];
        
        const placeIndex = places.findIndex(place => place.id === actions.payload)
        places.splice(placeIndex, 1);

        return{
            ...state, 
            places,
        }
    }

    if(actions.type === CONFIRMED_EDIT_PLACE_ACTION){
        const places = [...state.places];
        const placeIndex = places.findIndex(
            (place) => place.id === actions.payload.id,
        );
        places[placeIndex] = actions.payload;
        return {
            ...state,
            places,
        }
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
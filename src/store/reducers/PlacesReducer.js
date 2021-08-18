import { CREATE_PLACES_ACTION, CONFIRMED_GET_PLACES  } from '../actions/PlacesActions'


const initialState = {
    places: [
        { id: 1, title: 'newPlace', description: 'Sample description' },
        { id: 2, title: 'newPlace2', description: 'Sample description 2' }
    ]
};

export function PlacesReducer(state = initialState, actions) {

    if (actions.type === CREATE_PLACES_ACTION) {
        const place = {
            id: Math.random(),
            title: 'newPlace23',
            description: 'Sample description 23'
        };

        const places = [...state.places];
        places.push(place);
        return {
            ...state,
            places,
        };
    }

    if(actions.type === CONFIRMED_GET_PLACES) {
        return {
            ...state,
            place: actions.payload
        }
    }


    return state;

}
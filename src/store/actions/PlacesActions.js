import { createPlace,formatPlaces, getPlaces } from '../../services/PlacesServices'

export const CREATE_PLACES_ACTION = '[Places Action] Create Places';
export const CONFIRMED_CREATE_PLACES_ACTION = '[Places Action] Confirmed Create Places';
export const GET_PLACES = '[Places Action] Get Places'
export const CONFIRMED_GET_PLACES = '[Places Action] Confirmed Get Places'

export function createPlacesAction(placeData, history) {
    return dispatch => {
        createPlace(placeData).then((response) => {
            const singlePlaces = {
                ...placeData,
                id: response.data.name,
            }
            dispatch(confirmedCreatePlaceAction(singlePlaces))
            console.log(response.data)
            history.push('/places')
        });
    }
}
export function getPlacesAction() {
    return (dispatch, getState) => {
        getPlaces().then((response) => {
            
            let places = formatPlaces(response.data);
            dispatch(confirmedGetPlacesAction(places));

        })
    }

}

export function confirmedCreatePlaceAction(singlePlaces){
    return {
        type: CONFIRMED_CREATE_PLACES_ACTION,
        payload: singlePlaces
    }
}

export function confirmedGetPlacesAction(places) {
    return {
        type: CONFIRMED_GET_PLACES,
        payload: places,
    }
}
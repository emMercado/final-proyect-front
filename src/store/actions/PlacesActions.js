import { createPlace,formatPlaces, getPlaces } from '../../services/PlacesServices'

export const CREATE_PLACES_ACTION = '[Places Action] Create Places';
export const GET_PLACES = '[Places Action] Get Places'
export const CONFIRMED_GET_PLACES = '[Places Action] Confirmed Get Places'

export function createPlacesAction(placeData, history) {
    return dispatch => {
        createPlace(placeData).then((response) => {
            console.log(response.data)
            history.push('/places')
        });
    }
}
export function getPlacesAction() {
    return (dispatch, getState) => {
        getPlaces().then((response) => {
            /* console.log(getState()); */
            let places = formatPlaces(response.data);
            dispatch(confirmedGetPlacesAction(places));
            /* console.log(getState()); */
        })
    }

}
export function confirmedGetPlacesAction(places) {
    return {
        type: CONFIRMED_GET_PLACES,
        payload: places,
    }
}
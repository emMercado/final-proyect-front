import axios from 'axios';
import routes from '../rest/routes';

export function getPlaces() {
    return axios.get(routes.sample());
}

export function createPlace(placeData) {
    return axios.post(routes.sample(),
    placeData,
    );
}

export function updatePlace(place, placeId) {

    return axios.patch(
        `${routes.sample()}${placeId}`,
        place,

    );
}
export function deletePlace(placeId) {

    return axios.delete(
        `${routes.sample()}${placeId}`
    );
}

export function formatPlaces(placesData) {
   
    let places = [];
    for (let key in placesData) {
        places.push({ ...placesData[key], id: key });
    }
    return places;
}
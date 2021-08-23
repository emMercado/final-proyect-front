import axios from 'axios';

export function getPlaces() {
    return axios.get(`https://final-proyect-vac.herokuapp.com/places/`);
}

export function createPlace(placeData) {
    return axios.post(`https://final-proyect-vac.herokuapp.com/places/`,
        placeData,
    );
}

export function updatePlace(place, placeId) {

    return axios.patch(
        `https://final-proyect-vac.herokuapp.com/places/${placeId}`,
        place,

    );
}
export function deletePlace(placeId) {

    return axios.delete(
        `https://final-proyect-vac.herokuapp.com/places/${placeId}`,
    );
}

export function formatPlaces(placesData) {
    /* console.log(response.data); */
    let places = [];
    for (let key in placesData) {
        places.push({ ...placesData[key], id: key });
    }
    return places;
}
import axios from 'axios';

export function getPlaces() {
    return axios.get(`https://final-proyect-vac.herokuapp.com/places/`);
}

export function createPlace(placeData){
    return axios.post(`https://final-proyect-vac.herokuapp.com/places/`,
    placeData,
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
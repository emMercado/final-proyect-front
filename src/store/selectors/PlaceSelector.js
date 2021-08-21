
import { createSelector } from 'reselect';

export const getPlaceById = (state, placeId) => 
    state.places.find((place) => place.id === placeId);

export const getPlace = () => createSelector([getPlaceById], (place) => place);

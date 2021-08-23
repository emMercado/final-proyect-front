import { connect } from 'react-redux';
import { getPlace } from '../../store/selectors/PlaceSelector';

function SinglePlace(props) {
    return (
        <div >
            <div>Single place Page</div>  
            <div>Id: {props.place.id}</div>
            <div>Name: {props.place.name}</div>
            <div>Address: {props.place.address}</div>
            <div>Longitude: {props.place.longitude}</div>
            <div>Latitude: {props.place.latitude}</div>
            <div>URL: {props.place.url}</div>
        </div>
    )
}

const makeStateToProps = () => {
    const place = getPlace();
    return (state, props) => {
        return {
            place: place(state, props.match.params.id)
        }
    }
}

export default connect(makeStateToProps)(SinglePlace);
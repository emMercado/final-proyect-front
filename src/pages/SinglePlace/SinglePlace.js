import { connect } from 'react-redux';
import { getPlace } from '../../store/selectors/PlaceSelector';
import { Card } from 'react-bootstrap';

function SinglePlace(props) {

    return (
        <div class="ml-10">
            <Card style={{ width: '40rem' }} class='text-white'>
                <Card.Body class="text-center text-white bg-secondary">
                    <div >
                        <Card.Title>{props.place.name}</Card.Title>
                        <Card.Text>
                            <div>Id: {props.place.id}</div>
                            <div>Address: {props.place.address}</div>
                            <div>Longitude: {props.place.longitude}</div>
                            <div>Latitude: {props.place.latitude}</div>
                            <img class="mx-auto d-block" src={props.place.url} alt="">{/* {props.place.url} */}</img>
                            <a href={props.place.url} target="_blank" rel="noreferrer" class="text-white"> {props.place.url}</a>
                            </Card.Text>
                        </div >
                    </Card.Body>
                </Card>
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
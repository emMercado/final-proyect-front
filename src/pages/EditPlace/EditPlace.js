import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getPlace } from '../../store/selectors/PlaceSelector';
import { updatePlaceAction } from '../../store/actions/PlacesActions';
import { Button } from 'react-bootstrap';

function EditPlace(props) {

    const [place, setPlace] = useState(props.place)

    const dispatch = useDispatch();

    useEffect(() => {
        setPlace(props.place)
    }, [props.place]
    )

    function onUpdatePlace(e) {
        e.preventDefault();
        dispatch(updatePlaceAction(place, props.history))
        console.log(dispatch)
    }

    return (
        <div >
            <div>Edit Place Details</div>

            <div >
                <form onSubmit={onUpdatePlace}>


                    {/* <div>
                        <label>Name</label>
                        <div>
                            <input type='text'
                                value={place._id}
                                onChange={(e) => setPlace({ ...place, id: e.target.value })}
                            />
                        </div>
                    </div> */}
                    <div class="form-group">
                        <label>Name</label>
                        <div>
                            <input type='text'
                                value={place.name}
                                onChange={(e) => setPlace({ ...place, name: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Address</label>
                        <div class="form-group">
                            <input type='text'
                                value={place.address}
                                onChange={(e) => setPlace({ ...place, address: e.target.value })}
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Latitude</label>
                        <div>
                            <input type='text'
                                value={place.latitude}
                                onChange={(e) => setPlace({ ...place, latitude: e.target.value })}
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Longitude</label>
                        <div>
                            <input type='text'
                                value={place.longitude}
                                onChange={(e) => setPlace({ ...place, longitude: e.target.value })}
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Url</label>
                        <div>
                            <textarea
                                value={place.url}
                                onChange={(e) => setPlace({ ...place, url: e.target.value })}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <Button>

                            <button type='submit'>Edit Place</button>
                        </Button>
                    </div>

                </form>
            </div>

        </div>
    )
}

const makeStateToProps = () => {
    const place = getPlace();
    return (state, props) => {
        return {
            place: place(state, props.match.params.id)
        }
    };
}

export default connect(makeStateToProps)(EditPlace);
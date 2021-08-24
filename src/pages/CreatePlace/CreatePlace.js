import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlacesAction } from '../../store/actions/PlacesActions';
import { Card, Button } from 'react-bootstrap';

export default function CreatePlace(props) {
    const id = '';
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [url, setUrl] = useState('');

    const dispatch = useDispatch();

    function onCreatePlace(e) {
        e.preventDefault();
        const placeData = {
            id,
            name,
            address,
            latitude,
            longitude,
            url,
        };

        dispatch(createPlacesAction(placeData, props.history));
    }

    return (
        <div   class="card text-center m-20">

            <Card style={{ width: '50rem' }} class="text-center">
                <div>
                    <h2>Create Place</h2>
                </div>
                <div class="container mt-10">
                    <div class="mt-3">
                        <form onSubmit={onCreatePlace}>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div type='text' class="input-group-prepend" >
                                        <span class="input-group-text" id="basic-addon3">Name</span>
                                    </div>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    ></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div type='text' class="input-group-prepend" >
                                        <span class="input-group-text" id="basic-addon3">Address</span>
                                    </div>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    ></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div type='text' class="input-group-prepend" >
                                        <span class="input-group-text" id="basic-addon3">Longitude</span>
                                    </div>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                                        value={longitude}
                                        onChange={(e) => setLongitude(e.target.value)}
                                    ></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div type='text' class="input-group-prepend" >
                                        <span class="input-group-text" id="basic-addon3">Latitude</span>
                                    </div>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                                        value={latitude}
                                        onChange={(e) => setLatitude(e.target.value)}
                                    ></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div type='text' class="input-group-prepend" >
                                        <span class="input-group-text" id="basic-addon3">Url</span>
                                    </div>
                                    <textarea
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}>
                                    </textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3 mb-2">
                                    <Button variant="warning" class="text-decoration-none text-white">
                                        <Link to='/places' className='' class="text-decoration-none text-white">Back to places</Link>
                                    </Button>

                                </div>
                                <div class="col-6 ml-3 mb-2">
                                    <Button variant="success" class="text-decoration-none text-white">
                                        <button type='submit'>Create Post</button>
                                    </Button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </Card>
        </div>
    )
}
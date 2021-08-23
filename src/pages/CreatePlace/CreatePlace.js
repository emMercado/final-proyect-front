import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlacesAction } from '../../store/actions/PlacesActions';

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
        <div>
            <div>
                <h2>Create Place Page</h2>
                <div>
                    <Link to='/places' className=''>Back to places</Link>
                </div>
            </div>

            <div>
                <form onSubmit={onCreatePlace}>
                    <div>
                        <label>Name</label>
                        <div>
                            <input type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Address</label>
                        <div>
                            <input type='text'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Latitude</label>
                        <div>
                            <input type='text'
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Longitude</label>
                        <div>
                            <input type='text'
                                value={longitude}
                                onChange={(e) => setLongitude(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Url</label>
                        <div>
                            <textarea
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}>

                            </textarea>
                        </div>
                    </div>
                    <div>
                        <button type='submit'>Create Place</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
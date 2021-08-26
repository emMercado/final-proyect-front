import { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import SinglePlace from '../../pages/SinglePlace/SinglePlace';
import EditPlace from '../../pages/EditPlace/EditPlace';
import {
    createPlacesAction,
    getPlacesAction,
    deletePlaceAction
} from '../../store/actions/PlacesActions';

class Places extends Component {

    onCreatePlaces() {
        this.props.createPlacesAction();
    }

    componentDidMount() {
        if (this.props.places && !this.props.places.length) {
            this.props.getPlacesAction();
        }
    }

    onDeletePlace(placeId) {
        if (window.confirm('Are you sure you want to delete place?')) {
            this.props.deletePlaceAction(placeId, this.props.history)
        }
    }

    render() {

        const places = [];

        for (let place of this.props.places) {
            places.push(
                <div >
                    <div key={place.id}>
                        <Card style={{ width: '20rem' }} >
                            <Card.Body>
                                <Card.Title>{place.name}</Card.Title>
                                <Card.Text>
                                    <div>  </div>
                                    <div> {place.address}</div>
                                </Card.Text>
                                <hr></hr>
                                <div class='d-flex'>
                                    <div class="p-2">
                                        <Button variant="success" class="text-white">
                                            <Link to={{ pathname: `/places/${place.id}` }} className='text-purple-500' class=" text-decoration-none text-white">View Details</Link>
                                        </Button>

                                    </div>
                                    <div class="p-2">
                                        <Button variant="warning" class="text-white">
                                            <Link to={{ pathname: `/places/${place.id}` }} className='text-purple-500' class=" text-decoration-none text-white">Edit Details </Link>
                                        </Button>
                                    </div>
                                    <div class="p-2">
                                        <Button variant="danger" className='text-purple-500' onClick={() => this.onDeletePlace(place._id)} class="text-decoration-none text-white">Delete</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>


            );
        }

        return (

            <div class="container">
                <div className="flex items-center justify-between my-4" id="top">
                    <h2 className="bolder text-lg" class="ml-1">Places</h2>
                    <Button class="text-decoration-none text-white">
                        <Link to='/createplace' variant='primary' class="text-decoration-none text-white">
                            Create Place
                        </Link>
                    </Button>
                </div>
                <hr />

                <div class="row mb-3" className="flex">
                    <div class="col-8" className="flex-1">
                        {places}
                    </div>
                    <div class="col-4" className="flex-1">
                        {this.props.places.length && (
                            <Switch>
                                <Route
                                    path='/places/:id'
                                    exact
                                    component={SinglePlace}
                                />
                                <Route
                                    path='/places/:id'
                                    component={EditPlace}
                                />
                            </Switch>
                        )}
                    </div>

                </div>

            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        places: state.places,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createPlacesAction, getPlacesAction, deletePlaceAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);
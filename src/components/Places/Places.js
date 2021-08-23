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
        if(window.confirm('Are you sure you want to delete place?')){
            this.props.deletePlaceAction(placeId, this.props.history)
        }
    }

    render() {

        const places = [];
        
        for (let place of this.props.places) {
            places.push(

                <div key={place.id} /* className='mt-3 w-1/2' */>
                    {/*  <div className='shadow border p-3 mx-3'>
                        <div> {place.name} </div>
                        <div> {place.address}</div>
                        <div> {place.longitude}</div>
                        <div> {place.latitude}</div>
                        <div> {place.url}</div>
                        <div><Link to={{ pathname: `/places/${place.id}` }} className='text-purple-500'>View Details</Link></div>
                    </div> */}
                    <hr />
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{place.name}</Card.Title>
                            <Card.Text>
                                <div>  </div>
                                <div> {place.address}</div>
                                {/*                              <div> {place.longitude}</div>
                                <div> {place.latitude}</div> */}
                                {/*    <div> {place.url}</div> */}
                            </Card.Text>
                            <div>
                                <div>
                                    <Link to={{ pathname: `/places/${place.id}` }} className='text-purple-500'>View Details</Link>

                                    {/*  <Button variant="danger">
                                        <div><Link to={{ pathname: `/places/${place.id}` }} className='text-purple-500'>View Details</Link></div>
                                    </Button>
                                    <h2> </h2>
                                    <Button variant="danger">
                                        <div><Link to={{ pathname: `/places/${place.id}` }} className='text-purple-500'>Edit Details</Link></div>
                                    </Button> */}
                                </div>
                                <div>
                                    <Link to={{ pathname: `/places/${place.id}`}} className='text-purple-500'>Edit Details </Link>
                                </div>
                                <div>
                                    <Button className='text-purple-500' onClick={() => this.onDeletePlace(place._id)}>Delete
                                   {/* {console.log(place._id)}*/}
                                     {console.log(place.id)} 
                                    </Button>
                                    
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>



            );
        }

        return (

            <div className='mt-4'>

                <div className="flex items-center justify-between my-4">
                    <h2 className="bolder text-lg">Places</h2>
                    <Link to='/createplace' className="bg-danger px-3 py-2">
                        Create Place
                    </Link>

                </div>
                <hr />

                <div className="container mx-auto">
                    <div className='flex'>
                        <div className='flex-1'>
                            <div className='flex flex-wrap'>
                                {places}
                            </div>
                        </div>
                        <div className='flex-1'>
                            {this.props.places.length && (
                              
                                    <Switch>
                                        {/* <Route
                                            path='/places/:id'
                                            exact
                                            component={SinglePlace}
                                        />  */}
                                        <Route
                                            path='/places/:id'
                                            component={EditPlace}
                                        />
                                    </Switch>
                                
                            )}
                        </div>
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
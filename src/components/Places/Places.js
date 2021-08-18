import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPlacesAction, getPlacesAction } from '../../store/actions/PlacesActions';
import { Link } from 'react-router-dom'


class Places extends Component {

    onCreatePlaces() {
        this.props.createPlacesAction();
    }

    componentDidMount() {
        if(this.props.places && !this.props.places.length){
            this.props.getPlacesAction();
        }
    }

    render() {

        const places = [];

        for (let place of this.props.places) {
            places.push(
                <div key={place.id} className='shadow border p-3 mx-3 mt-3 w-1/3'>
                    <div> {place.name} </div>
                    <div> {place.address}</div>
                    <div> {place.longitude}</div>
                    <div> {place.latitude}</div>
                    <div> {place.url}</div>
                    <hr />
                </div>);
        }

        return (
            <div>
                <div className="flex items-center">
                    <h2 className="bolder text-lg">Places</h2>
                    <Link to='/createplace' className="bg-danger px-3 py-2">
                        Create Place
                    </Link>
                </div>
                <hr />
                
                <div className='flex'>
                    {places}
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
    return bindActionCreators({ createPlacesAction, getPlacesAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);
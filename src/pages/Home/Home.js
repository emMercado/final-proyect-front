import { Card, Image } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlacesAction } from '../../store/actions/PlacesActions';

const mapStateToProps = (state) => {
    return {
        places: state.places,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPlacesAction }, dispatch);
}

function Home(props) {

    useEffect(() => {
        props.getPlacesAction();
    }, []);

    return (
        <div>
            <div class="container" >
                {props.places.map(({ name, _id, url }) => (
                    <Card
                        key={_id}>
                        <Card.Body>
                            <Card.Title class='text-bold' style={{textAlign: 'center', fontSize:'30px'}}>{name}</Card.Title>
                            <Image src={url} style={{itemsAlign: 'center'}}>
                            </Image>
                        </Card.Body>
                    </Card>)
                )}
            </div>
        </div>
    )



}



export default connect(mapStateToProps, mapDispatchToProps)(Home)


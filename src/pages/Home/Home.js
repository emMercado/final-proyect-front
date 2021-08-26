import { Card, Image, Button, Modal } from 'react-bootstrap';
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

    const [show, setShow] = useState(false);

    useEffect(() => {
        props.getPlacesAction();
    }, []);

    return (
        <div className="container justify-content-center align-items-center h-100 text-center" style={{marginTop:'50px', marginLeft: '30px',textAlign: 'center' }}>
            <div className="row g-4 justify-content-center" >
                {props.places.map(({ name, _id, urlMap, img, address }) => (
                    <div className="col-md-4 mt-5 ">
                        <Card
                            style={{ width: '22rem', borderRadius: '2%',  backgroundImage: `url('https://getwallpapers.com/wallpaper/full/1/3/b/282806.jpg')` }}
                            key={_id}>
                            <Card.Body >
                                <Card.Title class='text-bold' style={{ textAlign: 'center', fontSize: '20px' }}>{name}</Card.Title>
                                {/*  <Image src={img} style={{ itemsAlign: 'center', marginTop: '10px', height: 150 }} alt='Image Not Available...' class="card-img-top border-white">
                                </Image> */}
                                <img class="mx-auto d-block" style={{ cursor: 'pointer' }} src={img} onClick={() => setShow(true)} alt="Image Not Available..." />
                               {/*  <Modal centered={true} size='xl' show={show} onHide={() => setShow(false)}>
                                    <Image src={img} preview={true} ></Image>
                                </Modal>  */}
                                <Card.Text style={{ marginTop: '5px', fontSize: '20px' }}>{address}</Card.Text>
                                <Button href={urlMap} target="_blank" style={{ marginTop: '2px' }}>
                                    Go there
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)


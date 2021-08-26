import { connect } from 'react-redux';
import { getPlace } from '../../store/selectors/PlaceSelector';
import { Card, Image, Modal } from 'react-bootstrap';
import { useState } from 'react';

function SinglePlace(props) {

    const [show, setShow] = useState(false);

    return (
        <div class="ml-10">

            <Card style={{ width: '40rem' }} class='text-white'>
                <Card.Body class="text-center text-white bg-secondary">
                    <div >
                        <Card.Title>{props.place.name}</Card.Title>
                        <Card.Text>
                            <div>Id: {props.place.id}</div>
                            <div>Address: {props.place.address}</div>
                            <img class="mx-auto d-block" style={{ cursor: 'pointer' }} src={props.place.img} onClick={() => setShow(true)} alt=""/>
                            <Modal centered={true} size='xl' show={show} onHide={() => setShow(false)}>
                                <Image src={props.place.img} preview={true}></Image>
                            </Modal>
                            <a href={props.place.urlMap} target="_blank" rel="noreferrer" class="text-white"> {props.place.urlMap}</a>
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
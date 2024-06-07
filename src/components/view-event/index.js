import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEvent, selectEvent } from '../../redux/slices/eventSlice'

const initialState = {
    title: '',
    date: '',
    venue: '',
    notes: ''
}

const ViewEvent = () => {

    const {eventId} = useParams();
    const navigate = useNavigate();
    const event = useSelector(state => state.eventState.selectedEvent)
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

        //setLoading(true);
        //axios.get('https://664f2923fafad45dfae299c4.mockapi.io/api/v1/events/' + eventId)
        //.then(res => {
        //    setEvent(res.data)
        //})
        //.catch(err => {
        //    setEvent(initialState);
        //})
        //.finally(() => {
        //    setLoading(false);
        //})

        dispatch(selectEvent({eventId: eventId}))

    }, [eventId, dispatch]);

    const onDeleteEvent = async () => {
        //const results = await axios.delete('https://664f2923fafad45dfae299c4.mockapi.io/api/v1/events/' + eventId);
        //if (results.status === 200) {
            // Display success
            //navigate("/", {state: {loadSideBar: true}});
        //} else {
            // Display failed
        //}

        dispatch(deleteEvent({eventId: eventId}));
        navigate("/", {state: {loadSideBar: true}});
    }

    const onEditEvent = () => {
        navigate("/events/" + eventId + "/edit", {state: {eventData: event, loadSideBar: false}});
    }


    return (
        <Container style={{
            marginTop: '2rem'
        }}>
            {
                isLoading ? (
                    <Row>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Row>
                ) : (
                    <Row>

                    <Col lg={12}>

                        <h3>{ event && event.title}</h3>
                    </Col>

                    <Col lg={12}>
                        Date & Time : {event && event.date}
                    </Col>

                    <Col lg={12}>

                        Venue: {event && event.venue}
                    </Col>

                    <Col lg={12}>
                        Notes: {event && event.notes}
                    </Col>

                    <Col lg={12}>
                        <hr></hr>
                    </Col>

                    <Col lg={12}>
                        <Button variant="primary" onClick={() => onEditEvent()}>Edit</Button>{' '}
                        <Button variant="danger" onClick={() => onDeleteEvent()}>Delete</Button>{' '}
                    </Col>

                    </Row>
                )
            }

        </Container>
    );

}

export default ViewEvent;
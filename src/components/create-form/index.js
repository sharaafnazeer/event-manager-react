import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form,Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { createEvent, updateEvent } from '../../redux/slices/eventSlice';

const initialState = {
    title: '',
    venue: '',
    date :'',
    notes: '',
}


const CreateForm = () => {

    const [form, setForm] = useState(initialState)
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const {eventId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const formData = location.state?.eventData;

        if(formData)
            setForm(formData);
        else 
            setForm(initialState);

    }, [location.state]);

    const onFormSubmit = async (event) => {
        event.preventDefault();

        //setLoading(true);
        let resutls;

        if(location.pathname === `/events/${eventId}/edit`) {
            // Update the event
            //resutls = await axios.put('https://664f2923fafad45dfae299c4.mockapi.io/api/v1/events/' + eventId, form)
            
            dispatch(updateEvent({event: form, eventId: eventId}))

        } else {
            // Create the event
            //resutls = await axios.post('https://664f2923fafad45dfae299c4.mockapi.io/api/v1/events', form)

            dispatch(createEvent({event: form}));
            setForm(initialState);
            
        }

        //if (resutls.status === 201 || resutls.status ===  200) {
            // Display success
            
            // Navigate only when creating an event
        //    if (location.pathname === "/") {
          //      setForm(initialState);
           //     navigate("/", { state: {loadSideBar: true}});
           // } else {
             //   navigate(location.pathname, { state: {loadSideBar: true, eventData: form}});
            //}

        //} else {
            // Display failed
        //}

        //setLoading(false);
    }

    const onInputChange = (event) => {
        const newForm = {
            ...form,
            [event.target.id]: event.target.value
        }
        setForm(newForm);
    }

    return (
        <Row>
                        <Col lg={12}>

                            <Form onSubmit={onFormSubmit}>
                                <Form.Group className="mb-3" controlId="title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Title of the event" onChange={(e) => onInputChange(e)} value={form.title}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="date">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="text" placeholder="Date of the event"  onChange={(e) => onInputChange(e)} value={form.date}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="venue">
                                    <Form.Label>Venue</Form.Label>
                                    <Form.Control type="text" placeholder="Venue of the event"  onChange={(e) => onInputChange(e)} value={form.venue}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="notes">
                                    <Form.Label>Notes</Form.Label>
                                    <Form.Control as="textarea" rows={3}  onChange={(e) => onInputChange(e)} value={form.notes}/>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Button type="submit" disabled={isLoading}>
                                        {
                                            location.pathname === `/events/${eventId}/edit` ? 'Update': 'Save'
                                        }
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>

                    </Row>
    )
}

export default CreateForm;
import { useState } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EventList = ({events = [], isLoading}) => {

    const navigate = useNavigate();
    const [selectedEvent, setSelectedEvent] = useState(null);


    const onSelectEvent = (e) => {
        setSelectedEvent(e.target.id);
        navigate('/events/' + e.target.id);
    }


    return (
        <>
            {
                isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <ListGroup>
                        {
                            events.map((event, key) => 
                                <div key={key}>
                                    {
                                        event.id === selectedEvent ? (
                                            <ListGroup.Item active id={event.id} onClick={(e) => onSelectEvent(e)}>{event.title}</ListGroup.Item>
                                        ) : (
                                            <ListGroup.Item id={event.id} onClick={(e) => onSelectEvent(e)}>{event.title}</ListGroup.Item>
                                        )
                                    }
                                </div>
                                )
                        }
                    </ListGroup>
                )
            }
        </>

        
    )
}

export default EventList;
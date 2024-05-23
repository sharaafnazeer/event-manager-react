import { ListGroup, Spinner } from "react-bootstrap";

const EventList = ({events = [], isLoading}) => {
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
                            events.map((event, key) => <ListGroup.Item key={key}>{event.title}</ListGroup.Item>)
                        }
                    </ListGroup>
                )
            }
        </>

        
    )
}

export default EventList;
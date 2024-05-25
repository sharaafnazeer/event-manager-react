import { Container,Row, Col } from 'react-bootstrap';
import './styles.css'
import EventList from '../components/event-list';
import SearchForm from '../components/search-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, useLocation } from 'react-router-dom';

const RootLayout = () => {

    const [events, setEvents] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const location = useLocation();

    const getEvents = () => {
        setLoading(true);
        axios.get('https://664f2923fafad45dfae299c4.mockapi.io/api/v1/events')
        .then(res => {
            setEvents(res.data);
        })
        .catch(err => {
            setEvents([]);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        getEvents();
        
    }, [location.key, location.pathname]);

    const onSearch = (searchKey) => {

        if(searchKey) {
            const filteredEvents = events.map(event => {
                return {
                    ...event,
                    titleSmall: event.title.toLowerCase()
                }
            }).filter(event => event.titleSmall.includes(searchKey.toLowerCase()));
    
            setEvents(filteredEvents);
        } else {
            setLoading(true);
            getEvents();
        }
        
    }

    return (
        <Container className='container-layout'>

            <Row>
                <Col lg={12}>
                    <h3 style={{
                        textAlign: 'center'
                    }}>Events Manager</h3>

                    <hr></hr>
                </Col>
            </Row>

            <Row>
                <Col lg={4} className='search-layout'>

                    <Row>

                        <Col lg={12}>
                            <SearchForm onSearchClick={onSearch}/>
                        </Col>
                        <Col lg={12}><hr/></Col>

                        <Col lg={12}>
                            <EventList events={events} isLoading={isLoading}/>
                        </Col>
                    </Row>

                </Col>

                <Col lg={1}></Col>
                <Col lg={7} className='content-layout'>

                    <Outlet />

                </Col>
            </Row>
        </Container>
    )

}

export default RootLayout;
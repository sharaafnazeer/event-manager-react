import { Container,Row, Col, Dropdown } from 'react-bootstrap';
import './styles.css'
import EventList from '../components/event-list';
import SearchForm from '../components/search-form';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, useLocation } from 'react-router-dom';
import {ThemeContext} from '../hooks/ThemeContext';
import {useDispatch, useSelector} from 'react-redux'
import {selectEvents, searchEvents, clearFilteredEvents} from '../redux/slices/eventSlice'

const RootLayout = () => {


    const {theme, setTheme} = useContext(ThemeContext);
    const events = useSelector((state) => state.eventState.events);
    const filteredEvents = useSelector((state) => state.eventState.filteredEvents);
    const [isLoading, setLoading] = useState(false);
    const location = useLocation();

    const dispatch = useDispatch();
    

    const getEvents = () => {
        // setLoading(true);
        //axios.get('https://664f2923fafad45dfae299c4.mockapi.io/api/v1/events')
        //.then(res => {
           // setEvents(res.data);
        //})
        //.catch(err => {
           // setEvents([]);
        //})
        //.finally(() => {
         //   setLoading(false);
        //});
    }

    useEffect(() => {
       if (location.state?.loadSideBar || location.state?.loadSideBar === undefined)
         getEvents();
        
    }, [location.state?.loadSideBar, location.key, dispatch]);

    const onSearch = (searchKey) => {

        if(searchKey) {
            dispatch(searchEvents({searchKey}));
        } else {
            dispatch(clearFilteredEvents());
        }
        
    }

    const onSelectTheme = (theme) => {
        setTheme(theme)
    }

    return (
        <Container fluid className='container-layout' style={{
            backgroundColor: theme === 'dark' ? '#878787' : theme === 'light' ? '#E3E3E3' : '#6F7992'
        }}>

            <Row>
                <Col lg={12}>

                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Theme
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => onSelectTheme('light')}>Light</Dropdown.Item>
                        <Dropdown.Item onClick={() => onSelectTheme('dark')}>Dark</Dropdown.Item>
                        <Dropdown.Item onClick={() => onSelectTheme('primary')}>Primary</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Col>

            </Row>

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
                            <EventList events={filteredEvents.length > 0 ? filteredEvents :events} isLoading={isLoading}/>
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
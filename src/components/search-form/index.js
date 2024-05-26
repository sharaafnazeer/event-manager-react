import { useRef } from "react";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchForm = ({onSearchClick}) => {

    const searchRef = useRef();
    const navigate = useNavigate();

    const onSearch = () => {
        onSearchClick(searchRef.current.value)
    }

    const addNewClick = () => {
        navigate('/', {state: {loadSideBar: true}});
    }

    return (
        <Form name='search-form'>
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                        Search
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <Form.Control id="inlineFormInputGroup" placeholder="Search" ref={searchRef} onChange={() => onSearch()}/>
                                    </InputGroup>
                                    </Col>
                                    <Col xs="auto">
                                    <Button className="mb-2" onClick={() => addNewClick()}>
                                        Add New
                                    </Button>
                                    </Col>
                                </Row>
        </Form>
    )
}

export default SearchForm;
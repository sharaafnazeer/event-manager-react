import { useRef } from "react";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";

const SearchForm = ({onSearchClick}) => {

    const searchRef = useRef();

    const onSearch = () => {
        console.log('SEARCH VALUE : ' + searchRef.current.value);
        onSearchClick(searchRef.current.value)
    }

    return (
        <Form name='search-form'>
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                        Search
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <Form.Control id="inlineFormInputGroup" placeholder="Search" ref={searchRef} />
                                    </InputGroup>
                                    </Col>
                                    <Col xs="auto">
                                    <Button className="mb-2" onClick={() => onSearch()}>
                                        Search
                                    </Button>
                                    </Col>
                                </Row>
        </Form>
    )
}

export default SearchForm;
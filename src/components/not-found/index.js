import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Notfound = () => {

    const navigate = useNavigate();

    const onBackClick = () => {
        navigate("/");
    }

    return (
        <Container>
            <Row>
                <Col lg={12} 
                    style={{
                        display: 'flex',
                        marginBottom: '4rem',
                        marginTop: '4rem',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}
                >

                    <Image src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-7621869-6167023.png?f=webp" thumbnail />

                    <Button onClick={() => onBackClick()}>Go to Home</Button>

                </Col>
            </Row>
        </Container>
    )
}

export default Notfound;
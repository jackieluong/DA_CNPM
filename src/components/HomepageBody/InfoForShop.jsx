import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import shoes2 from '../../assets/shoes2.jpg';
import pr from '../../assets/manWearingShoes.jpg';
import rangeShoes from '../../assets/rangeShoes.jpg';

const InfoForShop = () => {
    return (
        <Container className="my-5">
            <h1><strong>Sản phẩm của chúng tôi</strong></h1>
            <Row className="text-center">
                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shoes2}/>
                        <Card.Body>
                            <Card.Title>Chính hãng</Card.Title>
                            <Card.Text>
                                Cửa hàng cam kết sản phẩm là chính hãng và được bảo hành phối hợp với nhà cung cấp
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pr} height={180}  />
                        <Card.Body>
                            <Card.Title>Tiện lợi</Card.Title>
                            <Card.Text>
                                Quý khách có thể chọn mua sản phẩm phù hợp với tài chính và nhu cầu một cách tiện lợi
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={rangeShoes} height={180} />
                        <Card.Body>
                            <Card.Title>Tài trợ</Card.Title>
                            <Card.Text>
                                Được tài trợ bởi nhiều nhãn hàng, khách hàng có thể tìm thấy nhiều thương hiệu yêu thích khi ghé thăm shop
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default InfoForShop;
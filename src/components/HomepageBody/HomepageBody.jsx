import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Button, CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import shoes1 from '../../assets/shoes1.jpg';
import prPhoto from '../../assets/prPhoto.jpg';

export default function HomepageBody() {
    return (
        <Container style={{backgroundColor: "#f0f0f0"}} className='text-center'>
            <Carousel>
                <CarouselItem>
                <Row className="d-flex align-items-center">
        <Col className='py-5' >
            <Image src={prPhoto} width={772} height={579}/>
        </Col>
        <Col>
            <h1 style={{fontWeight: "bold", fontSize: 70}}>ƯU TIÊN SỰ TIỆN LỢI</h1>
            <Button onClick={() => window.location.href = "/product"} variant="primary" size='lg' style={{fontSize: 32, fontWeight: 'bold'}}>
                Mua Ngay
            </Button>
        </Col>
    </Row>
                </CarouselItem>
                <CarouselItem>
                <Row className="d-flex align-items-center">
        <Col className='py-5' >
            <Image src={shoes1} width={772} height={579}  />
        </Col>
        <Col>
            <h1 style={{fontWeight: "bold", fontSize: 70}}>CÔNG NGHỆ ĐỘC QUYỀN</h1>
            <Button onClick={() => window.location.href = "/product"} variant="primary" size='lg' style={{fontSize: 32, fontWeight: 'bold'}}>
                Mua Ngay
            </Button>
        </Col>
    </Row>
                </CarouselItem>
            </Carousel>
</Container>
    );
}
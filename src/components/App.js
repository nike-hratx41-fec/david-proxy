import React from 'react';
import NavBar from './NavBar';
import ImageGallery from './ImageGallery';
import Description from './Description';
import Social from './Social';
import Reviews from './Reviews';
import Carousel from './Carousel';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        //bind functions
    }

    //enter functions below

    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    <Container fluid="true">
                        <Row>
                            <Col lg={8}><ImageGallery /><Social /></Col>
                            <Col lg={4}><Description /><Reviews /></Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Carousel />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;
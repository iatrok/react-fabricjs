import React, { Component } from 'react';
import { Button, Container, Row, Col, Tabs, Tab, Card, InputGroup, FormControl } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/header';

import { connect } from 'react-redux';
import { userAction } from './store/rootAction';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <Container fluid className="">
                    <Row>
                        <Col md={2} className="col-left">
                            <Tabs
                                id="controlled-tab-example"
                                defaultActiveKey="home"
                                className="nav-justified"
                            >
                                <Tab eventKey="home" title={<span><ion-icon name="image-outline" class="icon"></ion-icon> Images</span>}>
                                    {/* Begin card upload image and search */}
                                    <Card className="card-cus border-0">
                                        <Card.Header>
                                            <Button className="btn-upload rounded-pill"> <ion-icon name="cloud-upload-outline"></ion-icon> Upload</Button>
                                        </Card.Header>
                                        <Card.Body>
                                            <InputGroup className="search-img rounded-pill">
                                                <FormControl
                                                    placeholder="Search"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Append>
                                                    <InputGroup.Text id="basic-addon2" className="rounded-pill">Search</InputGroup.Text>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </Card.Body>
                                    </Card>
                                </Tab>
                                <Tab eventKey="profile" title={<span><ion-icon name="text-sharp" class="icon"></ion-icon> Fonts</span>}>
                                    Fonts
                                </Tab>
                                <Tab eventKey="contact" title={<span><ion-icon name="information-circle-sharp" class="icon"></ion-icon> Fonts</span>}>
                                    Fonts
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col md={8} className="">
                            <div className="around-canvas">
                                {/* Begin toolbar */}
                                <div className="d-flex align-items-center canvas-toolbar">
                                    <div className="name">
                                        <p>Hello word</p>
                                        <i>8.5 x 11 in</i>
                                    </div>
                                    <div className="extend">
                                        <Button variant="link" title="Zoom In" className="mat-icon-button"><span className="material-icons icon zoom">zoom_in</span></Button>
                                        <Button variant="link" title="Zoom Out" className="mat-icon-button"><span className="material-icons icon zoom">zoom_out</span></Button>
                                        <Button variant="link" title="Duplicate Page" className="mat-icon-button"><span className="material-icons icon">content_copy</span></Button>
                                        <Button variant="link" title="Add Page" className="mat-icon-button"><span className="material-icons icon">note_add</span></Button>
                                        <Button variant="link" title="Delete Page" className="mat-icon-button"><span className="material-icons icon delete disable">delete</span></Button>
                                    </div>
                                    <div className="artboard-number d-flex align-items-center">
                                        <span>
                                            Page
                                            <input className="input text-center" defaultValue="1" />
                                            of 1
                                        </span>
                                        <div className="panigation-action-artboard">
                                            <Button variant="light" className="rounded-0"><span className="material-icons">navigate_before</span></Button>
                                            <Button variant="light" className="rounded-0"><span className="material-icons">navigate_next</span></Button>
                                        </div>
                                    </div>
                                </div>
                                {/* End toolbar */}
                                
                                {/* Begin wraper-canvas */}
                                <div className="wrap-canvas">
                                    <div className="multi-artboard">
                                        <div className="artboard-item position-relative">
                                            <div className="drawing-element">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End wraper-canvas */}
                            </div>
                        </Col>
                        <Col md={2} className="col-right">Right</Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

const mapState = state => ({
    loading: state.loading
});

const mapDispatch = dispatch => ({
    fetchUser: username => dispatch(userAction.getUser(username))
})

export default connect(mapState, mapDispatch)(App);

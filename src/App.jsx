import React, { Component } from 'react';
import { Button, Container, Row, Col, Tabs, Tab, Card, InputGroup, FormControl, Accordion } from 'react-bootstrap';
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
                                <Tab eventKey="home" title={<span><i className="far fa-image icon"></i> Images</span>}>
                                    {/* Begin card upload image and search */}
                                    <Card className="card-cus border-0">
                                        <Card.Header>
                                            <Button className="btn-upload rounded-pill"><i className="fad fa-upload"></i> Upload</Button>
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
                                    
                                    {/* Begin tab image */}
                                    <div className="tab-image-section">
                                        <Tabs defaultActiveKey="myImage"  className="tab-images">
                                            <Tab eventKey="myImage" title="My Images">
                                                My Images
                                            </Tab>
                                            <Tab eventKey="background" title="Backgrounds">
                                                Backgrounds
                                            </Tab>
                                            <Tab eventKey="cusImage" title="Customer Images">
                                                Customer Images
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title={<span><i className="fad fa-font icon"></i> Fonts</span>}>
                                    Fonts
                                </Tab>
                                <Tab eventKey="contact" title={<span><i className="fas fa-info-circle icon"></i> Info</span>}>
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
                                        <Button variant="link" title="Zoom In" className="mat-icon-button"><i className="fal fa-search-plus icon"></i></Button>
                                        <Button variant="link" title="Zoom Out" className="mat-icon-button"><i className="fal fa-search-minus icon"></i></Button>
                                        <Button variant="link" title="Duplicate Page" className="mat-icon-button"><i className="fal fa-copy icon"></i></Button>
                                        <Button variant="link" title="Add Page" className="mat-icon-button"><i className="fal fa-file-plus icon"></i></Button>
                                        <Button variant="link" title="Delete Page" className="mat-icon-button"><i className="fal fa-trash-alt icon disable"></i></Button>
                                    </div>
                                    <div className="artboard-number d-flex align-items-center">
                                        <span>
                                            Page
                                            <input className="input text-center" defaultValue="1" />
                                            of 1
                                        </span>
                                        <div className="panigation-action-artboard">
                                            <Button variant="light" className="rounded-0"><i className="fal fa-chevron-left"></i></Button>
                                            <Button variant="light" className="rounded-0"><i className="fal fa-chevron-right"></i></Button>
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
                        <Col md={2} className="col-right">
                            <div className="right-nav-layer-content">
                                {/* Begin toolbar edit */}
                                <div className="right-nav-top-section">
                                    <div className="toolbar-edit">
                                        <Button variant='link'>
                                            <span className="fa fa-undo"></span>
                                            <span className="text">Undo</span>
                                        </Button>
                                        <Button variant='link'>
                                            <span className="fa fa-redo"></span>
                                            <span className="text">Redo</span>
                                        </Button>
                                        <Button variant='link'>
                                            <span className="fa fa-copy copy"></span>
                                            <span className="text">Duplicate</span>
                                        </Button>
                                        <Button variant='link'>
                                            <span className="fa fa-trash-alt delete"></span>
                                            <span className="text">Delete</span>
                                        </Button>
                                    </div>
                                </div>
                                {/* End toolbar edit */}
                                {/* Begin right nav layer */}
                                <div className="right-nav-layer-section">
                                    <Accordion defaultActiveKey="0">
                                        <Card className="rounded-0 border-0 card-cus">
                                            <Card.Header className="position-relative">
                                                <span className="title">Layers</span>
                                                <Button variant="default" className="p-0">
                                                    <i className="fad fa-lock-alt icon"></i>
                                                </Button>
                                                <Button variant="default" className="p-0">
                                                    <i className="fad fa-pencil icon"></i>
                                                </Button>
                                                <Button variant="default" className="p-0">
                                                    <i className="fad fa-eye icon view"></i>
                                                </Button>
                                                <Button variant="default" className="p-0 float-right"><i className="fad fa-chevron-up"></i></Button>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className="list-layer">
                                                    <div className="item-layer">
                                                        <div className="d-flex align-items-center item-layer-content">
                                                            <div className="icon lock">
                                                                <i className="fad fa-lock-alt"></i>
                                                            </div>
                                                            <div className="icon edit">
                                                                <i className="fad fa-pencil"></i>
                                                            </div>
                                                            <div className="icon can-view">
                                                                <i className="fad fa-eye"></i>
                                                            </div>
                                                            <div className="icon type">
                                                                <i className="fad fa-font"></i>
                                                            </div>
                                                            <div className="name">Text layer</div>
                                                            <div className="icon remove">
                                                                <i className="fal fa-trash-alt"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-layer">
                                                        <div className="d-flex align-items-center item-layer-content">
                                                            <div className="icon lock">
                                                                <i className="fad fa-lock-alt"></i>
                                                            </div>
                                                            <div className="icon edit">
                                                                <i className="fad fa-pencil"></i>
                                                            </div>
                                                            <div className="icon can-view">
                                                                <i className="fad fa-eye"></i>
                                                            </div>
                                                            <div className="icon type">
                                                                <i className="far fa-image"></i>
                                                            </div>
                                                            <div className="name">Text layer</div>
                                                            <div className="icon remove">
                                                                <i className="fal fa-trash-alt"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                {/* End right nav layer */}
                            </div>
                        </Col>
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

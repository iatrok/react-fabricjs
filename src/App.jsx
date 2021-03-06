import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Button, Container, Row, Col, Tabs, Tab, Card, InputGroup, FormControl, Accordion, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4} from 'uuid';

import Header from './component/header';

import { connect } from 'react-redux';
import { userAction } from './store/rootAction';

import Canvas from './component/canvas/canvas';

const propertiesToInclude = [
	'id',
	'name',
	'locked',
	'file',
	'src',
	'link',
	'tooltip',
	'animation',
	'layout',
	'workareaWidth',
	'workareaHeight',
	'videoLoadType',
	'autoplay',
	'shadow',
	'muted',
	'loop',
	'code',
	'icon',
	'userProperty',
	'trigger',
	'configuration',
	'superType',
	'points',
	'svg',
	'loadType',
];

const defaultOption = {
	fill: 'rgba(0, 0, 0, 1)',
	stroke: 'rgba(255, 255, 255, 0)',
	strokeUniform: true,
	resource: {},
	link: {
		enabled: false,
		type: 'resource',
		state: 'new',
		dashboard: {},
	},
	tooltip: {
		enabled: true,
		type: 'resource',
		template: '<div>{{message.name}}</div>',
	},
	animation: {
		type: 'none',
		loop: true,
		autoplay: true,
		delay: 100,
		duration: 1000,
	},
	userProperty: {},
	trigger: {
		enabled: false,
		type: 'alarm',
		script: 'return message.value > 0;',
		effect: 'style',
	},
};


class App extends Component {

    state = {
		selectedItem: null,
		zoomRatio: 1,
		preview: false,
		loading: false,
		progress: 0,
		animations: [],
		styles: [],
		dataSources: [],
		editing: false,
		descriptors: {},
		objects: undefined,
    };
    canvasHandlers = {
        onAdd: target => {
			const { editing } = this.state;
			this.forceUpdate();
			if (!editing) {
				this.changeEditing(true);
			}
			if (target.type === 'activeSelection') {
				this.canvasHandlers.onSelect(null);
				return;
			}
			this.canvasRef.handler.select(target);
        },
        onAddItem: (item, centered) => {
            const id = v4();
            const option = Object.assign({}, item.option, {id});
            this.canvasRef.handler.add(option, centered);
        }
    }
    changeEditing = editing => {
		this.setState({
			editing,
		});
	};
    componentDidMount(){
        console.log('djfklsds', this.canvasRef);
    }
    render() {
        const { onAdd } = this.canvasHandlers;
        
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
                                        <Tabs defaultActiveKey="myImage" className="tab-images">
                                            <Tab eventKey="myImage" title="My Images">
                                                <div className="list-images">
                                                    <div 
                                                        className="item-image"
                                                        onClick={()=>{this.canvasHandlers.onAddItem(
                                                            {
                                                                "name": "Image",
                                                                "description": "",
                                                                "type": "image",
                                                                "icon": {
                                                                    "prefix": "fas",
                                                                    "name": "image"
                                                                },
                                                                "option": {
                                                                    "type": "image",
                                                                    "name": "New image",
                                                                    "src": "https://cdn.corjl.com/designer/thumbnails/5bf97bdcaaa2e.svg"
                                                                }
                                                            }
                                                        )}}
                                                    >
                                                        <img alt="image" src="https://cdn.corjl.com/designer/thumbnails/5bf97bdcaaa2e.svg" />
                                                        <i>HWSLZCvaKQhslRKDMlS75afH1mpmENnzpfQBjzBR</i>
                                                    </div>
                                                    <div 
                                                        className="item-image"
                                                        onClick={()=>{this.canvasHandlers.onAddItem(
                                                            {
                                                                "name": "Image",
                                                                "description": "",
                                                                "type": "image",
                                                                "icon": {
                                                                    "prefix": "fas",
                                                                    "name": "image"
                                                                },
                                                                "option": {
                                                                    "type": "image",
                                                                    "name": "New image",
                                                                    "src": "https://cdn.corjl.com/designer/thumbnails/5bf97bdcf423d.svg"
                                                                }
                                                            }
                                                        )}}
                                                    >
                                                        <img alt="image" src="https://cdn.corjl.com/designer/thumbnails/5bf97bdcf423d.svg" />
                                                        <i>BirthdayCakePinkSwirl-01</i>
                                                    </div>
                                                    <div className="item-image">
                                                        <img alt="image" src="https://cdn.corjl.com/designer/thumbnails/5bf97bdd0fcf2.svg" />
                                                        <i>BirthdayCakeBanner-01</i>
                                                    </div>
                                                    <div className="item-image">
                                                        <img alt="image" src="https://cdn.corjl.com/designer/thumbnails/5caf83b80602f.png" />
                                                        <i>background</i>
                                                    </div>
                                                    <div className="item-image">
                                                        <img alt="image" src="https://cdn.corjl.com/designer/thumbnails/5bce2f8ac987e.jpeg" />
                                                        <i>Sample Little Girl</i>
                                                    </div>
                                                </div>
                                                <Pagination className="pagination-image justify-content-end">
                                                    <Pagination.Item><i className="fad fa-step-backward"></i></Pagination.Item>
                                                    <Pagination.Item><i className="fad fa-chevron-double-left"></i></Pagination.Item>
                                                    <Pagination.Item>{1}</Pagination.Item>
                                                    <Pagination.Ellipsis />
                                                    <Pagination.Item>{4}</Pagination.Item>
                                                    <Pagination.Item active>{5}</Pagination.Item>
                                                    <Pagination.Item><i className="fad fa-chevron-double-right"></i></Pagination.Item>
                                                    <Pagination.Item><i className="fad fa-step-forward"></i></Pagination.Item>
                                                </Pagination>
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
                                        <div className="artboard-item position-relative" ref = {c => {this.container = c;}}>
                                            <Canvas 
                                                ref={c => {this.canvasRef = c;}}
                                                minZoom={30}
                                                defaultOption={defaultOption}
                                                propertiesToInclude={propertiesToInclude}
                                                onAdd={onAdd}
                                                width={600}
                                                height={800}
                                            >

                                            </Canvas>
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

export default connect(mapState, mapDispatch)(hot(module)(App));

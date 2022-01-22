import React, {useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import jwt_decode from "jwt-decode";
import CreateFeedBackModl from './CreateFeedBack';
import {fetchPaymentOne} from "../../http/deviceAPI";
import { Col, Card, Input, Alert, message, Menu, Space, Row
    //    Button, Space, Image, Select, Rate
    } from 'antd';

const CreateOrders = ({show, onHide}) => {
    const [orders, setOrders] = useState([])
    const [feedback, setFeedBack] = useState(false)

    useEffect(() => {
        let idd = jwt_decode(localStorage.getItem('token'))
        fetchPaymentOne(idd.id).then(data => setOrders(data))
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size="lg"
        >
            <Modal.Header style={{background: "#292929", borderColor: "#292929"}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Мои активные заказы</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                            {/* {orders.length > 1 && */}
                            <Row>
                                    <Row md={6}>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF', marginRight: 100}}>ИМЯ</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF', marginRight: 100}}>УСЛУГИ</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF', marginRight: 100}}>ЦЕНА</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF', marginRight: 100}}>ИСПОЛНИТЕЛЬ</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>ВЫПОЛНЕНО</h4>
                                    </Row>
                                    {orders.map(order => 
                                    <Row key={order.id} md={6}>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF', marginRight: 30}}>{order.name}</h4>
                                        <Col style={{width: 200}}><h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF', marginRight: 40}}>{order.card}</h4></Col>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF', marginRight: 100}}>РУБ: {order.price}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF', marginRight: 130}}>{order.customer}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{order.done}</h4>
                                    </Row>
                                            )}
                            </Row>
                            {/* // } */}
                        </Card>
                        </Col>
                </Form>
                    <CreateFeedBackModl show={feedback} onHide={() => setFeedBack(false)}/>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 200, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setFeedBack(true)}>Где моя услуга?</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateOrders;
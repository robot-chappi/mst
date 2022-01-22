import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {useMediaQuery} from 'react-responsive'
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";
import {fetchPayments, deletePayment} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import { Col, Card, Input, Alert, message, Menu, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';

const CreateDeleteOrder = observer(({show, onHide}) => {
    const [payments, setPayments] = useState([])
    const [deleteP, setDeleteP] = useState()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    useEffect(() => {
        fetchPayments().then(data => setPayments(data))
    }, [])

    const paymentDone = () => {
        deletePayment(deleteP)
        message.success('Success!')
        onHide()
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header style={{background: "#292929", borderColor: "#292929"}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Удалить платеж</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                            <Col>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Платеж ID *</h4>
                                <Input type='number' style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={deleteP} onChange={e => setDeleteP(e.target.value)} placeholder="Введите ID платежа" />
                            </Col>
                            <Row>
                                {isDesktopOrLaptop &&
                                <Row md={6}>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 11, paddingBottom: 10, color: '#FFFFFF', marginRight: 5}}>ID</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 11, paddingBottom: 10, color: '#FFFFFF', marginRight: 15}}>СУММА</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 11, paddingBottom: 10, color: '#FFFFFF', marginRight: 35}}>ИСПОЛНИТЕЛЬ</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 11, paddingBottom: 10, color: '#FFFFFF', marginRight: 5}}>ВЫПОЛНЕНО</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 11, paddingBottom: 10, color: '#FFFFFF'}}>USERID</h4>
                                    </Row>
                                }
                                {isMobile &&
                                <Space>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF', marginRight: 35}}>ID</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF', marginRight: 25}}>СУММА</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF', marginRight: 26}}>ИСПОЛНИТЕЛЬ</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF', marginRight: 5}}>ВЫПОЛНЕНО</h4>
                                        
                                    </Space>
                                }
                                {isDesktopOrLaptop &&
                                <Col>
                                    {payments.map(pay => 
                                    <Space key={pay.id}>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 70}}>{pay.id}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 50}}>{pay.price}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 70}}>{pay.customer}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 70}}>{pay.done}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF'}}>{pay.userId}</h4>
                                    </Space>
                                            )}
                                </Col>
                                }
                                {isMobile &&
                                <Col>
                                    {payments.map(pay => 
                                    <Space key={pay.id}>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 50}}>{pay.id}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 40}}>{pay.price}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 70}}>{pay.customer}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 70}}>{pay.done}</h4>
                                    </Space>
                                            )}
                                </Col>
                                }
                            </Row>
                        </Card>
                    </Col>
                </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={paymentDone}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDeleteOrder;
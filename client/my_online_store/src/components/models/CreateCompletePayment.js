import React, {useContext, useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive'
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";
import jwt_decode from "jwt-decode";
import {fetchPayments, changePaymentStatusDone} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import { Col, Card, Input, Alert, message, Menu, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';

const CreateComplateOrder = observer(({show, onHide}) => {
    const [payments, setPayments] = useState([])
    const [complete, setComplete] = useState()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    useEffect(() => {
        fetchPayments().then(data => setPayments(data))
    }, [])

    const paymentDone = () => {
        let idd = jwt_decode(localStorage.getItem('token'))
        const formData = new FormData()
        formData.append('id', complete)
        formData.append('userId', idd.id)
        changePaymentStatusDone(formData)
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
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Завершить заказ</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                            <Col>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Платеж ID *</h4>
                                <Input type='number' style={{background: '#292929', borderRadius: 15, height: 50, fontWeight: 300, fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: '#FFFFFF'}} value={complete} onChange={e => setComplete(e.target.value)} placeholder="Введи ID платежа" />
                            </Col>
                            <Row>
                                {isDesktopOrLaptop &&
                                <Space >
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 11, paddingBottom: 10, color: '#FFFFFF', marginRight: 20}}>ID</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 11, paddingBottom: 10, color: '#FFFFFF', marginRight: 20}}>ПОЧТА</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 11, paddingBottom: 10, color: '#FFFFFF', marginRight: 20}}>ВК</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 11, paddingBottom: 10, color: '#FFFFFF', marginRight: 20}}>ВЫПОЛНЕНО</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 11, paddingBottom: 10, color: '#FFFFFF', marginRight: 20}}>USER_ID</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 11, paddingBottom: 10, color: '#FFFFFF'}}>УСЛУГИ</h4>
                                        
                                    </Space>
                                }
                                {isMobile &&
                                <Space>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF', marginRight: 35}}>ИСПОЛНИТЕЛЬ</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF', marginRight: 30}}>ПОЧТА</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF', marginRight: 20}}>ЗАКАЗ</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF', marginRight: 5}}>ВЫПОЛНЕНО</h4>
                                        
                                    </Space>
                                }
                                {isDesktopOrLaptop &&
                                <Col>
                                    {payments.map(pay => 
                                    <Space key={pay.id}>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 5}}>{pay.id}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 5}}>{pay.email}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 5}}>{pay.vk}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 5}}>{pay.done}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 5}}>{pay.userId}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', width: 80}}>{pay.card}</h4>
                                    </Space>
                                            )}
                                </Col>
                                }
                                {isMobile &&
                                <Col>
                                    {payments.map(pay => 
                                    <Space key={pay.id} onClick={() => setComplete(pay.id)}>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 0}}>{pay.customer}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 0}}>{pay.email}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 0, width: 60}}>{pay.card}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 5, color: '#FFFFFF', marginRight: 0}}>{pay.done}</h4>
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
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={paymentDone}>Завершить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateComplateOrder;
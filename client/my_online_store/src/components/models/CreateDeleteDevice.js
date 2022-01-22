import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";
import {deleteDevices, fetchDevices} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import { Col, Card, Input, Alert, message, Menu, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';

const CreateDeleteDevice = observer(({show, onHide}) => {
    const [allDevice, setAllDevice] = useState([])
    const [deleteB, setDeleteB] = useState()

    useEffect(() => {
        fetchDevices(null, null, null, null).then(data => {
            setAllDevice(data.rows)
        })
    }, [])

    const deleteItem = () => {
        deleteDevices(deleteB)
        message.success('Successfully deleted!')
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
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Удалить услугу</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                                <Col style={{marginBottom: 20}}>
                                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Удалить это</h4>
                                </Col>
                                <Col style={{marginLeft: 10}}>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>ID услуги *</h4>
                                <Input type='number' style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={deleteB} onChange={e => setDeleteB(e.target.value)} placeholder="Введите ID услуги" />
                            <Row>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Выбрать услугу: </h4>
                            </Row>
                            <Row>
                                    <Row md={6}>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>ID</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>ИМЯ</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF', paddingRight: 20}}>ЦЕНА</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>РЕЙТИНГ</h4>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>ТИП_ID</h4>

                                    </Row>
                                    {allDevice.map(device => 
                                    <Row key={device.id} md={6} onClick={() => setDeleteB(device.id)}>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{device.id}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{device.name}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF', paddingRight: 20}}>{device.price}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{device.rating}</h4>
                                        <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{device.typeId}</h4>
                                       
                                        
                                    </Row>
                                            )}
                            </Row>
                            <Row>
                                <h4 style={{paddingTop: 15, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>{`Выбран id услуги: ${deleteB}`}</h4>
                            </Row>
                        </Col>
                    </Card>
                </Col>
                </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={deleteItem}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDeleteDevice;
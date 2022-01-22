import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";
import {fetchTypes, deleteTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import { Col, Card, Input, Alert, message, Menu, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';

const CreateDeleteTypeDevice = observer(({show, onHide}) => {
    const {devices} = useContext(Context)
    const [deleteT, setDeleteT] = useState(0)

    useEffect(() => {
        fetchTypes().then(data => devices.setTypes(data))
    }, [])

    const deleteItem = () => {
        deleteTypes(deleteT)
        alert('Successfully deleted!')
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
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Удалить тип</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                                <Col>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Тип услуги *</h4>
                                <Dropdown className="mt-2">
                                <Dropdown.Toggle style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, width: '100%', background: '#0072CE', borderColor: '#0072CE'}}>{`Выбери тип: ${deleteT}`}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {devices.types.map(type =>
                                        <Dropdown.Item
                                        style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                            onClick={() => setDeleteT(type.id)}
                                            key={type.id}
                                        >
                                            {type.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
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

export default CreateDeleteTypeDevice;
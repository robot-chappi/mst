import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown} from "react-bootstrap";
import {updateRoleUser} from "../../http/deviceAPI";
import { Col, Card, Input, Alert, message, Menu, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';

const CreateCustomers = ({show, onHide}) => {
    const [id, setId] = useState('')
    const [role, setRole] = useState()


    const addType = () => {
        const formData = new FormData()
        formData.append('id', id)
        formData.append('role', role)
        updateRoleUser(formData).then(data => {
            setRole()
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header style={{background: "#292929", borderColor: "#292929"}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Добавить исполнителя</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>

                        <Col style={{marginLeft: 10}}>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Пользователя ID *</h4>
                            <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={id} onChange={e => setId(e.target.value)} placeholder="Введи id пользователя" />
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Роль пользователя *</h4>
                            <Dropdown>
                            <Dropdown.Toggle style={{ fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, background: '#0072CE', borderColor: '#0072CE'}}>{`Выбери роль`}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setRole(1)}
                                    >
                                        {'Исполнитель'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setRole(0)}
                                    >
                                        {'Заказчик'}
                                    </Dropdown.Item>
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
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={addType}>Изменить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCustomers;
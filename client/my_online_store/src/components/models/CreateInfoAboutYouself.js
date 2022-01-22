import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row,  Spinner} from "react-bootstrap";
import {Context} from "../../index";
import {updateStatus, fetchUserData, fetchOneUser} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import { Col, Card, Input, Alert, message, Menu
    //    Button, Space, Image, Select, Rate
    } from 'antd';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('5');

const CreateAboutYouself = observer(({show, onHide}) => {
    const [reason, setReason] = useState('')
    const [messageFromUser, setMessageFromUser] = useState('')
    const [visibleAlert, setVisibleAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(true)
    const [ex, setEx] = useState(0)

    const confirm = (name) => {
        if (name === 'Anonim') {
            setEx(0)
            setAlertText("You will not be able to send the email \n\nAdd a data about yourself first")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        } else {
        setEx(1)
        setAlertText("You have confirmed your actions - you can send")
        setAlertType('success')
        setVisibleAlert(true)
        setTimeout(() => {setVisibleAlert(false)}, 4000)
        
    }
    }

    const addUserData = async () => {
        if (ex === 1) {
            let idd = jwt_decode(localStorage.getItem('token'))
            
            const formData = new FormData()
            formData.append('userId', idd.id)
            formData.append('aboutmyself', messageFromUser)
            updateStatus(formData).then(data => onHide())
            message.success('The operation was successful! \n You will be contacted by mail support soon')  
        } else {
            setAlertText("Click on 'confirm' first, and then send the data!")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }     
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header style={{background: "#292929", borderColor: "#292929"}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Задайте статус "о себе"</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                            <Col>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Ваши данные</h4>
                            </Col>
                        <Col style={{marginLeft: 5}}>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Пишите тут (256 символов) *</h4>
                            <Input.TextArea style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, color: 'black'}} value={messageFromUser} onChange={e => setMessageFromUser(e.target.value)} placeholder="Опишите себя и свой опыт" />
                    </Col>
                    </Card>
                    {visibleAlert&& 
                        <Alert message={alertText} type={alertType} />
                        }
                    <Col>
                        <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => confirm(userData.name)}>Подтвердить</Button>
                    </Col>
                    </Col>
                </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={addUserData}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateAboutYouself;
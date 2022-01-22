import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row,  Spinner} from "react-bootstrap";
import {Context} from "../../index";
import {sendEmailUser, fetchUserData, fetchOneUser} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import { Col, Card, Input, Alert, message, Menu
    //    Button, Space, Image, Select, Rate
    } from 'antd';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('5');

const CreateFeedBackModl = observer(({show, onHide}) => {
    const [name, setName] = useState('')
    const [reason, setReason] = useState('')
    const [messageFromUser, setMessageFromUser] = useState('')
    const [user, setUser] = useState('')
    const [visibleAlert, setVisibleAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(true)
    const [ex, setEx] = useState(0)

    useEffect(() => {
        let idd = jwt_decode(localStorage.getItem('token'))
        fetchOneUser(idd.id).then(data => setUser(data)) 
        fetchUserData(idd.id).then(data => setUserData(data)).finally(() => setLoading(false))
    }, [])

    const account = 
        {name: 'Anonim', email: 'None', img: 'bf13872b-7632-4822-b2c9-20a5022bedf2.jpg', place: 'None', birthday: 'None', gender: 'None'}

    const confirm = (name) => {
        if (name === 'Anonim') {
            setEx(0)
            setAlertText("Вы не сможете это отправить по электронной почте \n Сначла добавьте данные о себе")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        } else {
        setEx(1)
        setName(userData.name)
        setAlertText("Ты подтвердил свои действия - можешь отправлять")
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
            formData.append('name', name)
            formData.append('email', idd.email)
            formData.append('reason', reason)
            formData.append('message', messageFromUser)
            sendEmailUser(formData).then(data => onHide())
            message.success('Операция прошла успешно! \n В ближайшее время с вами свяжется служба поддержки по почте')  
        } else {
            setAlertText('Сначала нажмите кнопку "подтвердить", а затем добавляйте данные')
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }     
    }

    if (userData === null) {
        setUserData(account)
        console.log(account)
    }

    if (loading) {
        return <Spinner animation={'grow'}/>
      } 

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header style={{background: "#292929", borderColor: "#292929"}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Написать в тех.поддержку</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                            <Col>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Данные в письме</h4>
                            </Col>
                        <Col style={{marginLeft: 5}}>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Твое имя: {userData.name}</h4>
                            <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твоя почта: {userData.email}</h4>     
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle style={{background: '#0072CE', borderColor: '#0072CE', fontWeight: 700, fontFamily: 'IBM Plex Mono',}}>{`Тип проблемы или вопроса: ${reason}`}</Dropdown.Toggle>
                        <Dropdown.Menu>
                                <Dropdown.Item
                                style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', color: 'black'}}
                                onClick={() => setReason('Покупка услуги')}
                                >
                                    {'Покупка услуги'}
                                </Dropdown.Item>
                                <Dropdown.Item
                                style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', color: 'black'}}
                                onClick={() => setReason('Сроки выполнения')}
                                >
                                    {'Сроки выполнения'}
                                </Dropdown.Item>
                                <Dropdown.Item
                                style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', color: 'black'}}
                                onClick={() => setReason('Качество')}
                                >
                                    {'Качество'}
                                </Dropdown.Item>
                                <Dropdown.Item
                                style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', color: 'black'}}
                                onClick={() => setReason('Отказ от услуги')}
                                >
                                    {'Отказ от услуги'}
                                </Dropdown.Item>
                                <Dropdown.Item
                                style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', color: 'black'}}
                                onClick={() => setReason('Не нравится результат')}
                                >
                                    {'Не нравится результат'}
                                </Dropdown.Item>
                                <Dropdown.Item
                                style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', color: 'black'}}
                                onClick={() => setReason('Другие проблемы')}
                                >
                                    {'Другие проблемы'}
                                </Dropdown.Item>
                                <Dropdown.Item
                                style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', color: 'black'}}
                                onClick={() => setReason('Деловой вопрос')}
                                >
                                    {'Деловой вопрос'}
                                </Dropdown.Item>
                                <Dropdown.Item
                                style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', color: 'black'}}
                                onClick={() => setReason('Другие вопросы')}
                                >
                                    {'Другие вопросы'}
                                </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Пиши тут *</h4>
                    <Input.TextArea style={{ borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, color: 'black'}} value={messageFromUser} onChange={e => setMessageFromUser(e.target.value)} placeholder="Опиши свою проблему или вопрос" />
                    </Col>
                    </Card>
                    {visibleAlert&& 
                        <Alert message={alertText} type={alertType} />
                        }
                    <Col>
                        <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => confirm(userData.name)}>Подтвердить</Button>
                    </Col>
                    </Col>
                </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={addUserData}>Отправить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateFeedBackModl;
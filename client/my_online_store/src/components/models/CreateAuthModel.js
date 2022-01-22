import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form, Spinner} from "react-bootstrap";
import {sendEmailCodeUser} from "../../http/deviceAPI";
import { registration } from '../../http/userAPI';
import { useHistory } from "react-router-dom";
import { Context } from "../../index";
import {observer} from "mobx-react-lite";
import {SHOP_ROUTE} from "../../utils/consts";
import { Col, Card, Input, Alert, message, Space, Row
    //    Button, Space, Image, Select, Rate
    } from 'antd';


const CreateAuthModl = observer(({show, onHide}) => {
    const [code, setCode] = useState()
    const [hideCode, setHideCode] = useState()
    const {user} = useContext(Context)
    const [visibleAlert, setVisibleAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')
    const history = useHistory()
    const [ex, setEx] = useState(0)
    let emailusers = localStorage.getItem('emailUser')
    let paswordusers = localStorage.getItem('passwordUser')

    const confirm = () => {
    setHideCode(Math.floor(Math.random() * 999999999))
    setEx(1)
    console.log(hideCode)
    console.log(emailusers)
    }


    const sendCodeEmail = async () => {
        if (ex === 1) { 
            console.log(hideCode)
            const formData = new FormData()
            formData.append('email', emailusers)
            formData.append('code', hideCode)
            sendEmailCodeUser(formData)
            setAlertText("Код был отправлен! Проверь свою почту и напиши код ниже!")
            setAlertType('success')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        } else {
            setAlertText('Сначала нажми на кнопку "подтвердить", а затем уже отправится код')
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }     
    }

    const reg = async () => {
        if (code == hideCode) {
            await registration(emailusers, paswordusers)
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } else {
            console.log(code)
            console.log(hideCode)
            setAlertText("Опппс... Твой код различается с тем, который был отправлен на почту... Попробуй снова!")
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
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Подтверди свою почту</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                    <h3 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Что нужно сделать?</h3>
                    <h3 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, paddingBottom: 5, color: '#FFFFFF'}}>{'1. Нажать на кнопку "подтвердить" чтобы продолжить.'}</h3>
                    <h3 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, paddingBottom: 5, color: '#FFFFFF'}}>{'2. Нажать на кнопку "отправить код" чтобы получить код на почту'}</h3> 
                    <h3 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, paddingBottom: 5, color: '#FFFFFF'}}>{'3. Скопировать код и ввести его ниже.'}</h3>
                    <h3 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, paddingBottom: 5, color: '#FFFFFF'}}>{'4. Нажать на кнопку "зарегистрироваться".'}</h3> 
                    </Card>
                    {visibleAlert&& 
                        <Alert message={alertText} type={alertType} />
                        }
                    </Col>
                    <Col style={{marginTop: 20}}>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Напиши свой код тут</h4>
                                <Input style={{borderRadius: 15, borderWidth: 2, height: 50, fontWeight: 300, fontSize: 14, marginBottom: 10, marginTop: 7, fontWeight: 600, color: 'black'}} value={code} onChange={e => setCode(e.target.value)} placeholder="Пиши :)" />
                                <Space>
                                    <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"  onClick={confirm}>Подтвердить</Button>
                                    <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"  onClick={sendCodeEmail}>Отправить код</Button>
                                </Space>
                                
                    </Col>
                    </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                    <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
                    <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 175, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={reg}>Зарегистрироваться</Button>

            </Modal.Footer>
        </Modal>
    );
});

export default CreateAuthModl;
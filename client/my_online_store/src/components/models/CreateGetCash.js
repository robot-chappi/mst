import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row,  Spinner} from "react-bootstrap";
import {Context} from "../../index";
import {getCashPersonalCode, fetchUserData, fetchOneUser} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import { Col, Card, Input, Alert, message, Menu
    //    Button, Space, Image, Select, Rate
    } from 'antd';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('5');

const CreateCouponenCash = observer(({show, onHide}) => {
    const [visibleAlert, setVisibleAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(true)
    const [ex, setEx] = useState(0)

    useEffect(() => {
        let idd = jwt_decode(localStorage.getItem('token'))
        fetchUserData(idd.id).then(data => setUserData(data)).finally(() => setLoading(false))
    }, [])

    const account = 
        {name: 'Anonim', email: 'None', img: 'bf13872b-7632-4822-b2c9-20a5022bedf2.jpg', place: 'None', birthday: 'None', gender: 'None'}

    const confirm = (name) => {
        if (name === 'Anonim') {
            setEx(0)
            setAlertText("Ты не можешь активировать код! \n\nДобавь сначала данные о себе")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        } else {
        setEx(1)
        setAlertText("Ты подтвердил свои действия - можешь выводить")
        setAlertType('success')
        setVisibleAlert(true)
        setTimeout(() => {setVisibleAlert(false)}, 4000)
        
    }
    }


    const addUserData = async () => {
        if (ex === 1) {
            let idd = jwt_decode(localStorage.getItem('token'))
            
            const formData = new FormData()
            formData.append('id', idd.id)
            formData.append('name', userData.personalCode)
            getCashPersonalCode(formData).then(data => onHide())
            message.success('Операция успешна!')  
        } else {
            setAlertText("Нажми на 'подтвердить' сначала, а затем выводи!")
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
                    <h1 style={{paddingTop: 10, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 26, color: '#FFFFFF'}}>Вывод средств с активаций</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>

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
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={addUserData}>Вывести</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateCouponenCash;
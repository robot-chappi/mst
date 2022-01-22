import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";
import {fetchUserData, updatePromoCode, createPayment, getCustomers, takeMoney} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import { Col, Card, Input, Alert, message, Menu, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';

const CreateOperationPayment = observer(({show, onHide, card, price, name}) => {
    const {devices} = useContext(Context)
    const [deleteB, setDeleteB] = useState(0)
    const [finallyPrice, setFinallyPrice] = useState()
    const [userData, setUserData] = useState([])
    const [collection, setCollection] = useState([])
    const [customer, setCustomer] = useState('')
    

    useEffect(() => {
        let idd = jwt_decode(localStorage.getItem('token'))
        fetchUserData(idd.id).then(data => setUserData(data))
        getCustomers().then(data => setCollection(data))
    }, [])

    const payAll = () => {
        let idd = jwt_decode(localStorage.getItem('token'))

        if (customer != '') {
            updatePromoCode(name)
            const formData = new FormData()
            formData.append('name', userData.name)
            formData.append('email', userData.email)
            formData.append('card', card)
            formData.append('price', price.toFixed(0))
            formData.append('customer', customer)
            formData.append('done', 0)
            formData.append('vk', userData.vk)
            formData.append('userId', idd.id)
            createPayment(formData)
            message.success('Вы оплатили свой заказ! Вы можете видеть его в профиле - скоро с вами свяжутся за подробностями ')
            onHide()
        } else {
            message.error('Выбери себе исполнителя!')
        }
    }

    const payNone = () => {
        message.error('Оформите свой профиль для начала или зарегистрируйтесь!')
    }


    if (userData == null) {
        
        return (
            <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header style={{background: "#292929", borderColor: "#292929"}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Оплата</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                                <Col>
                                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF', paddingBottom: 10}}>Информация о заказе</h4> 
                                </Col>
                                <Col style={{marginLeft: 15, marginTop: 15, paddingBottom: 10}}>

                                        <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Твоя покупка:</h4>
                                        <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF', paddingLeft: 10}}>{card}</h4>

                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Имя: </h4>
                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF', paddingLeft: 10}}>Нету</h4>

                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Почта:</h4>
                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF', paddingLeft: 10}}>Нету</h4>


                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Вк-профиль:</h4>
                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF', paddingLeft: 10}}>Нету</h4>

                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Твой счет:</h4>
                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF', paddingLeft: 10}}>Нету</h4>

                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Какого исполнителя ты бы предпочел?</h4>
                                    <Dropdown >
                                        <Dropdown.Toggle style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, width: '100%', background: '#0072CE', borderColor: '#0072CE'}}>{customer|| "Выбери исполнителя"}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {collection.map(type =>
                                                <Dropdown.Item
                                                style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                                    onClick={() => setCustomer(type.name)}
                                                    key={type.id}
                                                >
                                                    {type.name}
                                                </Dropdown.Item>
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>

                            </Col>
                            <Col>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"  onClick={onHide}>Изменить</Button>
                            </Col>
                            </Card>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15}}>
                                <h4 style={{fontWeight: 600, fontFamily: 'Poppins', fontSize: 25, color: '#FFFFFF'}}>В сумме: {price} РУБ</h4>
                            </Card>
                        </Col>
                    </Col>
                </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                    <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"  onClick={onHide}>Закрыть</Button>
                    <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"  onClick={payNone}>Оплатить</Button>
            </Modal.Footer>
            
        </Modal>
        )
    } else { 
        return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header style={{background: "#292929", borderColor: "#292929"}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Оплата</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                                <Col>
                                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF', paddingBottom: 10}}>Информация об заказе</h4> 
                                </Col>
                                <Col style={{marginLeft: 15, marginTop: 15, paddingBottom: 10}}>

                                        <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Твоя покупка:</h4>
                                        <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF', paddingLeft: 10}}>{card}</h4>

                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Имя: </h4>
                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF', paddingLeft: 10}}>{userData.name}</h4>

                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Почта:</h4>
                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF', paddingLeft: 10}}>{userData.email}</h4>


                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Вк-профиль:</h4>
                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF', paddingLeft: 10}}>{userData.vk}</h4>

                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Твой счет:</h4>
                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF', paddingLeft: 10}}>{userData.money} РУБ</h4>

                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}>Какого исполнителя ты бы предпочел?</h4>
                                    <Dropdown >
                                        <Dropdown.Toggle style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, width: '100%', background: '#0072CE', borderColor: '#0072CE'}}>{customer|| "Выбери исполнителя"}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {collection.map(type =>
                                                <Dropdown.Item
                                                style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                                    onClick={() => setCustomer(type.name)}
                                                    key={type.id}
                                                >
                                                    {type.name}
                                                </Dropdown.Item>
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>

                            </Col>
                            <Col>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"  onClick={onHide}>Изменить</Button>
                            </Col>
                            </Card>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15}}>
                                <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 25, color: '#FFFFFF'}}>В сумме: {price} РУБ</h4>
                            </Card>
                        </Col>
                    </Col>
                </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                    <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"  onClick={onHide}>Закрыть</Button>
                    <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"  onClick={payAll}>Оплатить</Button>
            </Modal.Footer>
            
        </Modal>
    )}
});

export default CreateOperationPayment;
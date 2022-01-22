import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form, Dropdown} from "react-bootstrap";
import {createReviews, fetchUserData, updateRatingCustomer, fetchReviews} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import { Col, Card, Input, Alert, message, Menu
    //    Button, Space, Image, Select, Rate
    } from 'antd';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('5');

const CreateOneReview = observer(({show, onHide, customerId}) => {
    const [text, setText] = useState('')
    const [user, setUser] = useState([])
    const [ratingDB, setRatingDB] = useState([])
    const [rating, setRating] = useState()
    const [commentsAll, setComment] = useState([])
    const [visibleAlert, setVisibleAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')
    const [ex, setEx] = useState(0)

    useEffect(() => {
        let idd = jwt_decode(localStorage.getItem('token'))
        fetchUserData(idd.id).then(data => setUser(data)) 
        fetchReviews(customerId).then(data => setComment(data)) 
    }, [])

    const confirm = () => {
        if (user.name === 'Anonim') {
            setEx(0)
            alert("Ты не сможешь опубликовать отзыв! \n\nСначала зарегистрируйся или добавь информацио о себе в профиле!")
        } else {
        let ratingCount = []
        for (const f of commentsAll) {
            ratingCount.push(f.rating)
        }
        setRatingDB(ratingCount)
        setEx(1)
        
        alert('Ты подтвердил свои действия - ты можешь опубликовать отзыв')
    }
    }

    const addUserData = async () => {
        if (ex === 1) {
            let ratingFinally = Math.trunc(ratingDB.reduce((sum, el) => sum + el, 0) / ratingDB.length)
            let idd = jwt_decode(localStorage.getItem('token'))
            const formData = new FormData()
            const formDataRating = new FormData()
            formData.append('name', user.name)
            formData.append('text', text)
            formData.append('rating', rating)
            formData.append('customerId', customerId)
            formData.append('userId', idd.id)
            formData.append('img', user.img)
            message.success("Отзыв добавлен!")
            formDataRating.append('rating', ratingFinally)
            formDataRating.append('id', customerId)
            createReviews(formData)
            updateRatingCustomer(formDataRating).then(data => onHide())
        } else {
            setAlertText("Нажми на 'подтвердить' сначала, а затем добавляйте отзыв!")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }     
    }

    const account = 
        {name: 'Anonim', email: 'None', img: 'bf13872b-7632-4822-b2c9-20a5022bedf2.jpg', place: 'None', birthday: 'None', gender: 'None'}


    if(user === null) {  
        setUser(account)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header style={{background: "#292929", borderColor: "#292929"}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Напишите отзыв этому исполнителю</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твой отзыв *</h4>
                            <Input.TextArea style={{borderRadius: 15, height: 50, fontWeight: 300, fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 700, color: 'black', fontFamily: 'IBM Plex Mono'}} value={text} onChange={e => setText(e.target.value)} placeholder="Как тебе этот исполнитель?" />
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Оценка *</h4>
                            <Dropdown  className="mt-2 mb-2">
                            <Dropdown.Toggle style={{background: '#0072CE', borderColor: '#0072CE', fontFamily: 'IBM Plex Mono', fontWeight: 700}}>{`Выбери оценку: ${rating}`}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                    <Dropdown.Item
                                    onClick={() => setRating(1)}
                                    >
                                        {1}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(2)}
                                    >
                                        {2}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(3)}
                                    >
                                        {3}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(4)}
                                    >
                                        {4}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(5)}
                                    >
                                        {5}
                                    </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card>
                    {visibleAlert&& 
                        <Alert message={alertText} type={alertType} />
                        }
                    </Col>
                    </Form>
                    </Col>
                    <Col>
                        <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={confirm}>Подтвердить</Button>
                    </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={addUserData}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateOneReview;
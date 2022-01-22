import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Spinner} from "react-bootstrap";
import {Context} from "../../index";
import {updateUserInfo, fetchUserData, fetchOneUser, updateUserBackground} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import { Col, Card, Input, Alert, message, Menu
    //    Button, Space, Image, Select, Rate
    } from 'antd';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('5');

const CreateUpdateUserInfoModl = observer(({show, onHide}) => {
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [vk, setVk] = useState('')
    const [birthday, setBirthday] = useState('')
    const [genderUser, setGender] = useState('')
    const [userBackgroundImg, setUserBackgroundImg] = useState('')
    const [user, setUser] = useState('')
    const [visibleAlert, setVisibleAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')
    const [passwordHash, setPasswordHash] = useState('')
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
        const keys = Object.keys(user);

        keys.forEach(key => {
        setPasswordHash(`${user["password"]}`)
        });
        if (name === 'Anonim') {
            setEx(0)
            setAlertText("You don't have the data to change them! \n\nAdd them first")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        } else {
        setEx(1)
        setAlertText("Attention! When updating data, you need to specify the old data too! If you have filled in all the gaps, you can update your data, but if not, you will lose data! \n\nTo avoid updating your data, just click Close \n\nYou have confirmed your actions - you can update")
            setAlertType('success')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 10000)
    }
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addUserData = async () => {
        if (ex === 1) {
            let idd = jwt_decode(localStorage.getItem('token'))
            const keys = Object.keys(user);
            keys.forEach(key => {
                setPasswordHash(`${user["password"]}`)
            });
            console.log(passwordHash)

            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', idd.email)
            formData.append('vk', vk)
            formData.append('img', file)
            formData.append('birthday', birthday)
            formData.append('gender', genderUser)
            formData.append('userId', idd.id)
            formData.append('password', passwordHash)
            updateUserInfo(formData).then(data => onHide())
            message.success('Операция прошла успешна! \n Обнови страницу...')  
        } else {
            setAlertText('Сначала нажмите кнопку "подтвердить", а затем добавляйте данные')
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }     
    }

    const addUserBackgroundFc = async () => {
        if (ex === 1) {
            let idd = jwt_decode(localStorage.getItem('token'))
            const keys = Object.keys(user);
            keys.forEach(key => {
                setPasswordHash(`${user["password"]}`)
            });
            console.log(passwordHash)

            const formData = new FormData()
            formData.append('img', userBackgroundImg)
            formData.append('userId', idd.id)
            message.success("Операция прошла успешна! \n Обнови страницу...")
            updateUserBackground(formData).then(data => onHide())
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
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Измени информацию о себе</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                            <Col>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Измени это</h4>
                            </Col>
                            <Col>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твое новое имя/ник *</h4>
                        <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={name} onChange={e => setName(e.target.value)} placeholder={`Твое имя: ${userData.name}`}/>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твой новый день рождения *</h4>
                        <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={birthday} onChange={e => setBirthday(e.target.value)} placeholder={`Твой день рождения: ${userData.birthday}`}/>  
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твоя ссылка на профиль вк *</h4>
                        <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={vk} onChange={e => setVk(e.target.value)} placeholder={`Ссылка на вк-профиль: ${userData.vk}`}/>  
                        
                        <Dropdown className="mt-2 mb-2">
                        <Col>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твой новый пол *</h4>
                        </Col>
                            <Dropdown.Toggle style={{borderColor: '#0072CE', background: '#0072CE', fontWeight: 700, fontFamily: 'IBM Plex Mono',}}>{`Изменить свой пол: на ${genderUser}`}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                    <Dropdown.Item
                                     style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setGender('Мужчина')}
                                    >
                                        {'Мужчина'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                     style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setGender('Женщина')}
                                    >
                                        {'Женщина'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                     style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setGender('Нету')}
                                    >
                                        {'Нету'}
                                    </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твоя новая аватарка *</h4>
                            <Form.Control
                            style={{color: '#FFFFFF', fontWeight: 700, fontFamily: 'IBM Plex Mono',}}
                                type="file"
                                onChange={selectFile}
                            />
                        </Col>
                        </Card>
                        {visibleAlert&& 
                        <Alert message={alertText} type={alertType} />
                        }
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Задний фон *</h4>
                        <Dropdown>
                            <Dropdown.Toggle style={{ fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, background: '#0072CE', borderColor: '#0072CE', marginBottom: 10}}>{`Выбери свой новый фон`}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('minecraftOne.jpg')}
                                    >
                                        {'Майнкрафт-Житель'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('minecraftTwo.jpg')}
                                    >
                                        {'Майнкрафт-Дом'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('minecraftFour.jpg')}
                                    >
                                        {'Майнкрафт-Пещера'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('animeOne.jpg')}
                                    >
                                        {'Аниме-ночь'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('animeTwo.jpg')}
                                    >
                                        {'Аниме-закат'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('cyberCity.jpg')}
                                    >
                                        {'Кибер-город'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('cyberGirl.jpg')}
                                    >
                                        {'Кибер-девушка'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('forest.jpg')}
                                    >
                                        {'Лес'}
                                    </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginTop: 20}} className="mt-2" onClick={addUserBackgroundFc}>Изменить фон</Button>
                    </Card>
                        </Col>
                    <Col>
                        <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => confirm(userData.name)}>Подтвердить</Button>
                    </Col>
                </Form>
            </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={addUserData}>Обновить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateUpdateUserInfoModl;
import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form, Dropdown} from "react-bootstrap";
import {Context} from "../../index";
import {addUserInfo, fetchUserData, fetchOneUser, addUserBackground} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import { Col, Card, Input, Alert, message, Menu
    //    Button, Space, Image, Select, Rate
    } from 'antd';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('5');

const CreateUserInfoModl = observer(({show, onHide}) => {
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [personalCode, setPersonalCode] = useState('')
    const [vk, setVk] = useState('')
    const [birthday, setBirthday] = useState('')
    const [genderUser, setGender] = useState('')
    const [userBackgroundImg, setUserBackgroundImg] = useState('')
    const [user, setUser] = useState('')
    const [visibleAlert, setVisibleAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')
    const [passwordHash, setPasswordHash] = useState('')
    const [ex, setEx] = useState(0)

    useEffect(() => {
        let idd = jwt_decode(localStorage.getItem('token'))
        fetchOneUser(idd.id).then(data => setUser(data)) 
    }, [])

    const confirm = () => {
        const keys = Object.keys(user);

        keys.forEach(key => {
        setPasswordHash(`${user["password"]}`)
        });
        var result = '';
        var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var max_position = words.length - 1;
        let i;
        for( i = 0; i < 10; ++i ) {
            const position = Math.floor ( Math.random() * max_position );
            result = result + words.substring(position, position + 1);
            
        }
        setPersonalCode(result)
        console.log(result)
        setEx(1)
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
            formData.append('vk', vk)
            formData.append('personalCode', personalCode)
            formData.append('email', idd.email)
            formData.append('img', file)
            formData.append('birthday', birthday)
            formData.append('gender', genderUser)
            formData.append('userId', idd.id)
            formData.append('password', passwordHash)
            message.success("???????? ???? ???????????????????? ???????????????????? ?? ???????????? ??????, ????????????, ???????????????? ???????????? ??????????????! \n ???????????????? ????????????????\n\???????? ???? ?????????????????????? ???????????????? ???????????????????? ??????????, ?????? ???? ?????????? ??????????????????! \ n\ ???? ???????????? ???????????? ???????????????? ????")
            addUserInfo(formData).then(data => onHide())
        } else {
            setAlertText('?????????????? ?????????????? ???????????? "??????????????????????", ?? ?????????? ???????????????????? ????????????')
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
            message.success("???????? ???? ???????????????????? ???????????????????? ?? ???????????? ??????, ????????????, ???????????????? ???????????? ??????????????! \n ???????????????? ????????????????.\n\???????? ???? ?????????????????????? ???????????????? ???????????????????? ??????????, ?????? ???? ?????????? ??????????????????! \ n\ ???? ???????????? ???????????? ???????????????? ????.")
            addUserBackground(formData).then(data => onHide())
        } else {
            setAlertText('?????????????? ?????????????? ???????????? "??????????????????????", ?? ?????????? ???????????????????? ????????????')
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
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>?????????????? ???????????????????? ?? ????????</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>??????/?????? *</h4>
                            <Input style={{ borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={name} onChange={e => setName(e.target.value)} placeholder="?????????? ??????/??????" />
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>???????? ???????????????? *</h4>
                            <Input style={{ borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={birthday} onChange={e => setBirthday(e.target.value)} placeholder="?????????? ???????? ???????? ???????????????? (????????????: 21.01.2001)" />
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>???????????? ???? ????-?????????????? *</h4>
                            <Input style={{ borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={vk} onChange={e => setVk(e.target.value)} placeholder="?????????? ???????????? ???? ????-??????????????" />
                            
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>???????? ?????? *</h4>
                            <Dropdown>
                            <Dropdown.Toggle style={{ fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, background: '#0072CE', borderColor: '#0072CE'}}>{`?????????????? ??????: ${genderUser}`}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setGender('??????????????')}
                                    >
                                        {'??????????????'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setGender('??????????????')}
                                    >
                                        {'??????????????'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setGender('????????')}
                                    >
                                        {'????????'}
                                    </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            <h4 style={{paddingTop: 18, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>???????? ???????????????? *</h4>

                            <Form.Control
                            type="file"
                            onChange={selectFile}
                            style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}}
                            custom
                            />
                            
                    </Card>
                    {visibleAlert&& 
                        <Alert message={alertText} type={alertType} />
                        }
                    <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>???????????? ?????? *</h4>
                        <Dropdown>
                            <Dropdown.Toggle style={{ fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, background: '#0072CE', borderColor: '#0072CE', marginBottom: 10}}>{`???????????? ???????? ??????`}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('minecraftOne.jpg')}
                                    >
                                        {'??????????????????-????????????'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('minecraftTwo.jpg')}
                                    >
                                        {'??????????????????-??????'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('minecraftFour.jpg')}
                                    >
                                        {'??????????????????-????????????'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('animeOne.jpg')}
                                    >
                                        {'??????????-????????'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('animeTwo.jpg')}
                                    >
                                        {'??????????-??????????'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('cyberCity.jpg')}
                                    >
                                        {'??????????-??????????'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('cyberGirl.jpg')}
                                    >
                                        {'??????????-??????????????'}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setUserBackgroundImg('forest.jpg')}
                                    >
                                        {'??????'}
                                    </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginTop: 20}} className="mt-2" onClick={addUserBackgroundFc}>???????????????? ??????</Button>
                    </Card>
                    </Col>

                    
                    </Form>
                    </Col>
                    <Col>
                        <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={confirm}>??????????????????????</Button>
                    </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>??????????????</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={addUserData}>????????????????</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateUserInfoModl;
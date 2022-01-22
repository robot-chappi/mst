import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form, Dropdown} from "react-bootstrap";
import {Context} from "../../index";
import {createNews, deleteNews} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import { Col, Card, Input, Alert, message, Menu
    //    Button, Space, Image, Select, Rate
    } from 'antd';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('5');
const { TextArea } = Input;

const CreateNews = observer(({show, onHide}) => {
    const [idPost, setIdPost] = useState(0)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [descriptionMini, setDescriptionMini] = useState('')
    const [file, setFile] = useState(null)
    const [fileMini, setFileMini] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const selectFileMini = e => {
        setFileMini(e.target.files[0])
    }

    const addPost = async () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('img', file)
        formData.append('descriptionMini', descriptionMini)
        formData.append('imgMini', fileMini)
        message.success("Успешно добавлено!")
        createNews(formData).then(data => onHide())
    }

    const deletePostOne = () => {
        deleteNews(idPost)
        message.success("Успешно удалено!")
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
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Добавить, удалить новость</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                            <Col>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Добавить новость</h4>
                            </Col>
                            <Col>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Заголовок *</h4>
                                <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={title} onChange={e => setTitle(e.target.value)} placeholder="Введи заголовок" />
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Описание *</h4>
                                <TextArea style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={description} onChange={e => setDescription(e.target.value)} placeholder="Введи описание" />
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Картинка *</h4>
                                <Form.Control
                                type="file"
                                onChange={selectFile}
                                style={{color: '#FFFFFF', fontWeight: 700, fontFamily: 'IBM Plex Mono',}}
                                custom
                                />
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Малое описание *</h4>
                                <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={descriptionMini} onChange={e => setDescriptionMini(e.target.value)} placeholder="Введи малое описание" />
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Малая картинка *</h4>
                                <Form.Control
                                type="file"
                                onChange={selectFileMini}
                                style={{color: '#FFFFFF', fontWeight: 700, fontFamily: 'IBM Plex Mono',}}
                                custom
                                />
                                <Col style={{marginTop: 10}}>
                                    <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={addPost}>Создать</Button>
                                </Col>
                            </Col>
                            
                    </Card>
                    <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                    <Col>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Удалить новоть</h4>
                    </Col>
                        <Col style={{marginLeft: 10}}>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Новость ID *</h4>
                            <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={idPost} onChange={e => setIdPost(e.target.value)} placeholder="Введи пост ID" />                
                            <Col style={{marginTop: 10}}>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={deletePostOne}>Удалить</Button>
                            </Col>
                        </Col>
                    </Card>
                    </Col>
                    </Form>
                    </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateNews;
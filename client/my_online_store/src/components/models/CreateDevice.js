import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchCollections, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import { Col, Card, Input, Alert, message, Menu, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';

const { TextArea } = Input;


const CreateDevice = observer(({show, onHide}) => {
    const {devices} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [collections, setCollections] = useState([])
    const [selectedCollection, setSelectedCollection] = useState([])
    const [file, setFile] = useState(null)
    const [fileTwo, setFileTwo] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => devices.setTypes(data))
        fetchBrands().then(data => devices.setBrands(data))
        fetchCollections().then(data => setCollections(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const selectFileTwo = e => {
        setFileTwo(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('description', description)
        formData.append('img', file)
        formData.append('imgBig', fileTwo)
        formData.append('brandId', devices.selectedBrand.id)
        formData.append('typeId', devices.selectedType.id)
        formData.append('collectionId', selectedCollection.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header style={{background: "#292929", borderColor: "#292929"}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Добавить услугу</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                                <Col style={{marginBottom: 20}}>
                                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Добавить это</h4>
                                </Col>
                                <Col>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Тип услуги *</h4>
                                    <Dropdown >
                                        <Dropdown.Toggle style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, width: '100%', background: '#0072CE', borderColor: '#0072CE'}}>{devices.selectedType.name || "Select the type"}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {devices.types.map(type =>
                                                <Dropdown.Item
                                                style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                                    onClick={() => devices.setSelectedType(type)}
                                                    key={type.id}
                                                >
                                                    {type.name}
                                                </Dropdown.Item>
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col>
                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Название услуги *</h4>
                    <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={name} onChange={e => setName(e.target.value)} placeholder="Введи имя услуги" />

                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Описании услуги *</h4>
                    <TextArea style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={description} onChange={e => setDescription(e.target.value)} placeholder="Введи описании услуги" />

                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Стоимость услуги *</h4>
                    <Input type='number' style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={price} onChange={e => setPrice(Number(e.target.value))} placeholder="Введи стоимость услуги" />

                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Картинка услуги (иконка) *</h4>
                    <Form.Control
                    style={{color: '#FFFFFF', fontWeight: 700, fontFamily: 'IBM Plex Mono',}}
                        type="file"
                        onChange={selectFile}
                    />
                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Большая картинка *</h4>
                    <Form.Control
                    style={{color: '#FFFFFF', fontWeight: 700, fontFamily: 'IBM Plex Mono',}}
                        type="file"
                        onChange={selectFileTwo}
                    />
                    <h4 style={{paddingTop: 25, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Доп. параметры *</h4>
                    <Button
                        style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                        onClick={addInfo}
                    >
                        Новое качество
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={7}>
                                <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)} placeholder="Название параметра" />
                            </Col>
                            <Col md={7}>
                                <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} placeholder="Описание параметра" />
                            </Col>
                            <Col md={7}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                    </Col>
                    </Card>
                    </Col>
                </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;
import React, {useContext, useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive'
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createPromo, fetchPromoCode, fetchCodes, deleteCode, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import { Col, Card, Input, Alert, message, Menu, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';

const CreatePromoCode = observer(({show, onHide}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const {devices} = useContext(Context)
    const [types, setTypes] = useState([])

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState()
    const [discount, setDiscount] = useState()
    const [typeId, setTypeId] = useState()
    const [nameCode, setNameCode] = useState('')
    const [findCode, setFindCode] = useState('')
    const [foundCode, setFoundCode] = useState('')
    const [allCodes, setAllCodes] = useState([])
    const [visibleAlert, setVisibleAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')

    useEffect(() => {
        fetchTypes().then(data => setTypes(data))
        fetchCodes().then(data => setAllCodes(data))
    }, [])

    const addCode = () => {
        console.log(name)
        console.log(description)
        console.log(quantity)
        console.log(discount)
        console.log(typeId)
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('quantity', `${quantity}`)
        formData.append('discount', `${discount}`)
        formData.append('typeId', typeId)
        createPromo(formData).then(data => onHide())
    }

    const deletePromoCodeOne = () => {
        console.log(nameCode)
        deleteCode(nameCode)
    }

    const fetchPromoCodeOne = () => {
        console.log(findCode)
        fetchPromoCode(findCode).then(data => setFoundCode(data))
    }

    const check = () => {
        try {
        console.log(foundCode)
        foundCode.map(f => {
            setAlertText(`ID: ${f.id} \n ??????: ${f.name}  \n ????????-????: ${f.quantity} \n ????????????: ${f.discount} \n ?????? ID: ${f.typeId} \n ????????????????: ${f.description} \n ????????????: ${f.createdAt} \n ????????????????: ${f.updatedAt}`)
            setAlertType('success')
            setVisibleAlert(true)
            return setTimeout(() => {setVisibleAlert(false)}, 10000)
        })
    } catch {
        setAlertText("???????????? ??????????-???????? ??????")
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
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>??????????????, ??????????????, ?????????? ????????????????</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}> 
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                                <Col>
                                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF', paddingBottom: 10}}>?????????????? ????????????????</h4> 
                                </Col>
                                <Col>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>?????? ?????????????????? *</h4>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle style={{ fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, width: '100%', borderColor: '#0072CE', background: '#0072CE'}}>{devices.selectedType.name || "?????????????? ??????"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {types.map(type =>
                                <Dropdown.Item
                                style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}
                                    onClick={() => setTypeId(type.id)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>???????????????? ?????????????????? *</h4>
                    <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={name} onChange={e => setName(e.target.value)} placeholder="?????????? ???????????????? ??????????????????" />

                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>???????????????? ?????????????????? *</h4>
                    <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={description} onChange={e => setDescription(e.target.value)} placeholder="?????????? ???????????????? ??????????????????" />
                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>???????????????????? ?????????????????????????? *</h4>
                    <Input type="number" style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={quantity} onChange={e => setQuantity(Number(e.target.value))} placeholder="?????????? ????????-???? ????????????????????" />
                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>???????????? *</h4>
                    <Input type="number" style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={discount} onChange={e => setDiscount(Number(e.target.value))} placeholder="?????????? ???????????? ??????????????????" />
                    <Button
                        style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                        onClick={addCode}
                    >
                        ????????????????
                    </Button>
                    </Col>
                    <Col style={{marginTop: 15}}>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF', paddingBottom: 10}}>?????????????? ????????????????</h4> 
                    </Col>
                <Col>
                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>?????? ?????????????????? *</h4>
                <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={nameCode} onChange={e => setNameCode(e.target.value)} placeholder="Enter the name of the promo code" />
                    <Button
                        style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                        onClick={deletePromoCodeOne}
                    >
                        ??????????????
                    </Button>
                </Col>
                <Col style={{marginTop: 15}}>
                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF', paddingBottom: 10}}>?????????? ????????????????</h4> 
                </Col>
                <Col>
                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>???????????????? ?????????????????? *</h4>
                <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={findCode} onChange={e => setFindCode(e.target.value)} placeholder="?????????? ???????????????? ??????????????????" />
                {visibleAlert&& 
                        <Alert message={alertText} type={alertType} />
                        }
                    <Row md={2}>
                        <Button
                            style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                            onClick={fetchPromoCodeOne}
                        >
                            ??????????
                        </Button>
                        <Button
                            style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                            onClick={check}
                        >
                            ??????????????????
                        </Button>
                    </Row>
                </Col>
                <Col style={{marginTop: 15}}>
                    {isDesktopOrLaptop &&
                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF', paddingBottom: 10}}>?????? ??????????????????</h4> 
                    }
                    {isMobile &&
                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF', paddingBottom: 10}}>?????? ???????????????? ????????????????????</h4> 
                    }
                </Col>
                <Col>
                {isDesktopOrLaptop &&
                    <Row style={{marginTop: 15}}>
                        
                            <Row md={6}>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>ID</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>??????</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>????????</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>????????-????</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>????????????</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>??????</h4>
                            </Row>
                            {allCodes.map(codes => 
                            <Row key={codes.id} md={6} onClick={() => setFindCode(codes.name)}>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{codes.id}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{codes.name}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{codes.description}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{codes.quantity}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{codes.discount}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{codes.typeId}</h4>
                            </Row>
                                    )}
                    </Row>
                }
                {isMobile &&
                    <Col style={{marginTop: 15}}>
                            <Space className='d-flex' style={{justifyContent: 'space-between'}}>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>ID</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>??????</h4>
                            </Space>

                            {allCodes.map(codes => 
                            <Row key={codes.id} md={2} onClick={() => setFindCode(codes.name)}>
                                <Space className='d-flex' style={{justifyContent: 'space-between'}}>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{codes.id}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{codes.name}</h4>
                                </Space>
                            </Row>
                                    )}
                        
                    </Col>
                }
                </Col>
                </Card>
                </Col>
                </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>??????????????</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreatePromoCode;
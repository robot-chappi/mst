import React, {useState, useEffect} from 'react';
import {useMediaQuery} from 'react-responsive'
import Modal from "react-bootstrap/Modal";
import {Form, Button, Row} from "react-bootstrap";
import CreateOperationPayment from './CreatePaymentLast';
import {fetchCodes, checkPromoCode, checkDeviceAndNext, checkDeviceForOne} from "../../http/deviceAPI";
import { Col, Card, Input, Alert, message, Menu, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';
import jwt_decode from "jwt-decode";

const CreatePayOneDevice = ({show, onHide, basket}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const [code, setCode] = useState('')
    const [codeName, setCodeName] = useState('')
    const [chechCode, setCheckCode] = useState([])
    const [operationPaymentVisible, setOperationPaymentVisible] = useState(false)
    const [nameDevice, setNameDevice] = useState('')
    const [visibleAlert, setVisibleAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')
    const [price, setPrice] = useState()
    const [priceFinally, setPriceFinally] = useState()

    const [ex, setEx] = useState(0)
    const [exNext, setExNext] = useState(0)

    const checkCode = async () => {
        try {
        const check = await checkPromoCode(code)
        console.log(check.name)
        setCodeName(check.name)
        if (check == null) {
            setAlertText("Промокод не найден")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        } 
        if (check != null) {
            if (check.quantity > 0) {
            setCheckCode(check)
            setEx(1)
            setAlertText("Промокод найден!")
            setAlertType('success')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
            } else {
                setAlertText("Количество использований промокода подошло к концу...")
                setAlertType('error')
                setVisibleAlert(true)
                setTimeout(() => {setVisibleAlert(false)}, 4000)
            }
        }} catch {
            setAlertText("Промокод не найден")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }
    }

    const checkFamily = async () => {
        try {
        if (ex === 1) {
        const resp = await checkDeviceForOne(chechCode.typeId, basket.id)
        console.log(basket.id)
        console.log(chechCode.typeId)
        
        if (resp == 'Error') {
            setAlertText("Твой промокод не используется для этого типа товара - напиши другой. \n\n Или продолжи без него")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        } 
        // цену и устройства
        let payDataNames = []
        let payDataPrices = []
        for (const f of resp.rows) {
            payDataNames.push(f.name)
            payDataPrices.push(f.price)
        }
        let x;
        var str = payDataNames.join(', ');
        setNameDevice(str)  
        setPrice(payDataPrices.map(i=>x+=i, x=0).reverse()[0])

        const disc = price / 100 * chechCode.discount
        const exactPrice = price - disc
        
        setPriceFinally(exactPrice)

        if (exNext == 1) {
            setOperationPaymentVisible(true)
            setExNext(0)
        } 
        if (exNext == 0) {
            setExNext(1)
            setAlertText("Спам защита ничего не обнаружила - нажмите на кнопку еще раз")
            setAlertType('success')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }
        } else {
            setAlertText("Ты не можешь продолжить без промокода тут")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }} catch {
            setAlertText("Твой промокод не используется для этого типа товара - напиши другой. \n\n Или продолжи без него")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }
    }


    const goWithoutCode = async () => {
        try {
        // // цену и устройства
        let payDataNames = []
        let payDataPrices = []
        payDataNames.push(basket.name)
        payDataPrices.push(basket.price)
        console.log(payDataNames)
        console.log(payDataPrices)
        let x;
        var str = payDataNames.join(', ');
        setNameDevice(str)
        setPrice(payDataPrices.map(i=>x+=i, x=0).reverse()[0])
        setPriceFinally(price)

        if (exNext == 1) {
            setOperationPaymentVisible(true)
            setExNext(0)
        } 
        if (exNext == 0) {
            setExNext(1)
            setAlertText("Спам защита ничего не обнаружила - нажмите на кнопку еще раз")
            setAlertType('success')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }

        } catch {
            setAlertText("Что-то пошло не так...")
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
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Используй промокод</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Использовать код</h4>
                        <Col style={{marginLeft: 10}}>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Ввести код *</h4>
                            <Input style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', borderRadius: 15, height: 50, fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, color: 'black'}} value={code} onChange={e => setCode(e.target.value)} placeholder="Твой промокод пожалуйста :)" />
                            {visibleAlert&& 
                                <Alert message={alertText} type={alertType} />
                            }
                            <Col>
                            {isDesktopOrLaptop &&
                                <Space>
                                    <Button
                                        style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                                        onClick={checkCode}
                                    >
                                        Проверить промокод
                                    </Button>
                                    <Button
                                        style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                                        onClick={checkFamily}
                                    >
                                        Перейти к оплате
                                    </Button>
                                </Space>
                            }
                            {isMobile &&
                                <Space>
                                    <Button
                                        style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                                        onClick={checkCode}
                                    >
                                        Проверить промокод
                                    </Button>
                                    <Button
                                        style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                                        onClick={checkFamily}
                                    >
                                        Перейти к оплате
                                    </Button>
                                </Space>
                            }
                            </Col>
                        </Col>
                        </Card>
                        </Col>
                        </Form>
                    <Col>
                    {isDesktopOrLaptop &&
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Не использовать промокод</h4>
                        <Button
                            style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                            onClick={goWithoutCode}
                            >
                            Перейти к оплате не используя код
                        </Button>
                        </Card>
                    }
                    {isMobile &&
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Не использовать промокод</h4>
                        <Button
                            style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"
                            onClick={goWithoutCode}
                            >
                            Перейти к оплате не используя код
                        </Button>
                        </Card>
                    }
                    </Col>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: '100%', height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
            <CreateOperationPayment name={codeName} card={nameDevice} price={priceFinally} show={operationPaymentVisible} onHide={() => setOperationPaymentVisible(false)}/>
        </Modal>
    );
};

export default CreatePayOneDevice;
import React, {useState, useEffect, useContext} from "react";
import { Spinner } from "react-bootstrap";
import {useMediaQuery} from 'react-responsive'
import { fetchBasketDevices, deleteBasketDevices, createNewsletterSub, deleteOneDeviceBasket} from "../http/deviceAPI";
import jwt_decode from "jwt-decode";
import { observer } from "mobx-react-lite";
import {DEVICE_ROUTE} from '../utils/consts'
import {useHistory} from 'react-router-dom'
import CreatePay from "../components/models/CreatePayment";
import { Layout, Col, Card,  Input, Button, Row, Space, Image, Select, Rate, message} from 'antd';
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE} from "../utils/consts";
import FooterComputer from "../components/FooterPC";
import FooterMobile from "../components/FooterMobile";
import searchImg from "../assets/research.jpg";
const { Header, Content, Footer } = Layout;

const Basket = observer(() => {
    const [newsletter, setNewsletter] = useState('')
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const [device, setDevice] = useState({info: []})
    const [loading, setLoading] = useState(true)
    const [payVisible, setPayVisible] = useState(false)
    
    const history = useHistory()

    useEffect(() => {
        let idd = jwt_decode(localStorage.getItem('token'))
        fetchBasketDevices(idd.id).then(data => setDevice(data)).finally(() => setLoading(false))
    }, [])

    const deleteItem = () => {
        let idd = jwt_decode(localStorage.getItem('token'))
        deleteBasketDevices(idd.id)
        message.success('Корзина была очищена. \nОбнови страницу...')
    }

    const deleteOneItem = (product) => {
        let idd = jwt_decode(localStorage.getItem('token'))
        console.log(idd.id)
        console.log(product)
        deleteOneDeviceBasket(idd.id, product)
        message.success('Услуга была удалена. \nОбнови страницу...')
    }


    if (loading) {
        return <Spinner animation={'grow'}/>
      }

    

    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={searchImg}/>
                </Col>
                <Col style={{position: 'absolute', left: 200, bottom: -200}}>
                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 65, color: 'white'}}>Корзина</h4>
                </Col>
            </Content>
            }
            {isDesktopOrLaptop &&
            <Content style={{minHeight: 700}}>
                <Row style={{paddingTop: 20, paddingBottom: 30}}>
                    <Col span={20} offset={4}>
                        
                        <Row className="d-flex">
                        {device.map(num => ( 
                            <Col md={3} className='mt-3' key={num.id} style={{marginRight: 60}}>
                            <div style={{width: 210, height: 363, color: 'black', cursor: 'pointer', fontFamily: 'IBM Plex Mono', fontSize: 16, fontWeight: 700, borderRadius: 15, paddingTop: 5, background: '#292929'}}>
                                <div className="d-flex align-items-center">
                                    <Image width={210} height={210} style={{borderRadius: 15,}}  src={process.env.REACT_APP_API_URL + num.img}/>
                                </div>
                                <div style={{fontWeight: 700, fontSize: 18, color: '#FFFFFF', paddingLeft: 5, paddingTop: 5}} className="mt-1 d-flex justify-content-between align-items-center">
                                <div>{num.name}</div>
                                </div>
                                <div className="d-flex align-items-center" style={{marginLeft: 5}}>
                                        <Space><Rate style={{fontSize: 17}} value={num.rating} /></Space>
                                </div>
                                <div className="d-flex align-items-center" style={{marginTop: 10, justifyContent: 'center'}}>
                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 16, width: 198, height: 36, textAlign: 'center'}} onClick={() => history.push(DEVICE_ROUTE + '/' + num.id)}>RUB: {num.price}</Button>
                                </div>

                            </div>
                            <div className="d-flex" style={{ marginTop: 5, justifyContent: 'center'}}>
                                <Button className="d-flex" style={{background: '#292929', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 15, height: 25, borderColor: '#292929', justifyContent: 'center'}} onClick={() => deleteOneItem(num.id)}><CloseCircleOutlined style={{color: 'white'}}/></Button>
                            </div>
                        </Col>
                        ))}
                        <Col span={20} style={{fontFamily: 'Poppins'}}>
                                <div style={{paddingTop: 35, paddingBottom: 20}}>
                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 50, marginRight: 10}} onClick={deleteItem}>Очистить</Button>
                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 50}} onClick={() => setPayVisible(true)}>Купить</Button>
                                </div>
                        </Col> 
                        </Row>
                    </Col>
                </Row>
                <CreatePay basket={device} show={payVisible} onHide={() => setPayVisible(false)}/>
            </Content>
            }
            {isMobile &&
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={searchImg}/>
                </Col>
            </Content>
            }
            {isMobile &&
            <Content style={{minHeight: 700}}>
                <Row style={{paddingTop: 20, paddingBottom: 30}}>
                    <Col span={20}>
                    <Col style={{marginBottom: 20}} span={20}>
                        <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 31, marginLeft: 10, color: '#FFFFFF'}}>Корзина</h4>
                    </Col>
                        <Row className="d-flex" style={{justifyContent: 'center', marginLeft: 30}}>
                        {device.map(num => ( 
                        <Col md={3} className='mt-3' key={num.id} style={{marginRight: 5}}>
                        <div style={{width: 110, color: 'black', cursor: 'pointer', fontFamily: 'IBM Plex Mono', fontSize: 16, fontWeight: 700, borderRadius: 15,  background: '#292929', height: 224}}>
                            <div className="d-flex align-items-center">
                                <Image width={110} height={110} style={{borderRadius: 15,}} src={process.env.REACT_APP_API_URL + num.img}/>
                            </div>
                            <div style={{fontWeight: 700, fontSize: 12, color: '#FFFFFF', paddingTop: 5}} className=" d-flex justify-content-between align-items-center">
                            <div>{num.name}</div>
                            </div>
                            <div className="d-flex align-items-center">
                                    <Space><Rate style={{fontSize: 12}} value={num.rating} /></Space>
                                </div>
                            <div className="d-flex align-items-center" style={{marginTop: 10, justifyContent: 'center'}}>
                                <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 10, width: 110, height: 26, textAlign: 'center'}} onClick={() => history.push(DEVICE_ROUTE + '/' + num.id)}>РУБ: {num.price}</Button>
                            </div>
                        </div>
                        <div className="d-flex" style={{justifyContent: 'center', marginTop: 5}}>
                            <Button className="d-flex" style={{background: '#292929', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 15, height: 25, borderColor: '#292929', justifyContent: 'center',}} onClick={() => deleteOneItem(num.id)}><CloseCircleOutlined style={{color: '#FFFFFF'}}/></Button>
                        </div>
                    </Col>
                        ))}
                        <Col style={{fontFamily: 'Poppins'}}>
                                <Space style={{paddingTop: 35, paddingBottom: 20}}>
                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 50,  marginRight: 10}} onClick={deleteItem}>Очистить</Button>
                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 50}} onClick={() => setPayVisible(true)}>Купить</Button>
                                </Space>
                        </Col> 
                        </Row>
                    </Col>
                </Row>
                <CreatePay basket={device} show={payVisible} onHide={() => setPayVisible(false)}/>
            </Content>
            }
            {isDesktopOrLaptop &&
            <FooterComputer/>
            }
            {isMobile &&
            <FooterMobile/>
            }
        </Layout>
        )
})

export default Basket;
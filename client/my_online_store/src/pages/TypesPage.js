import {useMediaQuery} from 'react-responsive'
import React, { useContext, useEffect, useState,  } from "react";
import FooterMobile from "../components/FooterMobile";
import FooterComputer from "../components/FooterPC";
import { fetchDevices, fetchTypeType, getCollection, fetchOneCollectionDevices, fetchOneCollectionMobile } from "../http/deviceAPI";
import { useHistory, useParams } from "react-router-dom";
import { Layout, Card, Form, Input, Button, Row, Space, Menu, Image, Col, message, Rate} from 'antd';
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined, MoreOutlined } from '@ant-design/icons';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE, DEVICE_ROUTE} from "../utils/consts";

import CarouselBarTwo from "../components/CarouselTwo";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;


const TypePage = () => {
    const [games, setGames] = useState([])
    const [collection, setCollection] = useState([])
    const {id} = useParams()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const history = useHistory()
      console.log(id)
    useEffect(() => {
        fetchDevices(id, null, null, null).then(data => setGames(data.rows))
        fetchTypeType(id).then(data => setCollection(data))
    }, [])

    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
            <Content style={{marginBottom: 500}}>
                <Row style={{fontSize: 25}}>
                    <Col offset={2} span={20}>
                            <Col style={{marginBottom: 20, marginTop: 30}}>
                                <Space style={{fontWeight: 600, fontFamily: 'Poppins', fontSize: 50, color: 'white'}}>{collection.name}</Space>
                                <Col>
                                    <Row className='d-flex'>
                                        {games.map(device => 
                                            <Col md={3} className='mt-3' key={device.id} style={{marginRight: 30}}>
                                            <div style={{width: 210, height: 363, color: 'black', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 16, fontWeight: 600, borderRadius: 15, paddingTop: 5, background: '#292929'}}>
                                                <div className="d-flex align-items-center">
                                                    <Image width={210} height={210} style={{borderRadius: 15,}}  src={process.env.REACT_APP_API_URL + device.img}/>
                                                </div>
                                                <div style={{fontWeight: 600, fontSize: 18, color: '#FFFFFF', paddingLeft: 5, paddingTop: 5}} className="mt-1 d-flex justify-content-between align-items-center">
                                                <div>{device.name}</div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{marginLeft: 5}}>
                                                        <Space><Rate style={{fontSize: 17}} value={device.rating} /></Space>
                                                </div>
                                                <div className="d-flex align-items-center" style={{marginTop: 10, justifyContent: 'center'}}>
                                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'Poppins', fontWeight: 600, fontSize: 16, width: 198, height: 36, textAlign: 'center'}} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>RUB: {device.price}</Button>
                                                </div>
                                            </div>
                                        </Col>
                                        )}
                                    </Row>
                                </Col>
                            </Col>  
                        </Col>
                </Row>
            </Content>
            }
            {isMobile &&
            <Content style={{marginBottom: 500}}>
                <Row style={{fontSize: 25}}>
                    <Col offset={1}>
                            <Col style={{marginBottom: 10, marginTop: 20}}>
                                <Space style={{fontWeight: 600, fontFamily: 'Poppins', fontSize: 30, color: 'white'}}>{collection.name}</Space>
                                <Col>
                                    <Row className='d-flex'>
                                        {games.map(device => 
                                            <Col md={3} className='mt-3' key={device.id} style={{marginRight: 5}}>
                                            <div style={{width: 110, color: 'black', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 16, fontWeight: 600, borderRadius: 15,  background: '#292929', height: 224}}>
                                                <div className="d-flex align-items-center">
                                                    <Image width={110} height={110} style={{borderRadius: 15,}} src={process.env.REACT_APP_API_URL + device.img}/>
                                                </div>
                                                <div style={{fontWeight: 600, fontSize: 12, color: '#FFFFFF', paddingTop: 5}} className=" d-flex justify-content-between align-items-center">
                                                <div>{device.name}</div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                        <Space><Rate style={{fontSize: 12}} value={device.rating} /></Space>
                                                    </div>
                                                <div className="d-flex align-items-center" style={{marginTop: 10, justifyContent: 'center'}}>
                                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'Poppins', fontWeight: 600, fontSize: 10, width: 110, height: 26, textAlign: 'center'}} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>RUB: {device.price}</Button>
                                                </div>
                                            </div>
                                        </Col>
                                        )}
                                    </Row>
                                </Col>
                            </Col>  
                        </Col>
                </Row>
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

}

export default TypePage;
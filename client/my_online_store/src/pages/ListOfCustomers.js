import {useMediaQuery} from 'react-responsive'
import React, { useEffect, useState,  } from "react";
import FooterMobile from "../components/FooterMobile";
import FooterComputer from "../components/FooterPC";
import { getCustomers } from "../http/deviceAPI";
import { useHistory, useParams } from "react-router-dom";
import { Layout, Card, Form, Input, Button, Row, Space, Menu, Image, Col, message, Rate} from 'antd';
import {CUSTOMER} from "../utils/consts";
import customersArt from "../assets/customers.jpg";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;


const ListCustomers = () => {
    const [collection, setCollection] = useState([])
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const history = useHistory()

    useEffect(() => {
        getCustomers().then(data => setCollection(data))
    }, [])

    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
            <Content style={{position: 'relative'}}>
                <Col>
                    <img width="100%" src={customersArt}/>
                </Col>
            </Content>
            }
            {isDesktopOrLaptop &&
            <Content style={{minHeight: 700}}>
                <Row style={{fontSize: 25}}>
                    <Col offset={2} span={20}>
                            <Col style={{position: 'absolute', left: 0, bottom: -500}}>
                                <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 50, color: 'white'}}>Все исполнители</Space>
                                <Col>
                                    <Row className='d-flex' style={{marginBottom: 50}}>
                                        {collection.map(device => 
                                            <Col md={3} className='mt-3' key={device.id} style={{marginRight: 140}}>
                                            <div style={{width: 410, height: 650, color: 'black', cursor: 'pointer', fontFamily: 'IBM Plex Mono', fontSize: 16, fontWeight: 700, borderRadius: 15, paddingTop: 5, background: '#292929'}}>
                                                <div className="d-flex align-items-center">
                                                    <Image width={410} height={410} style={{borderRadius: 15,}}  src={process.env.REACT_APP_API_URL + device.img}/>
                                                </div>
                                                <div style={{fontWeight: 600, fontSize: 25, color: '#FFFFFF', paddingLeft: 5, paddingTop: 5}} className="mt-1 d-flex justify-content-between align-items-center">
                                                <div style={{fontFamily: 'IBM Plex Mono', fontWeight: 700}}>{device.name}</div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{marginLeft: 5}}>
                                                        <Space><Rate style={{fontSize: 17}} value={device.rating} /></Space>
                                                </div>
                                                <div style={{fontWeight: 600, fontSize: 18, color: '#FFFFFF', paddingLeft: 5, paddingTop: 5}} className="mt-1 d-flex justify-content-between align-items-center">
                                                <div style={{fontFamily: 'IBM Plex Mono', fontWeight: 700}}>{device.aboutmyself}</div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{marginTop: 10, justifyContent: 'center'}}>
                                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 16, width: 198, height: 36, textAlign: 'center'}} onClick={() => history.push(CUSTOMER + '/' + device.id)}>Профиль</Button>
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
            <Content style={{position: 'relative'}}>
                <Col>
                    <img width="100%" src={customersArt}/>
                </Col>
            </Content>
            }
            {isMobile &&
            <Content style={{minHeight: 500}}>
                <Row style={{fontSize: 25}}>
                    <Col span={20}>
                            <Col style={{position: 'absolute', left: 5, bottom: -450}}>
                                <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 30, color: 'white'}}>Все исполнители</Space>
                                <Col>
                                    <Row className='d-flex' style={{marginBottom: 50}}>
                                        {collection.map(device => 
                                            <Col md={3} className='mt-3' key={device.id} style={{marginRight: 5}}>
                                            <div style={{width: 165, color: 'black', cursor: 'pointer', fontFamily: 'IBM Plex Mono', fontSize: 16, fontWeight: 700, borderRadius: 15,  background: '#292929', height: 394}}>
                                                <div className="d-flex align-items-center">
                                                    <Image width={165} height={165} style={{borderRadius: 15,}} src={process.env.REACT_APP_API_URL + device.img}/>
                                                </div>
                                                <div style={{fontWeight: 600, fontSize: 12, color: '#FFFFFF', paddingTop: 5}} className=" d-flex justify-content-between align-items-center">
                                                <div style={{fontFamily: 'IBM Plex Mono', fontWeight: 700}}>{device.name}</div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                        <Space><Rate style={{fontSize: 12}} value={device.rating} /></Space>
                                                    </div>
                                                <div style={{fontWeight: 600, fontSize: 14, color: '#FFFFFF', paddingLeft: 5, paddingTop: 5}} className="mt-1 d-flex justify-content-between align-items-center">
                                                <div style={{fontFamily: 'IBM Plex Mono', fontWeight: 700}}>{device.aboutmyself}</div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{marginTop: 10, justifyContent: 'center'}}>
                                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 10, width: 110, height: 26, textAlign: 'center'}} onClick={() => history.push(CUSTOMER + '/' + device.id)}>Профиль</Button>
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

export default ListCustomers;
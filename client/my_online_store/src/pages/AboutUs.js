import React, {useState} from "react";
import {useMediaQuery} from 'react-responsive'
import { createNewsletterSub } from "../http/deviceAPI";
import { Layout, Col, Card,  Input, Button, Row, Space, Image, Select, Rate, message} from 'antd';
import { useHistory } from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE} from "../utils/consts";
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined } from '@ant-design/icons';

import aboutus from "../assets/programming.png";
import iconAboutOne from '../assets/AboutUsPic1.jpg'
import iconAboutTwo from '../assets/AboutUsPic2.jpg'
import iconAboutThree from '../assets/AboutUsPic3.png'
import iconAboutFour from '../assets/AboutUsPic4.jpg'
import iconAboutFive from '../assets/AboutUsPic5.jpg'
import FooterComputer from "../components/FooterPC";
import FooterMobile from "../components/FooterMobile";

const { Header, Content, Footer } = Layout;

const AboutUs = () => {
    const [newsletter, setNewsletter] = useState('')
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const history = useHistory()
    
    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={aboutus}/>
                </Col>
            </Content>
            }
            {isDesktopOrLaptop &&
            <Content>
                <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col span={20} offset={4}>
                        
                        <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 50, paddingBottom: 10, color: '#FFFFFF'}}>О нас</h1>
                    </Col>
                    <Col offset={1} span={22} style={{marginBottom: 40}}>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, paddingTop: 50, paddingBottom: 50}}>
                        <Row className='d-flex' style={{justifyContent: 'space-between'}}>
                            <Col span={8} style={{paddingLeft: 100}} >
                                <h4 style={{paddingTop: 100, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 40, paddingBottom: 30, color: 'white'}}>A Family That Keeps On Growing</h4>
                                <h4 style={{paddingTop:20, fontSize: 23, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: 'white'}}>
                                We always aim to please the home market, supplying great gaming keys and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
                                <br/><br/>
                                Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                                </h4>
                            </Col>
                            <Col span={12} style={{paddingTop: 50}}>
                                <img width={'100%'} src={iconAboutOne}/>
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                    <Col offset={1} span={22} style={{marginBottom: 40}}>
                        <Card style={{background: '#FFFFFF', borderRadius: 15, paddingTop: 50, paddingBottom: 50}}>
                        <Row className='d-flex' style={{justifyContent: 'space-between'}}>
                            <Col span={12} style={{paddingTop: 70, paddingLeft: 50}}>
                                <img width={950} height={560} src={iconAboutTwo}/>
                            </Col>
                            <Col span={8} style={{paddingRight: 70, marginRight: 120}} >
                                <h4 style={{paddingTop: 100, fontWeight: 700, fontFamily: 'IBM Plex Mono',fontSize: 40, paddingBottom: 30, color: 'black'}}>Small history</h4>
                                <h4 style={{paddingTop:20, fontSize: 23, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: 'black'}}>
                                PlayStation Store was founded in 2014 as a simple site with random keys, and only in 2016 we grew into a serious, interesting store. For all the time, we have globally changed the design of the site three times. For the first time in 2014, then a scary shop with a random began to look like a store, for the second time in 2016, with it we found our brand colors and started capturing prerolls on YouTube, and in this, 2020, we decided to go into stylish, fashionable, modern, eye-catching minimalism.
                                </h4>
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                    <Col offset={1} span={22} style={{marginBottom: 40}}>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, paddingTop: 50, paddingBottom: 50}}>
                        <Row className='d-flex' style={{justifyContent: 'space-between'}}>
                            <Col span={8} style={{paddingLeft: 70}} >
                                <h4 style={{paddingTop: 100, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 40, paddingBottom: 30, color: 'white'}}>You're In Safe Hands</h4>
                                <h4 style={{paddingTop:20, fontSize: 23, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: 'white'}}>
                                We have been working and selling game keys for more than 5 years and we have never had a bad review! You can take a look at it yourself in our Vkontakte group. We had more than 5 million customers.
                                <br/><br/>
                                More than 50 stores around the world cooperate with us.
                                </h4>
                            </Col>
                            <Col span={12} style={{paddingTop: 50}}>
                                <img width={'100%'} src={iconAboutThree}/>
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                    <Col offset={1} span={22} style={{marginBottom: 40}}>
                        <Card style={{background: '#FFFFFF', borderRadius: 15, paddingTop: 50, paddingBottom: 50}}>
                        <Row className='d-flex' style={{justifyContent: 'space-between'}}>
                            <Col span={12} style={{paddingTop: 70, paddingLeft: 150}}>
                                <img width={740} height={560} src={iconAboutFour}/>
                            </Col>
                            <Col span={8} style={{paddingRight: 70, marginRight: 120}} >
                                <h4 style={{paddingTop: 100, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 40, paddingBottom: 30, color: 'black'}}>The Highest Quality of Products</h4>
                                <h4 style={{paddingTop:20, fontSize: 23, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: 'black'}}>
                                We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.
                                </h4>
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                </Row>
            </Content>
            }
            {isMobile &&
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={aboutus}/>
                </Col>
            </Content>
            }
            {isMobile &&
            <Content>
                <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col span={20} offset={2}>
                        <h1 style={{ fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 30, paddingBottom: 10, color: '#FFFFFF'}}>О нас</h1>
                    </Col>
                    <Col style={{marginBottom: 40}}>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, paddingBottom: 50}}>

                            <Col  style={{paddingLeft: 5}} >
                                <h4 style={{paddingTop: 20, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: 'white'}}>A Family That Keeps On Growing</h4>
                                <h4 style={{paddingTop:20, fontSize: 14, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: 'white'}}>
                                We always aim to please the home market, supplying great gaming keys and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
                                <br/><br/>
                                Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                                </h4>
                            </Col>
                            <Col className="d-flex" style={{paddingTop: 20, justifyContent: 'center'}}>
                                <img width={'100%'} src={iconAboutOne}/>
                            </Col>
                        </Card>
                    </Col>
                    <Col  style={{marginBottom: 40}}>
                        <Card style={{background: '#FFFFFF', borderRadius: 15, paddingTop: 50, paddingBottom: 50}}>
                            <Col className="d-flex" style={{paddingTop: 10, justifyContent: 'center'}}>
                                <img width={'100%'} src={iconAboutTwo}/>
                            </Col>
                            <Col >
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: 'black'}}>Small history</h4>
                                <h4 style={{paddingTop:20, fontSize: 14, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: 'black'}}>
                                PlayStation Store was founded in 2014 as a simple site with random keys, and only in 2016 we grew into a serious, interesting store. For all the time, we have globally changed the design of the site three times. For the first time in 2014, then a scary shop with a random began to look like a store, for the second time in 2016, with it we found our brand colors and started capturing prerolls on YouTube, and in this, 2020, we decided to go into stylish, fashionable, modern, eye-catching minimalism.
                                </h4>
                            </Col>
                        </Card>
                    </Col>
                    <Col style={{marginBottom: 40}}>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, paddingTop: 50, paddingBottom: 50}}>

                            <Col >
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: 'white'}}>You're In Safe Hands</h4>
                                <h4 style={{paddingTop:20, fontSize: 14, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: 'white'}}>
                                We have been working and selling game keys for more than 5 years and we have never had a bad review! You can take a look at it yourself in our Vkontakte group. We had more than 5 million customers.
                                <br/><br/>
                                More than 50 stores around the world cooperate with us.
                                </h4>
                            </Col>
                            <Col className="d-flex" style={{paddingTop: 20, justifyContent: 'center'}}>
                                <img width={'100%'} src={iconAboutThree}/>
                            </Col>
                        </Card>
                    </Col>
                    <Col style={{marginBottom: 40}}>
                        <Card style={{background: '#FFFFFF', borderRadius: 15, paddingTop: 50, paddingBottom: 50}}>
                            <Col className="d-flex" style={{paddingTop: 10, justifyContent: 'center'}}>
                                <img width={'100%'} src={iconAboutFour}/>
                            </Col>
                            <Col >
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: 'black'}}>The Highest Quality of Products</h4>
                                <h4 style={{paddingTop:20, fontSize: 14, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: 'black'}}>
                                We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.
                                </h4>
                            </Col>
                        </Card>
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



export default AboutUs;

import React, {useContext, useState} from "react";
import { useHistory } from "react-router-dom";
import { createNewsletterSub } from "../http/deviceAPI";

import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE, PRIVACYPOLICY, PERSONALDATA} from "../utils/consts";
import { Layout, Card, Form, Input, Button, Row, Space, Col, Image, message  } from 'antd';
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined } from '@ant-design/icons';

import americanExpress from '../assets/american-express.png'
import discover from '../assets/discover.png'
import maestro from '../assets/maestro.png'
import visa from '../assets/visa.png'

import 'antd/dist/antd.css';
const { Header, Footer, Sider, Content } = Layout;


const FooterMobile = () => {
    const history = useHistory()
    const [newsletter, setNewsletter] = useState('')

    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
      });

    const newsletterSub = async () => {
        const formData = new FormData()
        formData.append('email', newsletter)
        createNewsletterSub(formData)
        message.success('Ты подписался, ураа!')
    }

    return (
        <Footer style={{background: '#065BAA', paddingBottom: 30, fontFamily: 'IBM Plex Mono'}}>
                <Row style={{paddingTop: 20}}>
                    <Col span={23}>
                        <h4 style={{fontWeight: 700, fontSize: 25, color: 'white'}}>Подпишись на рассылку</h4>
                        <h4 style={{fontWeight: 700, fontSize: 16, color: 'white'}}>Будь первым кто узнает об новых скидках и предложениях!</h4>
                    </Col>
                </Row>
                <Row style={{paddingTop: 20}}>
                    <Col span={12}>
                        <Space>
                            <Input size="large" style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', width: 200, height: 30, background: '#065BAA', color: 'white', fontSize: 10, borderWidth: 2, borderRadius: 15}} value={newsletter} onChange={e => setNewsletter(e.target.value)} placeholder="Твоя почта" />
                            <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 8, width: 80, height: 30, borderColor: '#0072CE'}} onClick={newsletterSub}>Подписаться</Button>
                        </Space>
                    </Col>
                </Row>
                <Row style={{paddingTop: 47}}>
                    <Col span={8}>
                        <h4 style={{fontWeight: 700, fontSize: 16, color: 'white'}}>Ссылки</h4>
                        <ul>
                            <li  style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(ABOUT_US_ROUTE)}>О нас</a></li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(FAQ_ROUTE)}>Блог</a></li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(TERMS_OF_SERVICE_ROUTE)}>Соглашения</a></li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(PRIVACY_POLICY_ROUTE)}>Гарантии</a></li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(REFUND_POLICY_ROUTE)}>Новости</a></li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(PRIVACYPOLICY)}>Политика кондефициальности</a></li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(PERSONALDATA)}>Персональные данные</a></li>
                        </ul>
                    </Col>
                    <Col span={8}>
                        <h4 style={{fontWeight: 700, fontSize: 16, color: 'white'}}>Партнеры</h4>
                        <ul>
                            <li  style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a style={{color: 'white'}} href='https://www.lenovo.com/ru/ru/'>Кто-то</a></li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a style={{color: 'white'}} href='https://www.hp.com/ru-ru/home.html'>Кто-то</a></li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a style={{color: 'white'}} href='https://www.dell.com/ru-ru'>Кто-то</a></li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a style={{color: 'white'}} href='https://www.apple.com/'>Кто-то</a></li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}><a style={{color: 'white'}} href='https://www.microsoft.com/ru-ru/'>Кто-то</a></li>
                        </ul>
                    </Col>
                    <Col span={8}>
                    <h4 style={{fontWeight: 700, fontSize: 16, color: 'white'}}>Адрес</h4>
                        <ul>
                            <li  style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}>Адрес: Россия, Москва и тд</li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}>Телефон: (00) 1234 5678</li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}>Мы открыты: Понедельник-Воскресенье: 9:00 утра - 5:30 вечера</li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}>Пятница: 9:00 утра - 6:00 вечера</li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}>Суббота: 11:00 утра - 5:00 вечера</li>
                            <li style={{fontWeight: 700, fontSize: 10, color: 'white', listStyleType: 'none'}}>Почта: <a href='https://www.google.com/intl/ru/gmail/about/'>mst@email.com</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{marginTop: 50}}> 
                    <Col span={12}>
                        <Row>
                            <ul>
                                <li  style={{fontWeight: 300, fontSize: 10, color: 'white', listStyleType: 'none'}}><div className="icons-list"><IconFont type="icon-facebook" /></div></li>
                                
                            </ul>
                            <ul>
                                <li style={{fontWeight: 300, fontSize: 10, color: 'white', listStyleType: 'none'}}><div className="icons-list"><InstagramOutlined /></div></li>
                            </ul>
                            <ul>
                                <li style={{fontWeight: 300, fontSize: 10, color: 'white', listStyleType: 'none'}}><div className="icons-list"><GooglePlusOutlined /></div></li>
                            </ul>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Space style={{marginLeft: 10}}>
                            <Image
                                style={{width: 20, height: 13}}    
                                    src={americanExpress}
                                />
                            <Image
                                style={{width: 20, height: 13}}     
                                    src={discover}
                                />
                            <Image
                                style={{width: 20, height: 13}}     
                                    src={maestro}
                                />
                            <Image
                                style={{width: 20, height: 13}}     
                                    src={visa}
                                />
                        </Space>
                    </Col>
                    <Col span={12}>
                        <h4 style={{fontWeight: 700, fontSize: 10, color: 'white'}}>© 2022 MST Studio</h4>
                    </Col>
                </Row>
                </Footer>
    )
}

export default FooterMobile;
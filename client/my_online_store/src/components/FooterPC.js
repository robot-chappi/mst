
import React, {useContext, useState} from "react";
import {  useHistory } from "react-router-dom";
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


const FooterComputer = () => {
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
        <Footer style={{background: '#065BAA', paddingBottom: 100, fontFamily: 'IBM Plex Mono'}}>
                <Row style={{paddingTop: 47, marginLeft: 100}}>
                    <Col span={12}>
                        <h4 style={{fontWeight: 700, fontSize: 40, color: 'white'}}>Подпишись на новостную рассылку</h4>
                        <h4 style={{fontWeight: 700, fontSize: 16, color: 'white'}}>Будь первым кто узнает об новых скидках и предложениях!</h4>
                    </Col>
                    <Col span={12}>
                        <Space>
                            <Input size="large" style={{width: 500, height: 50, background: '#065BAA', color: 'white', borderWidth: 2, borderRadius: 15, fontWeight: 700}} value={newsletter} onChange={e => setNewsletter(e.target.value)} placeholder="Твоя почта плз :)" />
                            <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 50}} onClick={newsletterSub}>Подписаться</Button>
                        </Space>
                    </Col>
                </Row>
                <Row style={{paddingTop: 47, marginLeft: 100}}>
                    <Col span={8}>
                        <h4 style={{fontWeight: 600, fontSize: 20, color: 'white'}}>Ссылки</h4>
                        <ul>
                            <li  style={{fontWeight: 600, fontSize: 16, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(ABOUT_US_ROUTE)}>О нас</a></li>
                            <li style={{fontWeight: 600, fontSize: 16, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(FAQ_ROUTE)}>Блог</a></li>
                            <li style={{fontWeight: 600, fontSize: 16, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(TERMS_OF_SERVICE_ROUTE)}>Соглашения</a></li>
                            <li style={{fontWeight: 600, fontSize: 16, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(PRIVACY_POLICY_ROUTE)}>Гарантии</a></li>
                            <li style={{fontWeight: 600, fontSize: 16, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(REFUND_POLICY_ROUTE)}>Новости</a></li>
                            <li style={{fontWeight: 600, fontSize: 16, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(PRIVACYPOLICY)}>Политика кондефициальности</a></li>
                            <li style={{fontWeight: 600, fontSize: 16, color: 'white', listStyleType: 'none'}}><a onClick={() => history.push(PERSONALDATA)}>Персональные данные</a></li>
                        </ul>
                    </Col>
                    <Col span={8}>
                        <h4 style={{fontWeight: 700, fontSize: 20, color: 'white'}}>Партнеры</h4>
                        <ul>
                            <li  style={{fontWeight: 700, fontSize: 16, color: 'white', listStyleType: 'none'}}><a style={{color: 'white'}} href='https://www.lenovo.com/ru/ru/'>Кто-то</a></li>
                            <li style={{fontWeight: 700, fontSize: 16, color: 'white', listStyleType: 'none'}}><a style={{color: 'white'}} href='https://www.hp.com/ru-ru/home.html'>Кто-то</a></li>
                            <li style={{fontWeight: 700, fontSize: 16, color: 'white', listStyleType: 'none'}}><a style={{color: 'white'}} href='https://www.dell.com/ru-ru'>Кто-то</a></li>
                            <li style={{fontWeight: 700, fontSize: 16, color: 'white', listStyleType: 'none'}}><a style={{color: 'white'}} href='https://www.apple.com/'>Кто-то</a></li>
                            <li style={{fontWeight: 700, fontSize: 16, color: 'white', listStyleType: 'none'}}><a style={{color: 'white'}} href='https://www.microsoft.com/ru-ru/'>Кто-то</a></li>
                        </ul>
                    </Col>
                    <Col span={8}>
                    <h4 style={{fontWeight: 700, fontSize: 20, color: 'white'}}>Адрес</h4>
                        <ul>
                            <li  style={{fontWeight: 700, fontSize: 16, color: 'white', listStyleType: 'none'}}>Адрес: Россия, Москва и тд</li>
                            <li style={{fontWeight: 700, fontSize: 16, color: 'white', listStyleType: 'none'}}>Телефон: (00) 1234 5678</li>
                            <li style={{fontWeight: 700, fontSize: 16, color: 'white', listStyleType: 'none'}}>Мы открыты: Понедельник-Воскресенье: 9:00 утра - 5:30 вечера</li>
                            <li style={{fontWeight: 700, fontSize: 16, color: 'white', listStyleType: 'none'}}>Пятница: 9:00 утра - 6:00 вечера</li>
                            <li style={{fontWeight: 700, fontSize: 16, color: 'white', listStyleType: 'none'}}>Суббота: 11:00 утра - 5:00 вечера</li>
                            <li style={{fontWeight: 700, fontSize: 16, color: 'white', listStyleType: 'none'}}>Почта: <a href='https://www.google.com/intl/ru/gmail/about/' >mst@email.com</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{marginTop: 50, marginLeft: 100}}> 
                    <Col span={8}>
                        <Row>
                            <ul>
                                <li  style={{fontWeight: 300, fontSize: 16, color: 'white', listStyleType: 'none'}}><div className="icons-list"><IconFont type="icon-facebook" /></div></li>
                                
                            </ul>
                            <ul>
                                <li style={{fontWeight: 300, fontSize: 16, color: 'white', listStyleType: 'none'}}><div className="icons-list"><InstagramOutlined /></div></li>
                            </ul>
                            <ul>
                                <li style={{fontWeight: 300, fontSize: 16, color: 'white', listStyleType: 'none'}}><div className="icons-list"><GooglePlusOutlined /></div></li>
                            </ul>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Space style={{marginLeft: 50}}>
                            <Image
                                    
                                    src={americanExpress}
                                />
                            <Image
                                    
                                    src={discover}
                                />
                            <Image
                                    
                                    src={maestro}
                                />
                            <Image
                                    
                                    src={visa}
                                />
                        </Space>
                    </Col>
                    <Col span={8}>
                        <h4 style={{fontWeight: 700, fontSize: 13, color: 'white', marginLeft: 50}}>© 2022 MST Studio</h4>
                    </Col>
                </Row>
                </Footer>
    )
}

export default FooterComputer;
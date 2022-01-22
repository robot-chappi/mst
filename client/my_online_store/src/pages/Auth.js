import { observer } from "mobx-react-lite";
import React, {useContext, useState} from "react";
import {useMediaQuery} from 'react-responsive'
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { registration, login } from "../http/userAPI";
import { Context } from "../index";
import CreateAuthModl from "../components/models/CreateAuthModel";
import CreateChangePassword from "../components/models/CreateChangePassword";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import { Layout, Card, Form, Input, Button, Row, Space, Col, Image, message  } from 'antd';
import FooterComputer from "../components/FooterPC";
import FooterMobile from "../components/FooterMobile";
import fon from "../assets/loginfone.jpg"

import 'antd/dist/antd.css';
const { Header, Footer, Sider, Content } = Layout;


const Auth = observer(() => {
    const location = useLocation()

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    const isLogin = location.pathname === LOGIN_ROUTE
    const {user} = useContext(Context)
    const history = useHistory()
    const [userConfirm, setAuthConfirmVisible] = useState(false)
    const [userChangePassword, setUserChangePasswordVisible] = useState(false)
    // const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newsletter, setNewsletter] = useState('')


    const onFinish = (values) => {
        console.log('Success:', values);
      };
    

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
                user.setUser(user)
                user.setIsAuth(true)
                history.push(SHOP_ROUTE)
            } else {
                localStorage.setItem('emailUser', email)
                localStorage.setItem('passwordUser', password)
                setAuthConfirmVisible(true)
                // data = await registration(email, password)
            }
            
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

    const clicktwo = async () => {
        try {
                localStorage.setItem('emailUser', email)
                setUserChangePasswordVisible(true)
                // data = await registration(email, password)  
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

    return (

            <Layout style={{height: window.innerHeight - 54, background: "#1F1F1F", backgroundImage: `url(${fon})`}}>
                {isMobile &&
                <Content>
                    <Row>
                        <Col offset={4} span={8}><h2 style={{fontFamily: 'IBM Plex Mono', fontWeight: 700, marginTop: 30, color: '#FFFFFF'}}>Авторизация</h2></Col>
                    </Row>
                </Content>
                }
                {isDesktopOrLaptop &&
                <Content>
                    <Row>
                        <Col offset={4} span={8}><h2 style={{fontFamily: 'IBM Plex Mono', fontWeight: 700, marginTop: 150, color: '#FFFFFF'}}>Авторизация</h2></Col>
                    </Row>
                </Content>
                }
                {isDesktopOrLaptop &&
                <Content className="d-flex justify-content-center align-items-center" style={{marginTop: 440, marginBottom: 450}}>
                    <Card style={{width: 564, height: 415.46, background: '#292929', borderColor: '#292929', color: 'white', fontWeight: 'bold', marginRight: 32, borderRadius: 15}}>
                    <h2 style={{textAlign: 'center', fontFamily: 'IBM Plex Mono', fontWeight: 700, color: 'white'}}>{isLogin ? "Войти" : "Регистрация"}</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        style={{marginTop: 20}}
                        >
                        <Form.Item
                        style={{fontFamily: 'IBM Plex Mono', fontWeight: 700}}
                            name="username"
                            rules={[{ required: true, message: 'Пожалуйста введите свой ник!' }]}
                            
                        >
                            <Input style={{borderColor: 'black', borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14}} value={email} onChange={e => setEmail(e.target.value)} placeholder="Ник" />
                        </Form.Item>
                        <Form.Item
                        style={{fontFamily: 'IBM Plex Mono', fontWeight: 700}}
                            name="password"
                            rules={[{ required: true, message: 'Пожалуйста введите свой пароль!' }]}
                        >
                            <Input value={password} onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Пароль"
                            style={{borderColor: 'black', borderRadius: 4, fontFamily: 'IBM Plex Mono', height: 50, fontWeight: 700, fontSize: 14}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Space>
                            <Button style={{ background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 50}} onClick={click}>
                                {isLogin ? "Войти" : "Регистрация"}
                            </Button>
                            {isLogin ? <div>
                                    <a style={{fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, color: '#0072CE'}} onClick={clicktwo}>Забыл пароль?</a>
                                       </div>
                                :
                                        <div>
                                    <NavLink style={{fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, color: '#0072CE'}} to={LOGIN_ROUTE}>Присоединиться!</NavLink>
                                        </div>
                                }
                                <CreateAuthModl show={userConfirm} onHide={() => setAuthConfirmVisible(false)}/>
                                <CreateChangePassword show={userChangePassword} onHide={() => setUserChangePasswordVisible(false)}/>
                            </Space>
                        </Form.Item>
                        </Form>
                    </Card>
                    <Card  style={{width: 564, height: 415.46, background: '#292929', borderColor: '#292929', color: 'white', fontWeight: 'bold', marginLeft: 32, borderRadius: 15}}>
                    <h2 style={{textAlign: 'center', fontFamily: 'IBM Plex Mono', fontWeight: 700, color: 'white'}}>{isLogin ? "Новенький?" : "Есть уже аккаунт?"}</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        style={{marginTop: 20}}
                        >
                            <Form.Item>
                                <h4 style={{fontWeight: 700, fontSize: 17, color: 'white', fontFamily: 'IBM Plex Mono',}}>Создание аккаунта дает многое: </h4>
                                <ul>
                                    <li style={{fontWeight: 700, fontSize: 15, color: 'white', fontFamily: 'IBM Plex Mono',}}>Создание и отслеживание заказа</li>
                                    <li style={{fontWeight: 700, fontSize: 15, color: 'white', fontFamily: 'IBM Plex Mono',}}>Безопастная сделка</li>
                                    <li style={{fontWeight: 700, fontSize: 15, color: 'white', fontFamily: 'IBM Plex Mono',}}>Использование промокодов</li>
                                </ul>
                            </Form.Item>
                            <Form.Item>
                                {isLogin ? <div>
                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 50}}><NavLink to={REGISTRATION_ROUTE}>Регистрируйся!</NavLink></Button>
                                    </div>
                                    :
                                    <div>
                                        <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 50}}><NavLink to={LOGIN_ROUTE}>Входи!</NavLink></Button>
                                    </div>
                                    }
                                    <CreateAuthModl show={userConfirm} onHide={() => setAuthConfirmVisible(false)}/>
                            </Form.Item>
                        </Form>
                    </Card>
                </Content>
                }
                {isMobile &&
                <Content style={{marginTop: 80, marginBottom: 675}}>
                    <Col>
                    <Card style={{width: '100%', height: 285.46, background: '#292929', borderColor: '#292929', color: 'white', fontWeight: 'bold', marginRight: 32}}>
                    <h2 style={{textAlign: 'center', fontFamily: 'IBM Plex Mono', fontWeight: 700, color: '#FFFFFF'}}>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        style={{marginTop: 20}}
                        >
                        <Form.Item
                        style={{fontFamily: 'IBM Plex Mono', fontWeight: 700}}
                            name="username"
                            rules={[{ required: true, message: 'Пожалуйста введите свой ник!' }]}
                            
                        >
                            <Input style={{borderColor: 'black', borderRadius: 4, height: 50, fontWeight: 300, fontSize: 14}} value={email} onChange={e => setEmail(e.target.value)} placeholder="Ник" />
                        </Form.Item>
                        <Form.Item
                        style={{fontFamily: 'IBM Plex Mono', fontWeight: 700}}
                            name="password"
                            rules={[{ required: true, message: 'Пожалуйста введите свой пароль!' }]}
                        >
                            <Input value={password} onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Пароль"
                            style={{borderColor: 'black', borderRadius: 4, height: 50, fontWeight: 300, fontSize: 14}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Space>
                            <Button style={{ background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 50}} onClick={click}>
                                {isLogin ? "Войти" : "Регистрация"}
                            </Button>
                            {isLogin ? <div>
                                    <a style={{fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, color: '#0072CE'}} onClick={clicktwo}>Забыли пароль?</a>
                                       </div>
                                :
                                        <div>
                                    <NavLink style={{fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, color: '#0072CE'}} to={LOGIN_ROUTE}>Присоединиться!</NavLink>
                                        </div>
                                }
                                <CreateAuthModl show={userConfirm} onHide={() => setAuthConfirmVisible(false)}/>
                                <CreateChangePassword show={userChangePassword} onHide={() => setUserChangePasswordVisible(false)}/>
                            </Space>
                        </Form.Item>
                        </Form>
                    </Card>
                    <Card  style={{width: '100%', height: 285.46, background: '#292929', borderColor: '#292929', color: 'white', fontWeight: 'bold', marginTop: 10}}>
                    <h2 style={{textAlign: 'center', fontFamily: 'IBM Plex Mono', fontWeight: 700, color: '#FFFFFF'}}>{isLogin ? "Новичек?" : "Есть уже аккаунт?"}</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        style={{marginTop: 20}}
                        >
                            <Form.Item>
                                <h4 style={{fontWeight: 700, fontSize: 14, color: '#FFFFFF', fontFamily: 'IBM Plex Mono'}}>Создание аккаунта дает многое:</h4>
                                <ul>
                                    <li style={{fontWeight: 700, fontSize: 16, color: '#FFFFFF', fontFamily: 'IBM Plex Mono'}}>Создание и отслеживание заказа</li>
                                    <li style={{fontWeight: 700, fontSize: 16, color: '#FFFFFF', fontFamily: 'IBM Plex Mono'}}>Безопастная сделка</li>
                                    <li style={{fontWeight: 700, fontSize: 16, color: '#FFFFFF', fontFamily: 'IBM Plex Mono'}}>Использование промокодов</li>
                                </ul>
                            </Form.Item>
                            <Form.Item>
                                {isLogin ? <div>
                                    <Button style={{background: '#0072CE', borderColor: '#0072CE',  color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 50}}><NavLink to={REGISTRATION_ROUTE}>Регистрируйся!</NavLink></Button>
                                    </div>
                                    :
                                    <div>
                                        <Button style={{background: '#0072CE', borderColor: '#0072CE',  color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 150, height: 50}}><NavLink to={LOGIN_ROUTE}>Входи!</NavLink></Button>
                                    </div>
                                    }
                                    <CreateAuthModl show={userConfirm} onHide={() => setAuthConfirmVisible(false)}/>
                            </Form.Item>
                        </Form>
                    </Card>
                    </Col>
                </Content>
                }
                {isDesktopOrLaptop && 
                <FooterComputer />
                }
                {isMobile && 
                <FooterMobile />
                }
            </Layout>
    )
})

export default Auth;